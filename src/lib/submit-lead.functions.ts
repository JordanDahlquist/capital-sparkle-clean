import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const payloadSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().max(100).optional().default(""),
  phone: z.string().trim().min(7).max(20),
  email: z.string().trim().email().max(255),
  location: z.string().trim().max(200).optional().default(""),
  propertyType: z.enum(["Home", "Business"]),
  services: z.array(z.string().max(60)).max(20),
  timeline: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().max(2000).optional().default(""),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => payloadSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import(
      "@/integrations/supabase/client.server"
    );

    // 1. Save to leads table FIRST as backup — never lose a lead.
    const { data: inserted, error: insertErr } = await supabaseAdmin
      .from("leads" as never)
      .insert({
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        email: data.email,
        location: data.location,
        property_type: data.propertyType,
        services: data.services,
        timeline: data.timeline,
        message: data.message,
      } as never)
      .select("id")
      .single();

    if (insertErr) {
      console.error("[submitLead] failed to save lead to DB", insertErr);
      // Still attempt to forward to GHL — a DB hiccup should not lose the lead.
    }

    const leadId = (inserted as { id?: string } | null)?.id;

    // 2. Forward to GoHighLevel inbound webhook.
    const webhookUrl = process.env.GHL_WEBHOOK_URL;
    let ghlOk = false;
    let ghlError: string | null = null;

    if (!webhookUrl) {
      ghlError = "GHL_WEBHOOK_URL not configured";
      console.error("[submitLead]", ghlError);
    } else {
      try {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            email: data.email,
            location: data.location,
            propertyType: data.propertyType,
            services: data.services,
            timeline: data.timeline,
            message: data.message,
            source: "Website Quote",
          }),
        });
        if (!res.ok) {
          ghlError = `GHL responded ${res.status}: ${await res.text().catch(() => "")}`;
          console.error("[submitLead]", ghlError);
        } else {
          ghlOk = true;
        }
      } catch (err) {
        ghlError = err instanceof Error ? err.message : String(err);
        console.error("[submitLead] GHL POST threw", err);
      }
    }

    // 3. Update the lead row with forwarding status (best-effort).
    if (leadId) {
      await supabaseAdmin
        .from("leads" as never)
        .update({ ghl_forwarded: ghlOk, ghl_error: ghlError } as never)
        .eq("id", leadId);
    }

    // Always return success to the client — never block conversion on GHL.
    return { ok: true };
  });