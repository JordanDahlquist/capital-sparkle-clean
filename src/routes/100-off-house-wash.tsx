import { createFileRoute } from "@tanstack/react-router";
import { Phone, Check, Clock, ShieldCheck, Star, Sparkles, Droplets, Home } from "lucide-react";
import heroImage from "../assets/hero-pressure-sprayer.png.asset.json";
import offerVideo from "../assets/video/house-wash-100-off.mp4.asset.json";
import offerVideoPoster from "../assets/video/house-wash-100-off-poster.jpg.asset.json";
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

const SPECIAL_ID = "100-off-house-wash";
const FAQS = [
  {
    q: "How do I get the $100 off — is there a code?",
    a: "No code needed. The $100 discount is automatically applied to any house wash quote started from this page. When you submit the form, we already know you came from this offer.",
  },
  {
    q: "Is the $100 already taken off the price you send me?",
    a: "Yes. The written quote you receive will show your final price with the $100 discount already applied — you won't need to ask for it or remind us.",
  },
  {
    q: "Is sales tax included in the price?",
    a: "No. New York State sales tax is added on top of your quoted price, the same as any other home service. We show the pre-tax price so you can see exactly what the wash costs, and tax is added on your final invoice.",
  },
  {
    q: "Can I combine this with military, first-responder, or other discounts?",
    a: "One discount per household. If you qualify for our military or first-responder discount, let us know and we'll apply whichever saves you more — we won't stack them on top of the $100 off.",
  },
  {
    q: "Does the $100 off apply to add-ons like windows or concrete cleaning?",
    a: "The $100 off is specifically for the house wash portion of your quote. Any add-ons (exterior windows, concrete, roof, etc.) are priced separately at our normal rates.",
  },
];

export const Route = createFileRoute("/100-off-house-wash")({
  head: () => ({
    meta: [
      { title: "$100 Off House Wash Special | Capital Pro Pressure Washing" },
      {
        name: "description",
        content:
          "Save $100 on a professional soft-wash house wash across Albany & the Capital Region. Limited spots this month — book online in under a minute.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "$100 Off House Wash Special" },
      {
        property: "og:description",
        content:
          "Take $100 off a full soft-wash house wash from Capital Pro Pressure Washing. Limited spots this month.",
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
          <ScarcityPill slotsLeft={5} className="mb-5" />

          <p className="mb-3 font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)]">
            Special Offer — Capital Region NY
          </p>

          <h1 className="font-[var(--font-display)] text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            $100 Off <span className="text-white/80">Your</span>
            <br className="hidden sm:block" /> Professional House Wash
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            Full soft-wash exterior house cleaning — siding, soffits, fascia, gutters, shutters. Safe for every
            surface, powered by commercial equipment, done in <strong className="text-white">1–2 hours</strong>.
          </p>

          {/* Price card */}
          <div className="mt-8 inline-flex flex-col rounded-xl border-2 border-[color:var(--brand-red)] bg-white/5 p-5 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Instant Savings</span>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-[var(--font-display)] text-5xl font-bold text-white sm:text-6xl">$100 OFF</span>
              <span className="text-sm text-white/70">any full house wash</span>
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
              Claim My $100 Off
            </button>
            <a
              href="tel:+15189001913"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] shadow-lg transition hover:bg-white/90"
              data-analytics="call_click"
              data-source="100-off-hero"
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

      {/* OFFER VIDEO */}
      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,320px)_1fr]">
            <div className="mx-auto w-full max-w-[320px]">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-xl">
                <video
                  src={offerVideo.url}
                  poster={offerVideoPoster.url}
                  className="aspect-[9/16] h-full w-full object-cover"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  aria-label="Capital Pro house washing in action on a Capital Region home"
                />
              </div>
            </div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                See It In Action
              </p>
              <h2
                className="mt-3 text-3xl font-bold uppercase leading-tight tracking-tight text-[var(--brand-deep-blue)] sm:text-4xl"
                style={{ fontFamily: "var(--font-display)" }}
              >
                This Is The $100 Off House Wash
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--brand-charcoal)]/85">
                Real footage from a Capital Region job — commercial soft-wash equipment,
                low pressure on the siding, and landscaping soaked before, during and
                after. Most homes are done in 1–2 hours, and the $100 off is applied
                automatically to any quote requested from this page.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => openQuoteModal()}
                  data-special-cta="video_primary"
                  className="btn-pop btn-shimmer inline-flex min-h-[52px] items-center justify-center rounded-md bg-[var(--brand-red)] px-6 font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--brand-red-hover)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Claim $100 Off
                </button>
                <a
                  href="tel:+15189001913"
                  data-source="100-off-video"
                  data-special-cta="video_call"
                  className="btn-pop inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-[var(--brand-deep-blue)]/20 bg-white px-6 font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] transition-colors hover:bg-[var(--brand-light-gray)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  (518) 900-1913
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SocialProofStrip />

      {/* WHAT'S INCLUDED */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)] sm:text-4xl">
            What a Capital Pro house wash includes
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
                "Low-pressure soft wash — the manufacturer-recommended method",
                "Removes green algae, black mildew, dirt, cobwebs, and wasp nests",
                "Kills mold and mildew at the root so it stays gone longer",
              ]}
            />
            <IncludedCard
              Icon={Home}
              title="Professional Process"
              points={[
                "Commercial-grade equipment — 1–2 hour typical completion",
                "We soak your plants, lawn & landscape before, during & after — zero chemical stress",
                "Most quotes done remotely via Google Earth — free on-site if you prefer",
                "Fully insured crew, uniformed and background-checked",
              ]}
            />
          </div>
        </div>
      </section>

      <BeforeAfterProof />

      <ValueStack
        priceLabel="$100 OFF your custom quote"
        items={[
          { label: "Commercial soft-wash equipment & chemistry", value: "$95" },
          { label: "2-person insured, uniformed crew (1–2 hrs)", value: "$180" },
          { label: "We soak your plants, lawn & landscape before, during & after — zero chemical stress", value: "$45" },
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
              "$100 off applies to any full-exterior house wash.",
              "Discount is automatically applied to quotes started from this page — no code needed.",
              "One discount per household. Cannot be combined with other active specials.",
              "Capital Region, NY only: Albany, Schenectady, Clifton Park, Saratoga Springs, Troy, Rensselaer & surrounding.",
              "Most quotes done remotely via Google Earth — free on-site quote available if you prefer.",
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
          <p className="mt-3 text-[color:var(--brand-charcoal)]/80">
            Everything you need to know about how the $100 off and pricing work.
          </p>

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
          <ScarcityPill slotsLeft={5} className="mb-4" />
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Lock in your $100 off
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
              Claim My $100 Off
            </button>
            <a
              href="tel:+15189001913"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] shadow-lg transition hover:bg-white/90"
              data-analytics="call_click"
              data-source="100-off-final"
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