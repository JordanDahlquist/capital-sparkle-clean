---
name: Live Google reviews
description: Reviews section pulls live Google rating/count + latest 5 reviews via Places API, cached in DB and merged with curated reviews
type: feature
---
Google Business Profile place ID: ChIJfWnKorso2mMRoexCVw-g18w (Capital Pro Pressure Washing).
Uses the client's own Google Cloud key stored as GOOGLE_PLACES_API_KEY (Places API New enabled).
`src/lib/google-reviews.functions.ts` fetches rating, total review count, and the 5 reviews Google
returns, upserts them into `google_reviews` / `google_place_stats`, and refreshes at most every 12h.
Cache accumulates over time, so the collection grows as new reviews come in.
`src/components/home-reviews.tsx` shows live reviews first, then the curated hardcoded list as
fallback/backfill; the "X Google reviews" badge is live (falls back to "90+" if the fetch fails).
