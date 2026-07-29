import { Reveal } from "./reveal";
import tan from "../assets/stamped/stamped-tan-flagstone.jpg.asset.json";
import gray from "../assets/stamped/stamped-gray-slate.jpg.asset.json";
import brown from "../assets/stamped/stamped-brown-patio.jpg.asset.json";
import antique from "../assets/stamped/stamped-antique-restore.jpg.asset.json";

const SHOTS = [
  { src: tan.url, alt: "Tan flagstone stamped concrete patio sealed with a wet-look sealer", caption: "Flagstone stamped patio — cleaned, antiqued & sealed" },
  { src: gray.url, alt: "Gray slate stamped concrete patio after cleaning and sealing", caption: "Gray slate stamp — color depth brought back with a fresh seal" },
  { src: brown.url, alt: "Brown stamped concrete patio and steps freshly sealed", caption: "Stamped patio & steps — full clean, antique and reseal" },
  { src: antique.url, alt: "Stamped concrete patio mid-project showing faded concrete next to restored antiqued color", caption: "Antiquing in progress — faded slab on one side, restored color on the other" },
];

/** Stamped concrete sealing & antiquing photo gallery. */
export function StampedGallerySection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10">
          <p
            className="text-[var(--brand-red)] font-semibold uppercase tracking-[0.2em] text-sm mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Stamped Concrete
          </p>
          <h2
            className="text-[var(--brand-deep-blue)] text-3xl md:text-4xl uppercase leading-tight"
            style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
          >
            Sealing & Antiquing That Brings The Color Back
          </h2>
          <p className="mt-4 mx-auto max-w-[680px] text-[var(--brand-charcoal)]/80 leading-relaxed">
            Faded, chalky stamped concrete doesn't need to be replaced. We clean it, re-apply
            antiquing color to restore the pattern contrast, then lock it in with a premium sealer.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {SHOTS.map((s) => (
            <Reveal key={s.src} className="overflow-hidden rounded-xl border border-gray-200 shadow-sm bg-white">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="h-64 sm:h-72 w-full object-cover"
              />
              <p className="px-4 py-3 text-sm text-[var(--brand-charcoal)]/80">{s.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
