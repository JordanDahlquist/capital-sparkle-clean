import { MapPin } from "lucide-react";
import { openQuoteModal } from "./quote-modal";
import { Reveal } from "./reveal";

const cities = [
  "Albany",
  "Schenectady",
  "Clifton Park",
  "Saratoga Springs",
  "Troy",
  "Rensselaer",
  "& all surrounding towns",
];

export function HomeServiceArea() {
  return (
    <section id="service-area" className="bg-white py-16 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Where We Work
          </p>
          <h2
            className="text-[#0B3D7A] text-3xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Serving The Entire Capital Region
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: copy + city list */}
          <Reveal>
            <p className="text-[#1A1A1A] text-base md:text-lg leading-relaxed mb-6">
              Capital Pro Pressure Washing serves homeowners across the Capital
              Region of New York. If you don't see your town listed, call us.
              If we clean in your area, we'll get you on the schedule.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {cities.map((city) => (
                <li key={city} className="flex items-start gap-2 text-[#1A1A1A]">
                  <MapPin
                    size={18}
                    className="text-[#C8102E] shrink-0 mt-1"
                    strokeWidth={2}
                  />
                  <span
                    className="text-base"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 500 }}
                  >
                    {city}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right: map embed (placeholder — swap with confirmed embed URL) */}
          <Reveal
            delayMs={120}
            data-placeholder="REPLACE_WITH_GOOGLE_MAP_EMBED"
            className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md border border-gray-200 bg-[#F4F6F8]"
          >
            <iframe
              title="Capital Region service area map"
              src="https://www.google.com/maps?q=Albany,NY&z=9&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </Reveal>
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="btn-pop btn-shimmer inline-block bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
