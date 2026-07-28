import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Check, ChevronRight, MapPin } from "lucide-react";
import type { CityContent } from "../data/cities";
import { SERVICES } from "../data/services";
import { openQuoteModal, QuoteWizard } from "./quote-modal";
import { Reveal } from "./reveal";
import { HomeGallery } from "./home-gallery";
import { HomeReviews } from "./home-reviews";

const PHONE_DISPLAY = "(518) 900-1913";
const PHONE_TEL = "tel:+15189001913";

export function CityPage({ content }: { content: CityContent }) {
  return (
    <main>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="bg-[var(--brand-light-gray)] border-b border-gray-200">
        <div className="mx-auto max-w-[1200px] px-4 py-3 text-sm text-[var(--brand-charcoal)]/70 flex items-center gap-2 flex-wrap">
          <Link to="/" className="hover:text-[var(--brand-deep-blue)]">Home</Link>
          <ChevronRight size={14} />
          <span className="text-[var(--brand-charcoal)]/70">Service Area</span>
          <ChevronRight size={14} />
          <span className="text-[var(--brand-deep-blue)] font-semibold">{content.city}, NY</span>
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
              <li className="flex items-center gap-1"><Check size={16} className="text-[#C8102E]" /> Licensed & Insured</li>
              <li className="flex items-center gap-1"><Check size={16} className="text-[#C8102E]" /> Same-Day Callback</li>
              <li className="flex items-center gap-1"><Check size={16} className="text-[#C8102E]" /> 10+ Years Local</li>
            </ul>
          </div>
          <div className="hidden md:block relative">
            <img
              src={content.heroImage}
              alt={`Capital Pro Pressure Washing serving ${content.city}, NY`}
              className="rounded-lg shadow-2xl w-full h-auto"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[900px] px-4 space-y-5">
          {content.intro.map((p, i) => (
            <Reveal key={i} delayMs={i * 60}>
              <p className="text-[var(--brand-charcoal)] text-lg leading-relaxed">{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services offered in this city */}
      <section className="bg-[var(--brand-light-gray)] py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-10">
            <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              What We Clean In {content.city}
            </p>
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-5xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Every Exterior Cleaning Service, One Local Crew
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to="/$service"
                  params={{ service: s.slug }}
                  className="group flex items-center gap-3 rounded-md border border-[var(--brand-deep-blue)]/10 bg-white p-4 hover:border-[var(--brand-bright-blue)] hover:shadow-md transition-all"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded bg-[var(--brand-deep-blue)]/5 text-[var(--brand-deep-blue)] group-hover:bg-[var(--brand-bright-blue)]/10 group-hover:text-[var(--brand-bright-blue)] transition-colors shrink-0">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm font-semibold text-[var(--brand-charcoal)] group-hover:text-[var(--brand-bright-blue)] transition-colors leading-tight">
                    {s.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="max-w-[900px] mb-10">
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight mb-4"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {content.localContext.heading}
            </h2>
            <p className="text-[var(--brand-charcoal)] text-lg leading-relaxed">
              {content.localContext.body}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {content.localContext.bullets.map((b, i) => (
              <Reveal key={b.title} delayMs={i * 60}>
                <div className="rounded-lg border border-[var(--brand-deep-blue)]/10 bg-[var(--brand-light-gray)] p-6 h-full">
                  <h3 className="font-bold text-[var(--brand-deep-blue)] text-lg mb-2">{b.title}</h3>
                  <p className="text-[var(--brand-charcoal)]/85 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="bg-[var(--brand-deep-blue)] text-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-10">
            <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Why {content.city} Chooses Capital Pro
            </p>
            <h2
              className="text-3xl md:text-5xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Local, Insured, Soft-Wash Specialists
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.whyLocal.map((b, i) => (
              <Reveal key={b.title} delayMs={i * 60}>
                <div className="rounded-lg bg-white/5 border border-white/10 p-6 h-full">
                  <h3
                    className="font-bold text-white text-lg mb-2 uppercase tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {b.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <HomeGallery />

      {/* Reviews */}
      <HomeReviews />

      {/* Neighborhoods served */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-8">
            <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Neighborhoods We Serve
            </p>
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {content.city} & Surrounding
            </h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-2">
            {content.neighborhoods.map((n) => (
              <li
                key={n}
                className="px-4 py-2 rounded-full bg-[var(--brand-light-gray)] text-[var(--brand-deep-blue)] text-sm font-semibold border border-[var(--brand-deep-blue)]/10"
              >
                <MapPin size={14} className="inline mr-1 text-[#C8102E]" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[var(--brand-light-gray)] py-16 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-[900px] px-4">
          <div className="text-center mb-10">
            <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              {content.city} FAQs
            </p>
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Answers For {content.city} Homeowners
            </h2>
          </div>
          <div className="space-y-3">
            {content.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-lg bg-white border border-[var(--brand-deep-blue)]/10 p-5 open:shadow-md transition-shadow"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-bold text-[var(--brand-deep-blue)] text-base">
                  {f.q}
                  <span className="shrink-0 text-[#C8102E] group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
                </summary>
                <p className="mt-3 text-[var(--brand-charcoal)]/85 text-base leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quote wizard */}
      <section id="quote" className="bg-white py-16 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-[900px] px-4">
          <div className="text-center mb-8">
            <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Free Quote — {content.city}, NY
            </p>
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Get Your Free {content.city} Quote
            </h2>
          </div>
          <QuoteWizard />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--brand-deep-blue)] text-white py-14">
        <div className="mx-auto max-w-[900px] px-4 text-center">
          <h2
            className="text-3xl md:text-4xl uppercase leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Ready For A Cleaner {content.city} Home?
          </h2>
          <p className="text-white/85 text-lg mb-6">
            Same-day callback. Free on-site quote. No pressure — just a firm price.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
        </div>
      </section>
    </main>
  );
}