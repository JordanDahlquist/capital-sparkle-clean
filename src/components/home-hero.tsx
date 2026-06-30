import { Phone, ShieldCheck, BadgeCheck, Clock, Star, HeartHandshake } from "lucide-react";
import heroImage from "../assets/hero-placeholder.jpg.asset.json";

// Toggle ON only after the client confirms licensing & insurance.
const SHOW_LICENSED_INSURED = false;

const trustItems = [
  { icon: Clock, label: "10+ Years Experience" },
  { icon: BadgeCheck, label: "Free Quotes" },
  { icon: Star, label: "Satisfaction Guaranteed" },
  { icon: HeartHandshake, label: "Veteran & First Responder Discounts" },
  ...(SHOW_LICENSED_INSURED ? [{ icon: ShieldCheck, label: "Licensed & Insured" }] : []),
];

export function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--brand-deep-blue)]">
      {/* PLACEHOLDER background image — swap with a real Capital Pro job photo.
          Two layers share one cached image: a "dirty" (filtered) base and a
          "clean" overlay revealed by a diagonal CSS sweep. Animation is CSS-only,
          GPU-friendly (clip-path/opacity), and skipped under prefers-reduced-motion. */}
      <div aria-hidden="true" className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src={heroImage.url}
          alt=""
          loading="lazy"
          decoding="async"
          width={1920}
          height={1280}
          data-placeholder="REPLACE_WITH_REAL_CAPITAL_PRO_JOB_PHOTO"
          className="absolute inset-0 h-full w-full object-cover object-center hero-img-dirty"
        />
        <img
          src={heroImage.url}
          alt=""
          loading="lazy"
          decoding="async"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover object-center hero-img-clean"
        />
        <div className="hero-spray-streak" />
      </div>
      {/* Dark blue overlay for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, color-mix(in oklab, var(--brand-deep-blue) 92%, transparent) 0%, color-mix(in oklab, var(--brand-deep-blue) 80%, transparent) 45%, color-mix(in oklab, var(--brand-deep-blue) 55%, transparent) 75%, color-mix(in oklab, var(--brand-deep-blue) 35%, transparent) 100%)",
        }}
      />

      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <p
            className="relative z-10 text-[var(--brand-red)] font-bold uppercase tracking-[0.18em] text-xs sm:text-sm"
            style={{
              fontFamily: "var(--font-display)",
              textShadow:
                "0 1px 2px rgba(0,0,0,0.55), 0 0 12px rgba(11,61,122,0.7)",
            }}
          >
            Capital Region's Pressure Washing Pros
          </p>

          <h1
            className="mt-4 text-white font-bold uppercase leading-[1.05] text-4xl sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Make Your Home Look New Again
          </h1>

          <p className="mt-5 text-white/90 text-base sm:text-lg max-w-xl leading-relaxed">
            Professional house washing, roof cleaning, concrete sealing and more across
            Albany, Saratoga, Schenectady and the entire Capital Region. 10 years in
            business. Free quotes.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="#quote"
              className="inline-flex items-center justify-center min-h-[52px] px-6 rounded-md bg-[var(--brand-red)] text-white font-bold uppercase tracking-wide text-base hover:bg-[var(--brand-red-hover)] transition-colors"
            >
              Get Free Quote
            </a>
            <a
              href="tel:+15189001913"
              className="inline-flex items-center justify-center gap-2 min-h-[52px] px-6 rounded-md bg-white text-[var(--brand-deep-blue)] font-bold text-base hover:bg-[var(--brand-light-gray)] transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call (518) 900-1913
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-2 text-white/90 text-sm font-medium"
              >
                <Icon className="h-4 w-4 text-[var(--brand-red)]" aria-hidden="true" />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}