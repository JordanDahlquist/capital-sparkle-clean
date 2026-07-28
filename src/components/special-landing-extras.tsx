import { useEffect, useRef, useState, useCallback } from "react";
import { Star, ShieldCheck, Clock, Check } from "lucide-react";
import { openQuoteModal } from "./quote-modal";
import houseWashBefore from "../assets/before-after/house-wash-before.png.asset.json";
import houseWashAfter from "../assets/before-after/house-wash-after.png.asset.json";

/* ────────────────────────────────────────────────────────────────────────── */
/* Analytics — fire a page-view + wire CTA click tracking                    */
/* ────────────────────────────────────────────────────────────────────────── */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (...args: unknown[]) => void;
  }
}

export function useSpecialAnalytics(specialId: string) {
  // page view — once per mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "special_page_view", special_id: specialId });
    window.fbq?.("trackCustom", "SpecialPageView", { special_id: specialId });
  }, [specialId]);

  // delegated CTA click tracking — any button/link with data-special-cta
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.<HTMLElement>("[data-special-cta]");
      if (!el) return;
      const label = el.getAttribute("data-special-cta") || "cta";
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "special_cta_click",
        special_id: specialId,
        cta_label: label,
      });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [specialId]);
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Exit intent (desktop only) — opens the quote modal once per session       */
/* ────────────────────────────────────────────────────────────────────────── */

export function useExitIntent(storageKey: string) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // desktop only — mobile "exit intent" is unreliable
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
    try {
      if (sessionStorage.getItem(storageKey)) return;
    } catch {
      /* ignore */
    }

    let armed = false;
    const arm = window.setTimeout(() => { armed = true; }, 8000); // grace period
    const onLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY > 0) return; // only when cursor leaves the top
      try { sessionStorage.setItem(storageKey, "1"); } catch { /* ignore */ }
      document.removeEventListener("mouseleave", onLeave);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "special_exit_intent", special_id: storageKey });
      openQuoteModal();
    };
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.clearTimeout(arm);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [storageKey]);
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Social proof strip — star rating + short customer quotes                  */
/* ────────────────────────────────────────────────────────────────────────── */

const QUOTES = [
  { text: "House looks brand new. Crew was on time and super professional.", name: "Sarah M., Clifton Park" },
  { text: "Best money I've spent on the house all year. Amazing difference.", name: "Mike D., Albany" },
  { text: "Fast quote, fair price, great work. Already booked them for the deck.", name: "Jen R., Saratoga Springs" },
];

export function SocialProofStrip() {
  return (
    <section className="border-b border-[color:var(--brand-deep-blue)]/10 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:py-10">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-center gap-3">
            <div className="flex" aria-hidden="true">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-[#F5A623] text-[#F5A623]" />
              ))}
            </div>
            <p className="text-sm font-semibold text-[color:var(--brand-charcoal)]">
              5.0 rating · Trusted by homeowners across the Capital Region
            </p>
          </div>
          <p className="text-xs uppercase tracking-wider text-[color:var(--brand-charcoal)]/60">
            10+ years in business
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {QUOTES.map((q) => (
            <blockquote
              key={q.name}
              className="rounded-lg border border-[color:var(--brand-deep-blue)]/10 bg-[var(--brand-light-gray)] p-4"
            >
              <p className="text-sm text-[color:var(--brand-charcoal)]/90">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-2 text-xs font-semibold uppercase tracking-wider text-[color:var(--brand-deep-blue)]">
                — {q.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Before/After proof — draggable slider (house wash)                        */
/* ────────────────────────────────────────────────────────────────────────── */

export function BeforeAfterProof() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      updateFromClientX(x);
    };
    const up = () => { dragging.current = false; };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", up);
    };
  }, [updateFromClientX]);

  return (
    <section className="bg-[var(--brand-light-gray)]">
      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
        <div className="mb-6 max-w-2xl">
          <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)] sm:text-4xl">
            See the difference
          </h2>
          <p className="mt-3 text-[color:var(--brand-charcoal)]/80">
            Drag the slider to compare a real Capital Pro house wash — before and after.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full select-none overflow-hidden rounded-lg bg-gray-200 shadow-lg aspect-[4/3] sm:aspect-[16/9]"
          onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
          onTouchStart={(e) => { dragging.current = true; updateFromClientX(e.touches[0].clientX); }}
        >
          <img
            src={houseWashAfter.url}
            alt="House wash — after"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img
              src={houseWashBefore.url}
              alt="House wash — before"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          </div>
          <span className="absolute top-3 left-3 rounded-full bg-[#0B3D7A] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow">
            Before
          </span>
          <span className="absolute top-3 right-3 rounded-full bg-[#C8102E] px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow">
            After
          </span>
          <div className="pointer-events-none absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]"
            style={{ left: `calc(${pos}% - 2px)` }}
          />
          <button
            type="button"
            aria-label="Drag to compare before and after"
            className="absolute top-1/2 flex h-12 w-12 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-[#0B3D7A] bg-white shadow-lg touch-none"
            style={{ left: `calc(${pos}% - 24px)` }}
          >
            <span className="text-lg font-bold text-[#0B3D7A]">‹›</span>
          </button>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Value stack — anchor perceived value against the price                    */
/* ────────────────────────────────────────────────────────────────────────── */

export function ValueStack({
  items,
  priceLabel,
  strikeTotal,
}: {
  items: { label: string; value: string }[];
  priceLabel: string;
  strikeTotal?: string;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
        <h2 className="font-[var(--font-display)] text-3xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)] sm:text-4xl">
          Why it's not "just cheap"
        </h2>
        <p className="mt-3 max-w-2xl text-[color:var(--brand-charcoal)]/80">
          Here's what a real professional house wash actually costs to deliver — and what you're getting.
        </p>

        <div className="mt-8 overflow-hidden rounded-xl border border-[color:var(--brand-deep-blue)]/15">
          {items.map((it, i) => (
            <div
              key={it.label}
              className={
                "flex items-center justify-between gap-4 px-5 py-4 " +
                (i % 2 === 0 ? "bg-[var(--brand-light-gray)]" : "bg-white")
              }
            >
              <span className="text-sm font-medium text-[color:var(--brand-charcoal)] sm:text-base">{it.label}</span>
              <span className="font-[var(--font-display)] text-base font-bold tracking-tight text-[var(--brand-deep-blue)] sm:text-lg">
                {it.value}
              </span>
            </div>
          ))}
          {strikeTotal ? (
            <div className="flex items-center justify-between gap-4 border-t border-[color:var(--brand-deep-blue)]/15 bg-white px-5 py-4">
              <span className="text-sm font-semibold uppercase tracking-wider text-[color:var(--brand-charcoal)]/70">
                Comparable local pricing
              </span>
              <span className="font-[var(--font-display)] text-lg font-bold text-[color:var(--brand-charcoal)]/50 line-through sm:text-xl">
                {strikeTotal}
              </span>
            </div>
          ) : null}
          <div className="flex items-center justify-between gap-4 bg-[var(--brand-deep-blue)] px-5 py-5 text-white">
            <span className="text-sm font-semibold uppercase tracking-wider">Today, from this page</span>
            <span className="font-[var(--font-display)] text-2xl font-bold tracking-tight sm:text-3xl">
              {priceLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Guarantee — risk reversal                                                 */
/* ────────────────────────────────────────────────────────────────────────── */

export function GuaranteeCallout() {
  return (
    <section className="bg-[var(--brand-light-gray)]">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
        <div className="flex flex-col items-start gap-5 rounded-2xl border-2 border-[color:var(--brand-deep-blue)]/15 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:p-8">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--brand-deep-blue)] text-white">
            <ShieldCheck className="h-8 w-8" aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-[var(--font-display)] text-xl font-bold uppercase tracking-tight text-[var(--brand-deep-blue)] sm:text-2xl">
              100% Satisfaction Guarantee
            </h3>
            <p className="mt-2 text-sm text-[color:var(--brand-charcoal)]/85 sm:text-base">
              If you spot something we missed, call us within 7 days — we come back and make it right. No arguing,
              no upsells, no drama. That's the whole guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Scarcity pill — current month + slot count                                */
/* ────────────────────────────────────────────────────────────────────────── */

export function ScarcityPill({ slotsLeft, className = "" }: { slotsLeft: number; className?: string }) {
  const [label, setLabel] = useState("Limited spots this month");
  useEffect(() => {
    const month = new Date().toLocaleString("en-US", { month: "long" });
    setLabel(`Only ${slotsLeft} slots left for ${month}`);
  }, [slotsLeft]);
  return (
    <div
      className={
        "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur " +
        className
      }
    >
      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* FAQ JSON-LD                                                               */
/* ────────────────────────────────────────────────────────────────────────── */

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

/* Small check bullet — re-exported for convenience so the routes stay tidy */
export function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-red)]" aria-hidden="true" />
      <span>{children}</span>
    </li>
  );
}