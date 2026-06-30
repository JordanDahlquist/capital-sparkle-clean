import { QuoteWizard } from "./quote-modal";

/**
 * Inline rendering of the same multi-step quote form, anchored at #quote,
 * placed above the footer. Lets users who scroll past the modal CTAs still
 * convert without opening a dialog.
 */
export function InlineQuoteSection() {
  return (
    <section
      id="quote"
      aria-labelledby="quote-inline-title"
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
            className="text-3xl md:text-4xl font-bold uppercase text-[var(--brand-deep-blue)] tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Get Your Free Quote
          </h2>
          <p className="mt-3 text-[var(--brand-charcoal)]/80 text-base">
            Takes about a minute. No obligation — we'll text or call back the same day.
          </p>
        </div>
        <div className="qm-inline-card">
          <QuoteWizard titleId="quote-inline-title" />
        </div>
      </div>
    </section>
  );
}
