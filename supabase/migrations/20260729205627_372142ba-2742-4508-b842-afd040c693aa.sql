CREATE TABLE public.google_reviews (
  id text PRIMARY KEY,
  author_name text NOT NULL,
  author_photo_url text,
  rating integer NOT NULL,
  text text NOT NULL,
  relative_time text,
  published_at timestamp with time zone,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.google_reviews TO anon;
GRANT SELECT ON public.google_reviews TO authenticated;
GRANT ALL ON public.google_reviews TO service_role;
ALTER TABLE public.google_reviews ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read google reviews" ON public.google_reviews FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.google_place_stats (
  place_id text PRIMARY KEY,
  rating numeric,
  user_rating_count integer,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

GRANT SELECT ON public.google_place_stats TO anon;
GRANT SELECT ON public.google_place_stats TO authenticated;
GRANT ALL ON public.google_place_stats TO service_role;
ALTER TABLE public.google_place_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read google place stats" ON public.google_place_stats FOR SELECT TO anon, authenticated USING (true);