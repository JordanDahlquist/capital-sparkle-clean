import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Check, ChevronRight } from "lucide-react";
import type { ServiceContent } from "../data/services";
import { SERVICES } from "../data/services";
import { openQuoteModal } from "./quote-modal";
import { QuoteWizard } from "./quote-modal";
import { Reveal } from "./reveal";

const PHONE_DISPLAY = "(518) 900-1913";
const PHONE_TEL = "tel:+15189001913";

export function ServicePage({ service }: { service: ServiceContent }) {
  const Icon = service.icon;
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <main>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="bg-[var(--brand-light-gray)] border-b border-gray-200"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-3 text-sm text-[var(--brand-charcoal)]/70 flex items-center gap-2">
          <Link to="/" className="hover:text-[var(--brand-deep-blue)]">
            Home
          </Link>
          <ChevronRight size={14} />
          <span className="text-[var(--brand-deep-blue)] font-semibold">
            {service.name}
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
              <Icon className="text-[#C8102E]" size={18} />
              <span
                className="text-xs font-bold uppercase tracking-[0.18em] text-white/90"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.hero.eyebrow}
              </span>
            </div>
            <h1
              className="text-4xl md:text-6xl uppercase leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              {service.hero.headline}
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/85 leading-relaxed max-w-xl">
              {service.hero.subhead}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => openQuoteModal()}
                className="btn-pop btn-shimmer inline-flex items-center justify-center gap-2 bg-[var(--brand-red)] hover:bg-[#a00d25] text-white font-bold uppercase tracking-wide px-6 py-4 rounded-md text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get Free Quote <ArrowRight size={18} />
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
                <Check size={16} className="text-[#C8102E]" /> 10+ Years Experience
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#C8102E]" /> Same-Day Quotes
              </li>
              <li className="flex items-center gap-2">
                <Check size={16} className="text-[#C8102E]" /> Local Capital Region Crew
              </li>
            </ul>
          </div>

          {/* Service hero image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10 bg-white/5">
              <img
                src={service.heroImage}
                alt={`${service.name} by Capital Pro Pressure Washing`}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white text-[var(--brand-deep-blue)] px-4 py-3 rounded-md shadow-lg">
              <p className="text-xs uppercase font-bold tracking-widest text-[var(--brand-red)]">
                Serving
              </p>
              <p className="text-sm font-semibold">Capital Region, NY</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[820px] px-4 text-center">
          <p
            className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About This Service
          </p>
          <h2
            className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {service.name} Done Right the First Time
          </h2>
          <p className="mt-5 text-[var(--brand-charcoal)]/85 text-lg leading-relaxed">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-[var(--brand-light-gray)] py-16 md:py-20">
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
              What You Get With Capital Pro
            </h2>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            style={{ perspective: "1000px" }}
          >
            {service.benefits.map((b, i) => (
              <Reveal
                key={b.title}
                delayMs={i * 80}
                variant="flap"
                className="card-pop bg-white rounded-lg p-6 border border-gray-200 shadow-sm"
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

      {/* Process */}
      <section className="bg-white py-16 md:py-20">
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
            {service.process.map((step, i) => (
              <Reveal
                key={step.title}
                delayMs={i * 100}
                className="relative bg-[var(--brand-light-gray)] rounded-lg p-6 border border-gray-200"
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

      {/* Mid CTA band */}
      <section className="bg-[var(--brand-deep-blue)] text-white py-12">
        <div className="mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3
              className="text-2xl md:text-3xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Ready for a Free {service.name} Quote?
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

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-[820px] px-4">
          <div className="text-center mb-10">
            <p
              className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FAQ
            </p>
            <h2
              className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {service.faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-[var(--brand-light-gray)] rounded-lg border border-gray-200 open:shadow-sm"
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

      {/* Inline Quote Form */}
      <section
        id="quote"
        aria-labelledby="service-quote-title"
        className="bg-[var(--brand-light-gray)] py-16 md:py-20 scroll-mt-24"
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
              id="service-quote-title"
              className="text-3xl md:text-4xl font-bold uppercase text-[var(--brand-deep-blue)] tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get Your Free {service.name} Quote
            </h2>
            <p className="mt-3 text-[var(--brand-charcoal)]/80 text-base">
              Takes about a minute. Same-day callback in the Capital Region.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8">
            <QuoteWizard />
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-[1200px] px-4">
          <div className="text-center mb-8">
            <h2
              className="text-[var(--brand-deep-blue)] text-2xl md:text-3xl uppercase"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              Explore Our Other Services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {others.map((s) => {
              const OI = s.icon;
              return (
                <Link
                  key={s.slug}
                  to="/$service"
                  params={{ service: s.slug }}
                  className="group flex flex-col items-center text-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-[var(--brand-red)] hover:shadow-md transition"
                >
                  <OI className="text-[var(--brand-red)] group-hover:scale-110 transition" size={28} />
                  <span className="text-sm font-semibold text-[var(--brand-deep-blue)] leading-tight">
                    {s.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}