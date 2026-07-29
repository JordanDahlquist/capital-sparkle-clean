import { useCallback, useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";
import { Reveal } from "./reveal";

export type ServiceProof = {
  eyebrow: string;
  headline: string;
  caption: string;
  beforeImage: string;
  afterImage: string;
  alt: string;
};

export type ServiceComparison = {
  eyebrow: string;
  headline: string;
  body: string[];
  goodLabel: string;
  badLabel: string;
  rows: { label: string; good: string; bad: string }[];
};

/** Drag-to-compare before/after slider, scoped to a single service page. */
export function ServiceProofSection({ proof }: { proof: ServiceProof }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : e.clientX;
      updateFromClientX(x);
    };
    const up = () => {
      dragging.current = false;
    };
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
    <section className="bg-[var(--brand-light-gray)] py-16 md:py-20">
      <div className="mx-auto max-w-[900px] px-4">
        <div className="text-center mb-8 md:mb-10">
          <p
            className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {proof.eyebrow}
          </p>
          <h2
            className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {proof.headline}
          </h2>
        </div>

        <Reveal>
          <div
            ref={ref}
            className="relative select-none overflow-hidden rounded-xl shadow-xl border border-gray-200 aspect-[4/3] sm:aspect-[16/10] cursor-ew-resize bg-white"
            onMouseDown={(e) => {
              dragging.current = true;
              updateFromClientX(e.clientX);
            }}
            onTouchStart={(e) => {
              dragging.current = true;
              updateFromClientX(e.touches[0].clientX);
            }}
          >
            <img
              src={proof.beforeImage}
              alt={`Before — ${proof.alt}`}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
            >
              <img
                src={proof.afterImage}
                alt={`After — ${proof.alt}`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            <span className="absolute top-3 left-3 rounded bg-black/65 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
              Before
            </span>
            <span className="absolute top-3 right-3 rounded bg-[var(--brand-red)] px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
              After
            </span>

            <div
              className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.35)]"
              style={{ left: `${pos}%` }}
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--brand-deep-blue)] text-xs font-bold">
                ◀▶
              </span>
            </div>

            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Compare before and after"
              className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3 opacity-0 focus-visible:opacity-100"
            />
          </div>
        </Reveal>

        <p className="mt-4 text-center text-sm text-[var(--brand-charcoal)]/75">
          {proof.caption}
        </p>
      </div>
    </section>
  );
}

/** Soft wash vs. high pressure education + comparison table. */
export function ServiceComparisonSection({
  comparison,
}: {
  comparison: ServiceComparison;
}) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1000px] px-4">
        <div className="text-center mb-8 md:mb-10">
          <p
            className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {comparison.eyebrow}
          </p>
          <h2
            className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            {comparison.headline}
          </h2>
        </div>

        <div className="mx-auto max-w-[760px] space-y-4 text-[var(--brand-charcoal)]/85 text-base md:text-lg leading-relaxed">
          {comparison.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <Reveal className="mt-10 overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <div className="grid grid-cols-3 bg-[var(--brand-deep-blue)] text-white text-xs sm:text-sm uppercase tracking-wide">
            <div className="p-3 sm:p-4" style={{ fontFamily: "var(--font-display)" }} />
            <div
              className="p-3 sm:p-4 font-bold border-l border-white/15"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {comparison.goodLabel}
            </div>
            <div
              className="p-3 sm:p-4 font-bold border-l border-white/15 text-white/70"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {comparison.badLabel}
            </div>
          </div>
          {comparison.rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-3 text-sm ${
                i % 2 ? "bg-[var(--brand-light-gray)]" : "bg-white"
              }`}
            >
              <div className="p-3 sm:p-4 font-semibold text-[var(--brand-deep-blue)]">
                {r.label}
              </div>
              <div className="p-3 sm:p-4 border-l border-gray-200 flex gap-2 text-[var(--brand-charcoal)]/85">
                <Check
                  size={16}
                  strokeWidth={3}
                  className="mt-0.5 shrink-0 text-[var(--brand-red)]"
                />
                <span>{r.good}</span>
              </div>
              <div className="p-3 sm:p-4 border-l border-gray-200 flex gap-2 text-[var(--brand-charcoal)]/65">
                <X size={16} strokeWidth={3} className="mt-0.5 shrink-0 text-gray-400" />
                <span>{r.bad}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}