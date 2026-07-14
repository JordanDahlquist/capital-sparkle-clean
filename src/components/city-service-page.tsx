import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Check, ChevronRight, MapPin } from "lucide-react";
import type { CityServiceContent } from "../data/city-services";
import { openQuoteModal, QuoteWizard } from "./quote-modal";
import { Reveal } from "./reveal";
import { HomeInAction } from "./home-in-action";
import { HomeGallery } from "./home-gallery";
import { HomeReviews } from "./home-reviews";

const PHONE_DISPLAY = "(518) 900-1913";
const PHONE_TEL = "tel:+15189001913";

export function CityServicePage({ content }: { content: CityServiceContent }) {
  const Icon = content.icon;

  return (
    <main>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[var(--brand-light-gray)] border-b border-gray-200"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-3 text-sm text-[var(--brand-charcoal)]/70 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-[var(--brand-deep-blue)]">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[var(--brand-charcoal)]/70">{content.service}</span>
          <ChevronRight size={14} />
          <span className="text-[var(--brand-deep-blue)] font-semibold">
            {content.city}, NY
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative bg-[var(--brand-deep-blue)] text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, #1E6FD9 0, transparent 45%), radial-gradient(circle at 80% 70%, #C8102E 0, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-3 py-1 rounded-full mb-4">
              <MapPin className="text-[#C8102E]" size={16} />
              <span
                className="text-xs font-bold uppercase tracking-[0.18em] text-white/90"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {content.hero.eyebrow}
              </span>
            </div>
            <h1
              className="text-4xl md:text-6xl uppercase leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {content.hero.headline}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
              {content.hero.subhead}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openQuoteModal()}
                className="btn-pop btn-shimmer inline-flex items-center justify-center gap-2 bg-[var(--brand-red)] hover:bg-[#a00d25] text-white font-bold uppercase tracking-wide px-6 py-4 rounded-md text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get Free {content.city} Quote <ArrowRight size={18} />
              </button>
              <a
                href={PHONE_TEL}
                className="btn-pop inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wide px-6 py-4 rounded-md text-base border border-white/30"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Phone size={18} /> {PHONE_DISPLAY}
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#C8102E]" /> Serving {content.city} 10+ Years
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#C8102E]" /> Same-Day Quotes
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#C8102E]" /> Local Capital Region Crew
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white/5">
              <img
                src={content.heroImage}
                alt={`${content.service} in ${content.city}, NY by Capital Pro Pressure Washing`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-[var(--brand-deep-blue)] px-4 py-3 rounded-md shadow-lg">
              <p className="text-xs uppercase font-bold tracking-widest text-[var(--brand-red)]">
                Serving
              </p>
              <p className="text-sm font-semibold">
                <Icon className="inline mr-1" size={14} /> {content.city}, NY
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Long-form intro */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[820px] px-4">
          <p
            className="text-center text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {content.service} in {content.city}
          </p>
          <h2
            className="text-center text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {content.service} Done Right, By an {content.city} Local Crew
          </h2>
          <div className="mt-6 space-y-5 text-[var(--brand-charcoal)]/85 text-lg leading-relaxed">
            {content.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="bg-[var(--brand-light-gray)] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-10 md:mb-12">
            <p
              className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Local Conditions
            </p>
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {content.localContext.heading}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-[var(--brand-charcoal)]/85 text-base md:text-lg leading-relaxed">
              {content.localContext.body}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" style={{ perspective: "1000px" }}>
            {content.localContext.bullets.map((b, i) => (
              <Reveal
                key={b.title}
                delayMs={i * 80}
                variant="flap"
                className="card-pop bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-md bg-[var(--brand-red)]/10 text-[var(--brand-red)] flex items-center justify-center mb-4">
                  <MapPin size={20} strokeWidth={2.5} />
                </div>
                <h3
                  className="text-[var(--brand-deep-blue)] text-lg mb-2 uppercase"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {b.title}
                </h3>
                <p className="text-[var(--brand-charcoal)]/85 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-10 md:mb-12">
            <p
              className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why It Matters
            </p>
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              What You Get With Capital Pro in {content.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1000px" }}>
            {content.benefits.map((b, i) => (
              <Reveal
                key={b.title}
                delayMs={i * 80}
                variant="flap"
                className="card-pop bg-[var(--brand-light-gray)] rounded-lg p-6 border border-gray-200 shadow-sm"
              >
                <div className="w-10 h-10 rounded-md bg-[var(--brand-red)]/10 text-[var(--brand-red)] flex items-center justify-center mb-4">
                  <Check size={20} strokeWidth={3} />
                </div>
                <h3
                  className="text-[var(--brand-deep-blue)] text-lg mb-2 uppercase"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {b.title}
                </h3>
                <p className="text-[var(--brand-charcoal)]/85 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <HomeInAction />

      {/* Process */}
      <section className="bg-[var(--brand-light-gray)] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-10 md:mb-12">
            <p
              className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Process
            </p>
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Simple, Professional, Guaranteed
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.process.map((step, i) => (
              <Reveal
                key={step.title}
                delayMs={i * 100}
                className="relative bg-white rounded-lg p-6 border border-gray-200"
              >
                <div
                  className="absolute -top-4 -left-2 bg-[var(--brand-deep-blue)] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-md"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {i + 1}
                </div>
                <h3
                  className="mt-3 text-[var(--brand-deep-blue)] text-lg uppercase mb-2"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                >
                  {step.title}
                </h3>
                <p className="text-[var(--brand-charcoal)]/85 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery (reuses site gallery) */}
      <HomeGallery />

      {/* Reviews */}
      <HomeReviews />

      {/* Mid CTA band */}
      <section className="bg-[var(--brand-deep-blue)] text-white py-12">
        <div className="mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3
              className="text-2xl md:text-3xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Ready for a Free {content.service} Quote in {content.city}?
            </h3>
            <p className="mt-2 text-white/80">
              Same-day callback. No pressure, no obligation.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openQuoteModal()}
              className="btn-pop btn-shimmer inline-flex items-center justify-center gap-2 bg-[var(--brand-red)] hover:bg-[#a00d25] text-white font-bold uppercase tracking-wide px-6 py-3 rounded-md"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Free Quote <ArrowRight size={18} />
            </button>
            <a
              href={PHONE_TEL}
              className="btn-pop inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wide px-6 py-3 rounded-md border border-white/30"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <Phone size={18} /> {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Neighborhoods served */}
      <section className="bg-white py-14 md:py-16 border-t border-gray-100">
        <div className="mx-auto max-w-[1000px] px-4 text-center">
          <p
            className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Neighborhoods We Serve
          </p>
          <h2
            className="text-[var(--brand-deep-blue)] text-2xl md:text-3xl uppercase leading-tight mb-6"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {content.service} Across {content.city} & Nearby
          </h2>
          <ul className="flex flex-wrap justify-center gap-2">
            {content.neighborhoods.map((n) => (
              <li
                key={n}
                className="inline-flex items-center gap-1 bg-[var(--brand-light-gray)] border border-gray-200 text-[var(--brand-charcoal)]/85 text-sm px-3 py-1.5 rounded-full"
              >
                <MapPin size={12} className="text-[var(--brand-red)]" /> {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--brand-light-gray)] py-16 md:py-20">
        <div className="mx-auto max-w-[820px] px-4">
          <div className="text-center mb-10">
            <p
              className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {content.city} FAQ
            </p>
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {content.service} in {content.city} — Answers
            </h2>
          </div>
          <div className="space-y-3">
            {content.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white rounded-lg border border-gray-200 open:shadow-sm"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between p-5 font-semibold text-[var(--brand-deep-blue)]">
                  <span>{f.q}</span>
                  <ChevronRight
                    size={20}
                    className="transition-transform group-open:rotate-90 text-[var(--brand-red)]"
                  />
                </summary>
                <div className="px-5 pb-5 text-[var(--brand-charcoal)]/85 leading-relaxed">
                  {f.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inline Quote */}
      <section
        id="quote"
        aria-labelledby="city-quote-title"
        className="bg-white py-16 md:py-20 scroll-mt-24"
      >
        <div className="mx-auto max-w-[640px] px-4">
          <div className="text-center mb-8">
            <p
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red)] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Started
            </p>
            <h2
              id="city-quote-title"
              className="text-3xl md:text-4xl font-bold uppercase text-[var(--brand-deep-blue)] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Your Free {content.city} Quote
            </h2>
            <p className="mt-3 text-[var(--brand-charcoal)]/80 text-base">
              Takes about a minute. Same-day callback in {content.city} and the Capital Region.
            </p>
          </div>
          <div className="bg-[var(--brand-light-gray)] rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
            <QuoteWizard />
          </div>
        </div>
      </section>

      {/* Related internal links */}
      <section className="bg-[var(--brand-light-gray)] py-16 border-t border-gray-100">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-8">
            <h2
              className="text-[var(--brand-deep-blue)] text-2xl md:text-3xl uppercase"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Other Services in {content.city}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {content.relatedServices.map((r) => (
              <Link
                key={r.slug}
                to="/$service"
                params={{ service: r.slug }}
                className="group block bg-white rounded-lg p-5 border border-gray-200 hover:border-[var(--brand-red)] hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[var(--brand-deep-blue)] uppercase text-lg"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {r.name}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-[var(--brand-red)] group-hover:translate-x-1 transition"
                  />
                </div>
                <p className="text-[var(--brand-charcoal)]/80 text-sm leading-relaxed">
                  {r.blurb}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mb-4">
            <h3
              className="text-[var(--brand-deep-blue)] text-xl uppercase"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              More {content.city} Landing Pages
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.relatedCityLinks.map((r) => (
              <a
                key={r.to}
                href={r.to}
                className="group block bg-white rounded-lg p-5 border border-gray-200 hover:border-[var(--brand-red)] hover:shadow-md transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[var(--brand-deep-blue)] uppercase text-base"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {r.name}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-[var(--brand-red)] group-hover:translate-x-1 transition"
                  />
                </div>
                <p className="text-[var(--brand-charcoal)]/80 text-sm leading-relaxed">
                  {r.blurb}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}