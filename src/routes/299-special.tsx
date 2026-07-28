import { createFileRoute } from "@tanstack/react-router";
import { Phone, Check, Clock, ShieldCheck, Star, Sparkles, Droplets, Home } from "lucide-react";
import heroImage from "../assets/service-heroes/service-house-washing.png.asset.json";
import { openQuoteModal } from "../components/quote-modal";
import { SHOW_LICENSED_INSURED } from "../data/flags";
import {
  useSpecialAnalytics,
  useExitIntent,
  SocialProofStrip,
  BeforeAfterProof,
  ValueStack,
  GuaranteeCallout,
  ScarcityPill,
  FaqJsonLd,
} from "../components/special-landing-extras";

const SPECIAL_ID = "299-special";
const FAQS = [
  {
    q: "How do I claim the $299 special — is there a code?",
    a: "No code needed. Our special pricing is automatically applied to any house wash quote started from this page.",
  },
  {
    q: "Is sales tax included in the price?",
    a: "No. New York State sales tax is added on top of your quoted price, the same as any other home service. Your final invoice will show your price plus tax.",
  },
  {
    q: "Why does it say \"starting at $299\"?",
    a: "Every home is different — square footage, height, number of stories, and features like dormers or extensive trim all affect the price. $299 is our starting price; we'll send you a quick custom quote for your exact home so there are no surprises.",
  },
  {
    q: "Can I add windows, concrete, or roof cleaning to this?",
    a: "Absolutely. The special covers the house wash portion; any add-ons are priced separately at our normal rates and added to your quote.",
  },
  {
    q: "Can I combine this with military or first-responder discounts?",
    a: "One discount per household. If you qualify for our military or first-responder discount, let us know and we'll apply whichever saves you more.",
  },
];

export const Route = createFileRoute("/299-special")({
  head: () => ({
    meta: [
      { title: "$299 House Wash Special | Capital Pro Pressure Washing" },
      {
        name: "description",
        content:
          "House washes starting at $299 across Albany & the Capital Region. Professional soft-wash exterior cleaning — limited spots this month.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "$299 House Wash Special" },
      {
        property: "og:description",
        content:
          "Full soft-wash house exterior starting at $299. Limited spots this month.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SpecialLanding,
});

function SpecialLanding() {
  useSpecialAnalytics(SPECIAL_ID);
  useExitIntent(SPECIAL_ID);

  return (
    <main>
      <FaqJsonLd faqs={FAQS} />
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[var(--brand-deep-blue)]">
        <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
          <img
            src={heroImage.url}
            alt=""
            className="h-full w-full object-cover opacity-60"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--brand-deep-blue)]/85 via-[var(--brand-deep-blue)]/75 to-[var(--brand-deep-blue)]/95" />
        </div>

        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20 text-white">
          <ScarcityPill slotsLeft={6} className="mb-5" />

          <p className="mb-3 font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)]">
            Special Offer — Capital Region NY
          </p>

          <h1 className="font-[var(--font-display)] text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            House Washes <span className="text-white/80">Starting At</span>
            <br className="hidden sm:block" /> $299
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            Full soft-wash exterior — siding, soffits, fascia, gutters, shutters — done in 1–2 hours with
            commercial equipment. Get a fast, no-obligation quote for your exact home.
          </p>

          {/* Price card */}
          <div className="mt-8 inline-flex flex-col rounded-xl border-2 border-[color:var(--brand-red)] bg-white/5 p-5 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Special Pricing</span>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-[var(--font-display)] text-5xl font-bold text-white sm:text-6xl">From $299</span>
              <span className="text-sm text-white/70">+ tax</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center rounded-md bg-[color:var(--brand-red)] px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 active:scale-[0.98]"
              data-special-cta="hero_primary"
            >
              Claim My $299 Special
            </button>
            <a
              href="tel:+15189001913"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] shadow-lg transition hover:bg-white/90"
              data-analytics="call_click"
              data-source="299-special-hero"
              data-special-cta="hero_call"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              (518) 900-1913
            </a>
          </div>

          {/* Trust strip */}
          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/85 sm:grid-cols-4">
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-white/70" aria-hidden="true" />10+ Years Experience</li>
            <li className="flex items-center gap-2"><Star className="h-4 w-4 text-white/70" aria-hidden="true" />Satisfaction Guaranteed</li>
            <li className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-white/70" aria-hidden="true" />Commercial Equipment</li>
            {SHOW_LICENSED_INSURED ? (
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-white/70" aria-hidden="true" />Licensed & Insured</li>
            ) : (
              <li className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-white/70" aria-hidden="true" />Fully Insured</li>
            )}
          </ul>
        </div>
      </section>

      <SocialProofStrip />

      {/* WHAT'S INCLUDED */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)] sm:text-4xl">
            What every house wash includes
          </h2>
          <p className="mt-3 max-w-2xl text-[color:var(--brand-charcoal)]/80">
            A true full-exterior soft wash — not just a spray-down. Safe for vinyl, aluminum, brick, and painted
            surfaces.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <IncludedCard
              Icon={Droplets}
              title="Full Soft-Wash Exterior"
              points={[
                "Siding, soffits, fascia, exterior gutters, shutters, trim",
                "Low-pressure soft wash — manufacturer-recommended method",
                "Removes green algae, black mildew, dirt, cobwebs, and wasp nests",
                "Kills mold and mildew at the root so it stays gone longer",
              ]}
            />
            <IncludedCard
              Icon={Home}
              title="Professional Process"
              points={[
                "Commercial-grade equipment — 1–2 hour typical completion",
                "Plant, pet, and landscape safe application",
                "Most quotes done remotely via Google Earth — free on-site if you prefer",
                "Fully insured crew, uniformed and background-checked",
              ]}
            />
          </div>
        </div>
      </section>

      <BeforeAfterProof />

      <ValueStack
        priceLabel="From $299"
        strikeTotal="$450 – $550 typical local price"
        items={[
          { label: "Commercial soft-wash equipment & chemistry", value: "$95" },
          { label: "2-person insured, uniformed crew (1–2 hrs)", value: "$180" },
          { label: "Plant, pet & landscape safe application", value: "$45" },
          { label: "10+ years experience across Capital Region homes", value: "$60" },
          { label: "100% satisfaction guarantee — we come back if needed", value: "$70" },
        ]}
      />

      <GuaranteeCallout />

      {/* FINE PRINT */}
      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)]">
            The details
          </h3>
          <ul className="mt-4 grid gap-3 text-sm text-[color:var(--brand-charcoal)]/85 sm:grid-cols-2">
            {[
              "House washes start at $299 — final price depends on the size and features of your home.",
              "Price is plus applicable NY sales tax.",
              "Special pricing is automatically applied to quotes started from this page — no code needed.",
              "Free custom quote — usually done remotely via Google Earth in minutes.",
              "Capital Region, NY only: Albany, Schenectady, Clifton Park, Saratoga Springs, Troy, Rensselaer & surrounding.",
              "Prefer an on-site walk-through? Free in-person quotes available too.",
              "One discount per household. Cannot be combined with other active specials.",
              "Military & first-responder discounts available — just mention it when you book.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-red)]" aria-hidden="true" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)] sm:text-4xl">
            Quick questions about the offer
          </h2>
          <dl className="mt-8 divide-y divide-[color:var(--brand-deep-blue)]/10 border-y border-[color:var(--brand-deep-blue)]/10">
            {FAQS.map((item) => (
              <div key={item.q} className="py-5">
                <dt className="font-[var(--font-display)] text-lg font-bold uppercase tracking-tight text-[var(--brand-deep-blue)]">
                  {item.q}
                </dt>
                <dd className="mt-2 text-[color:var(--brand-charcoal)]/85">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FINAL CTA BAND */}
      <section className="bg-[var(--brand-deep-blue)] text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:py-20">
          <ScarcityPill slotsLeft={6} className="mb-4" />
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Lock in your special pricing
          </h2>
          <p className="mt-3 text-white/85 sm:text-lg">
            Takes under a minute. We'll confirm your slot and price by end of day.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center rounded-md bg-[color:var(--brand-red)] px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 active:scale-[0.98]"
              data-special-cta="final_primary"
            >
              Claim My $299 Special
            </button>
            <a
              href="tel:+15189001913"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] shadow-lg transition hover:bg-white/90"
              data-analytics="call_click"
              data-source="299-special-final"
              data-special-cta="final_call"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call (518) 900-1913
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function IncludedCard({
  Icon,
  title,
  points,
}: {
  Icon: typeof Droplets;
  title: string;
  points: string[];
}) {
  return (
    <div className="rounded-xl border border-[color:var(--brand-deep-blue)]/10 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[var(--brand-deep-blue)] text-white">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)]">
          {title}
        </h3>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-[color:var(--brand-charcoal)]/85">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-red)]" aria-hidden="true" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}