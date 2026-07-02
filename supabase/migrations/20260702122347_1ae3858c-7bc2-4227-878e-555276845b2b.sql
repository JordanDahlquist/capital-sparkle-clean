
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  location TEXT,
  property_type TEXT,
  services TEXT[] NOT NULL DEFAULT '{}',
  timeline TEXT,
  message TEXT,
  ghl_forwarded BOOLEAN NOT NULL DEFAULT false,
  ghl_error TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- No policies: only service_role (server) can access. RLS blocks anon/authenticated.
