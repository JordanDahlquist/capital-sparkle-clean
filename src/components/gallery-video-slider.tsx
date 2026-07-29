import { useCallback, useEffect, useRef, useState } from "react";
import v1 from "../assets/video/clips/clip-img_2311.mp4.asset.json";
import p1 from "../assets/video/clips/clip-img_2311-poster.jpg.asset.json";
import v2 from "../assets/video/clips/clip-img_2346.mp4.asset.json";
import p2 from "../assets/video/clips/clip-img_2346-poster.jpg.asset.json";
import v3 from "../assets/video/clips/clip-img_2357.mp4.asset.json";
import p3 from "../assets/video/clips/clip-img_2357-poster.jpg.asset.json";
import v4 from "../assets/video/clips/clip-img_2370.mp4.asset.json";
import p4 from "../assets/video/clips/clip-img_2370-poster.jpg.asset.json";
import v5 from "../assets/video/clips/clip-img_2031.mp4.asset.json";
import p5 from "../assets/video/clips/clip-img_2031-poster.jpg.asset.json";
import v6 from "../assets/video/clips/clip-img_2096.mp4.asset.json";
import p6 from "../assets/video/clips/clip-img_2096-poster.jpg.asset.json";
import v7 from "../assets/video/clips/clip-img_2109.mp4.asset.json";
import p7 from "../assets/video/clips/clip-img_2109-poster.jpg.asset.json";
import v8 from "../assets/video/clips/clip-img_2160.mp4.asset.json";
import p8 from "../assets/video/clips/clip-img_2160-poster.jpg.asset.json";
import v9 from "../assets/video/clips/clip-img_2161.mp4.asset.json";
import p9 from "../assets/video/clips/clip-img_2161-poster.jpg.asset.json";
import v10 from "../assets/video/clips/clip-img_2179.mp4.asset.json";
import p10 from "../assets/video/clips/clip-img_2179-poster.jpg.asset.json";

/** Muted job clips — horizontal slider. Add more entries here as new clips come in. */
const CLIPS: Array<{ src: string; poster: string; caption: string; wide?: boolean }> = [
  { src: v1.url, poster: p1.url, caption: "Surface cleaning in action" },
  { src: v2.url, poster: p2.url, caption: "Soft wash rinse" },
  { src: v3.url, poster: p3.url, caption: "Driveway cleaning pass" },
  { src: v4.url, poster: p4.url, caption: "Exterior cleaning on the job" },
  { src: v5.url, poster: p5.url, caption: "On the job", wide: true },
  { src: v6.url, poster: p6.url, caption: "On the job" },
  { src: v7.url, poster: p7.url, caption: "On the job" },
  { src: v8.url, poster: p8.url, caption: "On the job", wide: true },
  { src: v9.url, poster: p9.url, caption: "On the job", wide: true },
  { src: v10.url, poster: p10.url, caption: "On the job" },
];

export function GalleryVideoSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(CLIPS.length - 1, i));
    const child = track.children[clamped] as HTMLElement | undefined;
    if (child) {
      track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const children = Array.from(track.children) as HTMLElement[];
        const center = track.scrollLeft + track.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        children.forEach((c, i) => {
          const d = Math.abs(c.offsetLeft - track.offsetLeft + c.clientWidth / 2 - center);
          if (d < bestDist) { bestDist = d; best = i; }
        });
        setIndex(best);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 -mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {CLIPS.map((c) => (
          <figure
            key={c.src}
            className={
              "snap-center shrink-0 rounded-xl overflow-hidden bg-black shadow-md border border-gray-200 " +
              (c.wide
                ? "w-[88%] sm:w-[70%] lg:w-[48%]"
                : "w-[60%] sm:w-[36%] lg:w-[24%]")
            }
          >
            <video
              src={c.src}
              poster={c.poster}
              muted
              playsInline
              loop
              autoPlay
              preload="metadata"
              controls={false}
              disablePictureInPicture
              className={"w-full object-cover " + (c.wide ? "aspect-video" : "aspect-[9/16]")}
            />
          </figure>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous clip"
          onClick={() => scrollTo(index - 1)}
          className="h-10 w-10 rounded-full bg-white border-2 border-[#0B3D7A] text-[#0B3D7A] flex items-center justify-center shadow-sm hover:bg-[#0B3D7A] hover:text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <div className="flex gap-2">
          {CLIPS.map((c, i) => (
            <button
              key={c.src}
              type="button"
              aria-label={`Go to clip ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={
                "h-2.5 rounded-full transition-all " +
                (i === index ? "w-6 bg-[#C8102E]" : "w-2.5 bg-gray-300 hover:bg-gray-400")
              }
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next clip"
          onClick={() => scrollTo(index + 1)}
          className="h-10 w-10 rounded-full bg-white border-2 border-[#0B3D7A] text-[#0B3D7A] flex items-center justify-center shadow-sm hover:bg-[#0B3D7A] hover:text-white transition-colors"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
}