import beforeAsset from "../assets/house-wash-before.mp4.asset.json";
import afterAsset from "../assets/house-wash-after.mp4.asset.json";
import { Reveal } from "./reveal";

export function BeforeAfterVideo() {
  return (
    <section className="bg-[var(--brand-light-gray)] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10 md:mb-12">
          <p
            className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Real Job, Real Results
          </p>
          <h2
            className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            See The Difference In Motion
          </h2>
          <p className="mt-4 text-[var(--brand-charcoal)]/80 max-w-2xl mx-auto">
            Watch a Capital Pro soft-wash transform grime-covered siding into a
            clean, restored exterior.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <Reveal variant="flap">
            <VideoTile
              src={beforeAsset.url}
              label="Before"
              accent="bg-[var(--brand-red)]"
            />
          </Reveal>
          <Reveal variant="flap" delayMs={120}>
            <VideoTile
              src={afterAsset.url}
              label="After"
              accent="bg-[var(--brand-deep-blue)]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function VideoTile({
  src,
  label,
  accent,
}: {
  src: string;
  label: string;
  accent: string;
}) {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-black/5 bg-black aspect-[9/16] max-h-[640px] mx-auto w-full">
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className={`absolute top-4 left-4 ${accent} text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-md shadow-md`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {label}
      </div>
    </div>
  );
}