import { createServerFn } from "@tanstack/react-start";

export type LiveReview = {
  id: string;
  authorName: string;
  authorPhotoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string | null;
  publishedAt: string | null;
};

export type LiveReviewsPayload = {
  rating: number | null;
  reviewCount: number | null;
  reviews: LiveReview[];
};

const PLACE_ID = "ChIJfWnKorso2mMRoexCVw-g18w";
const REFRESH_AFTER_MS = 12 * 60 * 60 * 1000; // 12 hours

async function refreshFromGoogle() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) throw new Error("GOOGLE_PLACES_API_KEY is not configured");

  const res = await fetch(
    `https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=en`,
    {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`Places API failed [${res.status}]: ${await res.text()}`);
  }

  const body = (await res.json()) as {
    rating?: number;
    userRatingCount?: number;
    reviews?: Array<{
      name?: string;
      rating?: number;
      text?: { text?: string };
      originalText?: { text?: string };
      relativePublishTimeDescription?: string;
      publishTime?: string;
      authorAttribution?: { displayName?: string; photoUri?: string };
    }>;
  };

  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const rows = (body.reviews ?? [])
    .map((r) => ({
      id: r.name ?? "",
      author_name: r.authorAttribution?.displayName ?? "Google User",
      author_photo_url: r.authorAttribution?.photoUri ?? null,
      rating: r.rating ?? 5,
      text: r.text?.text ?? r.originalText?.text ?? "",
      relative_time: r.relativePublishTimeDescription ?? null,
      published_at: r.publishTime ?? null,
      updated_at: new Date().toISOString(),
    }))
    .filter((r) => r.id && r.text);

  if (rows.length) {
    const { error } = await supabaseAdmin
      .from("google_reviews")
      .upsert(rows, { onConflict: "id" });
    if (error) console.error("[google-reviews] upsert reviews failed", error);
  }

  const { error: statsError } = await supabaseAdmin.from("google_place_stats").upsert(
    {
      place_id: PLACE_ID,
      rating: body.rating ?? null,
      user_rating_count: body.userRatingCount ?? null,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "place_id" },
  );
  if (statsError) console.error("[google-reviews] upsert stats failed", statsError);
}

export const getGoogleReviews = createServerFn({ method: "GET" }).handler(
  async (): Promise<LiveReviewsPayload> => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { data: stats } = await supabaseAdmin
      .from("google_place_stats")
      .select("rating, user_rating_count, updated_at")
      .eq("place_id", PLACE_ID)
      .maybeSingle();

    const stale =
      !stats || Date.now() - new Date(stats.updated_at).getTime() > REFRESH_AFTER_MS;

    if (stale) {
      try {
        await refreshFromGoogle();
      } catch (err) {
        console.error("[google-reviews] refresh failed", err);
      }
    }

    const [{ data: fresh }, { data: rows }] = await Promise.all([
      supabaseAdmin
        .from("google_place_stats")
        .select("rating, user_rating_count")
        .eq("place_id", PLACE_ID)
        .maybeSingle(),
      supabaseAdmin
        .from("google_reviews")
        .select("id, author_name, author_photo_url, rating, text, relative_time, published_at")
        .order("published_at", { ascending: false, nullsFirst: false })
        .limit(60),
    ]);

    return {
      rating: fresh?.rating != null ? Number(fresh.rating) : null,
      reviewCount: fresh?.user_rating_count ?? null,
      reviews: (rows ?? []).map((r) => ({
        id: r.id,
        authorName: r.author_name,
        authorPhotoUrl: r.author_photo_url,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time,
        publishedAt: r.published_at,
      })),
    };
  },
);
