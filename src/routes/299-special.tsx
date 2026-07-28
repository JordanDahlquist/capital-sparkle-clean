import { createFileRoute } from "@tanstack/react-router";
import { Phone, Check, Clock, ShieldCheck, Star, Sparkles, Droplets, Home } from "lucide-react";
import heroImage from "../assets/service-heroes/service-house-washing.png.asset.json";
import { openQuoteModal } from "../components/quote-modal";
import { SHOW_LICENSED_INSURED } from "../data/flags";

export const Route = createFileRoute("/299-special")({
  head: () => ({
    meta: [
      { title: "$299 House Wash Special | Capital Pro Pressure Washing" },
      {
        name: "description",
        content:
          "Limited-time $299 soft-wash house wash special for homes up to 2,000 sqft across Albany & the Capital Region. Only a few slots left this month.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "$299 House Wash Special" },
      {
        property: "og:description",
        content:
          "Full soft-wash house exterior for one flat price. Homes up to 2,000 sqft. Limited spots this month.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SpecialLanding,
});

function SpecialLanding() {
  return (
    <main>
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
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Limited spots this month
          </div>

          <p className="mb-3 font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)]">
            Special Offer — Capital Region NY
          </p>

          <h1 className="font-[var(--font-display)] text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            $299 House Wash Special
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            One flat price. Homes up to <strong className="text-white">2,000 sqft</strong>. Full soft-wash exterior
            — siding, soffits, fascia, gutters, shutters — done in 1–2 hours with commercial equipment.
          </p>

          {/* Price card */}
          <div className="mt-8 inline-flex flex-col rounded-xl border-2 border-[color:var(--brand-red)] bg-white/5 p-5 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Flat Special Price</span>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-[var(--font-display)] text-5xl font-bold text-white sm:text-6xl">$299</span>
              <span className="text-sm text-white/70">+ tax · up to 2,000 sqft</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center rounded-md bg-[color:var(--brand-red)] px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 active:scale-[0.98]"
            >
              Claim My $299 Special
            </button>
            <a
              href="tel:+15189001913"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] shadow-lg transition hover:bg-white/90"
              data-analytics="call_click"
              data-source="299-special-hero"
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

      {/* WHAT'S INCLUDED */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)] sm:text-4xl">
            What's included for $299
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

      {/* FINE PRINT */}
      <section className="bg-[var(--brand-light-gray)]">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)]">
            The details
          </h3>
          <ul className="mt-4 grid gap-3 text-sm text-[color:var(--brand-charcoal)]/85 sm:grid-cols-2">
            {[
              "Flat $299 price for homes up to 2,000 sqft (heated living area).",
              "Price is plus applicable NY sales tax.",
              "Larger homes: we'll send a quick custom quote — usually still one of the best values around.",
              "Special is automatically applied to quotes started from this page — no code needed.",
              "Capital Region, NY only: Albany, Schenectady, Clifton Park, Saratoga Springs, Troy, Rensselaer & surrounding.",
              "Most quotes done remotely via Google Earth — free on-site quote available if you prefer.",
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
            {[
              {
                q: "How do I claim the $299 special — is there a code?",
                a: "No code needed. The $299 flat price is automatically applied to any house wash quote started from this page.",
              },
              {
                q: "Is sales tax included in the $299?",
                a: "No. New York State sales tax is added on top of the $299, the same as any other home service. Your final invoice will show the $299 plus tax.",
              },
              {
                q: "What if my home is larger than 2,000 sqft?",
                a: "We'll send a quick custom quote at the same great per-square-foot rate. Larger homes are still one of the best values around — you just won't see the exact $299 flat price.",
              },
              {
                q: "Can I add windows, concrete, or roof cleaning to this?",
                a: "Absolutely. The $299 covers the house wash portion; any add-ons are priced separately at our normal rates and added to your quote.",
              },
              {
                q: "Can I combine this with military or first-responder discounts?",
                a: "One discount per household. If you qualify for our military or first-responder discount, let us know and we'll apply whichever saves you more.",
              },
            ].map((item) => (
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Only a few spots left this month
          </div>
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Lock in your $299 special
          </h2>
          <p className="mt-3 text-white/85 sm:text-lg">
            Takes under a minute. We'll confirm your slot and price by end of day.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center rounded-md bg-[color:var(--brand-red)] px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 active:scale-[0.98]"
            >
              Claim My $299 Special
            </button>
            <a
              href="tel:+15189001913"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] shadow-lg transition hover:bg-white/90"
              data-analytics="call_click"
              data-source="299-special-final"
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