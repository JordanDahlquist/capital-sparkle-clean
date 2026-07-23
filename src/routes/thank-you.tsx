import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef } from "react";
import { z } from "zod";
import { fallback, zodValidator } from "@tanstack/zod-adapter";

const searchSchema = z.object({
  first_name: fallback(z.string(), "").default(""),
  last_name: fallback(z.string(), "").default(""),
  email: fallback(z.string(), "").default(""),
  phone: fallback(z.string(), "").default(""),
  address: fallback(z.string(), "").default(""),
  city: fallback(z.string(), "").default(""),
  state: fallback(z.string(), "").default(""),
  postal_code: fallback(z.string(), "").default(""),
  property_type: fallback(z.string(), "").default(""),
  services: fallback(z.string(), "").default(""),
  timeline: fallback(z.string(), "").default(""),
  notes: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/thank-you")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Thank You — Capital Pro Pressure Washing" },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content:
          "Thanks for requesting a free quote from Capital Pro Pressure Washing. Book a consultation call now or we'll reach out the same day.",
      },
    ],
  }),
  component: ThankYou,
});

const BOOKING_BASE =
  "https://go.capitalproeliteservices.com/widget/booking/fMwpj0GslUDSEyhFN2jf";

function ThankYou() {
  const search = Route.useSearch();
  const scriptLoaded = useRef(false);

  const bookingSrc = useMemo(() => {
    const params = new URLSearchParams();
    if (search.first_name) params.set("first_name", search.first_name);
    if (search.last_name) params.set("last_name", search.last_name);
    if (search.email) params.set("email", search.email);
    if (search.phone) params.set("phone", search.phone);
    if (search.address) params.set("address", search.address);
    if (search.city) params.set("city", search.city);
    if (search.state) params.set("state", search.state);
    if (search.postal_code) params.set("postal_code", search.postal_code);
    if (search.property_type) params.set("property_type", search.property_type);
    if (search.services) params.set("services", search.services);
    if (search.timeline) params.set("timeline", search.timeline);
    if (search.notes) params.set("notes", search.notes);
    const qs = params.toString();
    return qs ? `${BOOKING_BASE}?${qs}` : BOOKING_BASE;
  }, [
    search.first_name,
    search.last_name,
    search.email,
    search.phone,
    search.address,
    search.city,
    search.state,
    search.postal_code,
    search.property_type,
    search.services,
    search.timeline,
    search.notes,
  ]);

  useEffect(() => {
    if (scriptLoaded.current) return;
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://link.msgsndr.com/js/form_embed.js"]',
    );
    if (existing) {
      scriptLoaded.current = true;
      return;
    }
    const s = document.createElement("script");
    s.src = "https://link.msgsndr.com/js/form_embed.js";
    s.type = "text/javascript";
    s.async = true;
    document.body.appendChild(s);
    scriptLoaded.current = true;
  }, []);

  return (
    <main className="min-h-[70vh] bg-[var(--brand-light-gray)] py-10 md:py-16 px-4">
      <div className="mx-auto max-w-[880px] w-full">
        <div className="text-center mb-8">
          <p
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red)] mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Request Received
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold uppercase text-[var(--brand-deep-blue)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            We've got your request.
          </h1>
          <p className="mt-3 text-[var(--brand-charcoal)]/80 max-w-[560px] mx-auto">
            Want to lock in a time? Pick a slot below and we'll call you then.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <iframe
            src={bookingSrc}
            id="fMwpj0GslUDSEyhFN2jf"
            title="Book a consultation call"
            scrolling="no"
            style={{
              width: "100%",
              border: "none",
              overflow: "hidden",
              display: "block",
              minHeight: "700px",
            }}
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-[var(--brand-charcoal)]/80">
            Prefer to just talk?{" "}
            <a
              href="tel:+15189001913"
              className="font-bold text-[var(--brand-deep-blue)] underline underline-offset-4 hover:text-[var(--brand-red)] transition"
            >
              Call (518) 900-1913
            </a>
          </p>
          <p className="mt-2 text-sm text-[var(--brand-charcoal)]/60">
            No pressure — we'll reach out same day either way.
          </p>
        </div>
      </div>
    </main>
  );
}