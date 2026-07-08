import { useEffect, useRef, useState } from "react";
import { Phone, Play, Pause, Volume2, VolumeX, Check } from "lucide-react";
import { openQuoteModal } from "./quote-modal";
import { Reveal } from "./reveal";
import videoAsset from "../assets/video/crew-in-action.mp4.asset.json";
import posterAsset from "../assets/video/crew-in-action-poster.jpg.asset.json";

const BULLETS = [
  "Local crew, 10+ years",
  "Soft-wash safe methods",
  "Free quotes, same-day callback",
];

export function HomeInAction() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    setReduced(
      typeof window !== "undefined" &&
        !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  // Lazy-load the <source> when near viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setLoaded(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Play/pause based on visibility (not for reduced motion)
  useEffect(() => {
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setInView(e.isIntersecting);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || !loaded || reduced) return;
    if (inView) {
      v.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      v.pause();
      setPlaying(false);
    }
  }, [inView, loaded, reduced]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    setLoaded(true);
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <Reveal className="text-center mb-10 md:mb-12">
          <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            See Us In Action
          </p>
          <h2
            className="text-[#0B3D7A] text-3xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Real Work, Real Results
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* LEFT — copy + CTA */}
          <Reveal className="order-2 md:order-1">
            <p
              className="text-[#1A1A1A] text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              This is what we do every day across the Capital Region. Real homes,
              real crews, real results. No stock photos, no gimmicks — just a
              clean job done right.
            </p>
            <ul className="space-y-3 mb-8">
              {BULLETS.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#0B3D7A]">
                    <Check size={14} strokeWidth={3} className="text-white" />
                  </span>
                  <span
                    className="text-[#1A1A1A] text-base"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="btn-pop btn-shimmer btn-jiggle inline-flex items-center justify-center bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
              >
                Get Your Free Quote
              </button>
              <a
                href="tel:+15189001913"
                className="btn-pop inline-flex items-center justify-center gap-2 bg-[#0B3D7A] hover:bg-[#0a3060] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
              >
                <Phone size={20} strokeWidth={2.5} />
                Call (518) 900-1913
              </a>
            </div>
          </Reveal>

          {/* RIGHT — vertical video */}
          <Reveal className="order-1 md:order-2 flex justify-center">
            <div
              ref={containerRef}
              className="relative w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-black"
            >
              <video
                ref={videoRef}
                poster={posterAsset.url}
                muted={muted}
                loop
                playsInline
                preload="none"
                className="absolute inset-0 h-full w-full object-cover"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              >
                {loaded && <source src={videoAsset.url} type="video/mp4" />}
              </video>

              {/* Big play overlay when paused (esp. reduced motion) */}
              {!playing && (
                <button
                  type="button"
                  aria-label="Play video"
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/35 transition-colors"
                >
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg">
                    <Play size={28} strokeWidth={2.5} className="text-[#0B3D7A] ml-1" fill="#0B3D7A" />
                  </span>
                </button>
              )}

              {/* Controls */}
              <div className="absolute bottom-3 right-3 flex gap-2">
                <button
                  type="button"
                  aria-label={playing ? "Pause video" : "Play video"}
                  onClick={togglePlay}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                >
                  {playing ? <Pause size={18} strokeWidth={2.5} /> : <Play size={18} strokeWidth={2.5} />}
                </button>
                <button
                  type="button"
                  aria-label={muted ? "Unmute video" : "Mute video"}
                  onClick={toggleMute}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                >
                  {muted ? <VolumeX size={18} strokeWidth={2.5} /> : <Volume2 size={18} strokeWidth={2.5} />}
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}