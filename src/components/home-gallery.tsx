import { useRef, useState, useCallback, useEffect } from "react";
import { openQuoteModal } from "./quote-modal";
import { Reveal } from "./reveal";
import houseWashBefore from "../assets/before-after/house-wash-before.png.asset.json";
import houseWashAfter from "../assets/before-after/house-wash-after.png.asset.json";
import roofWashBefore from "../assets/before-after/roof-wash-before.png.asset.json";
import roofWashAfter from "../assets/before-after/roof-wash-after.png.asset.json";
import paverBefore from "../assets/before-after/paver-before.png.asset.json";
import paverAfter from "../assets/before-after/paver-after.png.asset.json";
import concreteBefore from "../assets/before-after/concrete-before.png.asset.json";
import concreteAfter from "../assets/before-after/concrete-after.png.asset.json";
import deckBefore from "../assets/before-after/deck-before.png.asset.json";
import deckAfter from "../assets/before-after/deck-after.png.asset.json";

/**
 * Home Before/After Gallery
 * ----------------------------------------------------------------
 * All <img> tags below use clearly-marked PLACEHOLDER sources.
 * Each image carries a `data-placeholder="REPLACE_..."` marker so
 * real Capital Pro before/after job photos can be swapped in 1:1.
 * Do NOT present these placeholders as real jobs anywhere visible.
 * ----------------------------------------------------------------
 */

// Simple inline SVG placeholders so we don't ship binary stand-ins.
// Real photos will replace these by URL via the data-placeholder markers.
const placeholder = (label: string, tone: "before" | "after") => {
  const bg = tone === "before" ? "#6b6b6b" : "#cfd8e3";
  const fg = tone === "before" ? "#e5e5e5" : "#0B3D7A";
  const esc = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  const safeLabel = esc(label);
  const anchorX = tone === "before" ? "25%" : "75%";
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'>
    <rect width='800' height='600' fill='${bg}'/>
    <text x='${anchorX}' y='48%' font-family='Inter,sans-serif' font-size='34' font-weight='700' fill='${fg}' text-anchor='middle'>${tone.toUpperCase()}</text>
    <text x='${anchorX}' y='58%' font-family='Inter,sans-serif' font-size='20' fill='${fg}' text-anchor='middle' opacity='0.85'>${safeLabel}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [nudge, setNudge] = useState(false);

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

  // One-time handle wiggle when slider scrolls into view, to hint it's draggable.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) return;
    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            obs.disconnect();
            setNudge(true);
            window.setTimeout(() => setNudge(false), 650);
            break;
          }
        }
      },
      { threshold: 0.35 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none overflow-hidden rounded-lg shadow-lg aspect-[4/3] sm:aspect-[16/9] bg-gray-200"
      onMouseDown={(e) => { dragging.current = true; updateFromClientX(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; updateFromClientX(e.touches[0].clientX); }}
    >
      {/* AFTER (base layer) */}
      <img
        src={houseWashAfter.url}
        alt="House wash — after"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />
      {/* BEFORE (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img
          src={houseWashBefore.url}
          alt="House wash — before"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="absolute top-3 left-3 bg-[#0B3D7A] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
        Before
      </span>
      <span className="absolute top-3 right-3 bg-[#C8102E] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
        After
      </span>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)] pointer-events-none"
        style={{ left: `calc(${pos}% - 2px)` }}
      />
      <button
        type="button"
        aria-label="Drag to compare before and after"
        className={
          "absolute top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white shadow-lg border-2 border-[#0B3D7A] flex items-center justify-center cursor-ew-resize touch-none " +
          (nudge ? "handle-nudge" : "")
        }
        style={{ left: `calc(${pos}% - 24px)` }}
        onMouseDown={(e) => { e.stopPropagation(); dragging.current = true; }}
        onTouchStart={(e) => { e.stopPropagation(); dragging.current = true; }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B3D7A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 6 3 12 9 18" />
          <polyline points="15 6 21 12 15 18" />
        </svg>
      </button>
    </div>
  );
}

const tiles: Array<{ caption: string; beforeMarker: string; afterMarker: string }> = [
  { caption: "House Washing", beforeMarker: "REPLACE_HOUSEWASH_BEFORE", afterMarker: "REPLACE_HOUSEWASH_AFTER" },
  { caption: "Roof Washing", beforeMarker: "REPLACE_ROOF_BEFORE", afterMarker: "REPLACE_ROOF_AFTER" },
  { caption: "Paver Cleaning & Sealing", beforeMarker: "REPLACE_PAVER_BEFORE", afterMarker: "REPLACE_PAVER_AFTER" },
  { caption: "Concrete Cleaning", beforeMarker: "REPLACE_CONCRETE_BEFORE", afterMarker: "REPLACE_CONCRETE_AFTER" },
  { caption: "Deck & Patio", beforeMarker: "REPLACE_DECK_BEFORE", afterMarker: "REPLACE_DECK_AFTER" },
  { caption: "Gutter Cleaning", beforeMarker: "REPLACE_GUTTER_BEFORE", afterMarker: "REPLACE_GUTTER_AFTER" },
];

const tileImages: Record<string, { before: string; after: string; beforeAlt: string; afterAlt: string }> = {
  "Roof Washing": {
    before: roofWashBefore.url,
    after: roofWashAfter.url,
    beforeAlt: "Roof washing — before",
    afterAlt: "Roof washing — after",
  },
  "Paver Cleaning & Sealing": {
    before: paverBefore.url,
    after: paverAfter.url,
    beforeAlt: "Paver cleaning & sealing — before",
    afterAlt: "Paver cleaning & sealing — after",
  },
  "Concrete Cleaning": {
    before: concreteBefore.url,
    after: concreteAfter.url,
    beforeAlt: "Concrete cleaning — before",
    afterAlt: "Concrete cleaning — after",
  },
  "Deck & Patio": {
    before: deckBefore.url,
    after: deckAfter.url,
    beforeAlt: "Deck and patio cleaning — before",
    afterAlt: "Deck and patio cleaning — after",
  },
};

export function HomeGallery() {
  return (
    <section id="gallery" className="bg-[#F4F6F8] py-16 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Real Results
          </p>
          <h2
            className="text-[#0B3D7A] text-3xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            See The Capital Pro Difference
          </h2>
        </div>

        {/* PART 1 — Featured interactive slider */}
        <Reveal className="mb-12 md:mb-16">
          <BeforeAfterSlider />
        </Reveal>

        {/* PART 2 — Grid of 6 before/after pairs */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1000px" }}
        >
          {tiles.map((t, i) => (
            <Reveal
              as="figure"
              key={t.caption}
              delayMs={i * 90}
              variant="flap"
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200"
            >
              <div className="grid grid-cols-2 gap-0.5 bg-gray-200">
                <div className="relative aspect-[4/3]">
                  <img
                    src={tileImages[t.caption]?.before ?? placeholder(t.caption, "before")}
                    alt={tileImages[t.caption]?.beforeAlt ?? `${t.caption} before — placeholder`}
                    data-placeholder={tileImages[t.caption] ? undefined : t.beforeMarker}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-[#0B3D7A] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[4/3]">
                  <img
                    src={tileImages[t.caption]?.after ?? placeholder(t.caption, "after")}
                    alt={tileImages[t.caption]?.afterAlt ?? `${t.caption} after — placeholder`}
                    data-placeholder={tileImages[t.caption] ? undefined : t.afterMarker}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute top-2 right-2 bg-[#C8102E] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                    After
                  </span>
                </div>
              </div>
              <figcaption
                className="text-center text-[#0B3D7A] uppercase text-base md:text-lg py-4 px-3"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700, letterSpacing: "0.02em" }}
              >
                {t.caption}
              </figcaption>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="btn-pop btn-shimmer btn-jiggle inline-block bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
