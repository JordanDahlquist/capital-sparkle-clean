import { useEffect, useRef, useState } from "react";

/**
 * Decorative full-width divider with a pressure-washer "water jet" streak
 * that shoots horizontally across when scrolled into view.
 * Pure SVG + CSS. No libraries. Animation fires once per page load.
 * prefers-reduced-motion: streak is hidden, divider stays a flat band.
 */

const droplets: Array<{ r: number; topPct: number; delayMs: number; dy: number }> = [
  { r: 3, topPct: 50, delayMs: 80, dy: 6 },
  { r: 2, topPct: 46, delayMs: 150, dy: -4 },
  { r: 2.5, topPct: 54, delayMs: 220, dy: 8 },
  { r: 1.75, topPct: 49, delayMs: 290, dy: -2 },
  { r: 2, topPct: 52, delayMs: 360, dy: 5 },
];

export function WaterJetDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setPlay(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const playClass = play ? "is-playing" : "";

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="water-jet-divider relative w-full h-[100px] bg-[#F4F6F8] overflow-hidden"
    >
      {/* Jet streak */}
      <div className={`wj-jet ${playClass}`}>
        <svg
          width="320"
          height="20"
          viewBox="0 0 320 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wjGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1E6FD9" stopOpacity="0" />
              <stop offset="45%" stopColor="#1E6FD9" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#1E6FD9" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect x="0" y="8" width="320" height="4" rx="2" fill="url(#wjGrad)" />
          <polygon points="296,4 320,10 296,16" fill="#1E6FD9" opacity="0.9" />
        </svg>
      </div>

      {/* Trailing droplets */}
      {droplets.map((d, i) => (
        <div
          key={i}
          className={`wj-drop wj-drop-${i} ${playClass}`}
          style={
            {
              top: `${d.topPct}%`,
              ["--wj-delay" as string]: `${d.delayMs}ms`,
              ["--wj-dy" as string]: `${d.dy}px`,
            } as React.CSSProperties
          }
        >
          <svg width={d.r * 2} height={d.r * 2} xmlns="http://www.w3.org/2000/svg">
            <circle cx={d.r} cy={d.r} r={d.r} fill="#1E6FD9" />
          </svg>
        </div>
      ))}
    </div>
  );
}