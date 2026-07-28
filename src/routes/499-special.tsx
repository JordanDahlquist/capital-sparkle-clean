import { createFileRoute } from "@tanstack/react-router";
import { Phone, Check, Clock, ShieldCheck, Star, Sparkles, Droplets, AppWindow } from "lucide-react";
import heroImage from "../assets/service-heroes/service-house-washing.png.asset.json";
import { openQuoteModal } from "../components/quote-modal";
import { SHOW_LICENSED_INSURED } from "../data/flags";

export const Route = createFileRoute("/499-special")({
  head: () => ({
    meta: [
      { title: "$499 House Wash + Window Special | Capital Pro Pressure Washing" },
      {
        name: "description",
        content:
          "Limited-time $499 house wash + exterior window cleaning special (homes up to 2,500 sqft) across Albany & the Capital Region. Only a few slots left this month.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "$499 House Wash + Window Cleaning Special" },
      {
        property: "og:description",
        content: "Soft-wash house exterior + streak-free exterior windows for one flat price. Limited spots this month.",
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
          {/* Urgency pill */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Limited spots this month
          </div>

          <p className="mb-3 font-[var(--font-display)] text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--brand-red)]">
            Special Offer — Capital Region NY
          </p>

          <h1 className="font-[var(--font-display)] text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-6xl">
            $499 House Wash <span className="text-white/80">+</span>
            <br className="hidden sm:block" /> Exterior Window Cleaning
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/85 sm:text-xl">
            One flat price. Homes up to <strong className="text-white">2,500 sqft</strong>. Soft-wash exterior house
            wash <em>and</em> streak-free exterior windows — done in one visit.
          </p>

          {/* Price card */}
          <div className="mt-8 inline-flex flex-col rounded-xl border-2 border-[color:var(--brand-red)] bg-white/5 p-5 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/70">Flat Special Price</span>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="font-[var(--font-display)] text-5xl font-bold text-white sm:text-6xl">$499</span>
              <span className="text-sm text-white/70">+ tax · up to 2,500 sqft</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="inline-flex items-center justify-center rounded-md bg-[color:var(--brand-red)] px-7 py-4 text-base font-bold uppercase tracking-wide text-white shadow-lg transition hover:brightness-110 active:scale-[0.98]"
            >
              Claim My $499 Special
            </button>
            <a
              href="tel:+15189001913"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] shadow-lg transition hover:bg-white/90"
              data-analytics="call_click"
              data-source="499-special-hero"
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
            What's included for $499
          </h2>
          <p className="mt-3 max-w-2xl text-[color:var(--brand-charcoal)]/80">
            Two pro services bundled into one visit — the fastest way to refresh the whole exterior of your home.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <IncludedCard
              Icon={Droplets}
              title="Full Soft-Wash House Wash"
              points={[
                "Every washable exterior surface — siding, soffits, fascia, gutters (exterior), shutters",
                "Low-pressure soft wash safe for vinyl, aluminum, brick, and painted surfaces",
                "Removes green algae, black mildew, dirt, cobwebs, and wasp nests",
                "1–2 hour typical completion with commercial equipment",
              ]}
            />
            <IncludedCard
              Icon={AppWindow}
              title="Exterior Window Cleaning"
              points={[
                "Purified-water pole system — no soap residue, no streaks",
                "Every exterior pane, frame, and sill",
                "Two- and three-story safe (no ladders in your landscaping)",
                "Screens should be removed by you before we arrive",
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
              "Flat $499 price for homes up to 2,500 sqft (heated living area).",
            "Price is plus applicable NY sales tax.",
              "Larger homes: we'll send a quick custom quote — usually still one of the best values around.",
              "Capital Region, NY only: Albany, Schenectady, Clifton Park, Saratoga Springs, Troy, Rensselaer & surrounding.",
              "Most quotes done remotely via Google Earth — free on-site quote available if you prefer.",
              "Please remove window screens before we arrive so we can clean every pane fully.",
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

      {/* FINAL CTA BAND */}
      <section className="bg-[var(--brand-deep-blue)] text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:py-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Only a few spots left this month
          </div>
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase leading-tight sm:text-5xl">
            Lock in your $499 special
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
              Claim My $499 Special
            </button>
            <a
              href="tel:+15189001913"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-base font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] shadow-lg transition hover:bg-white/90"
              data-analytics="call_click"
              data-source="499-special-final"
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