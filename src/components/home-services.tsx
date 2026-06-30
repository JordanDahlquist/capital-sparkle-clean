import {
  Home,
  CloudRain,
  Grid3x3,
  Layers,
  Rows3,
  Droplets,
  AppWindow,
  Fence,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "./reveal";
import { openQuoteModal } from "./quote-modal";

const services = [
  {
    icon: Home,
    name: "House Washing",
    desc: "Soft-wash siding, brick, and stucco. Lifts mold, mildew, and grime without damage.",
    href: "/house-washing",
  },
  {
    icon: CloudRain,
    name: "Roof Washing",
    desc: "Low-pressure soft wash that clears black streaks and moss. Safe for your shingles.",
    href: "/roof-washing",
  },
  {
    icon: Grid3x3,
    name: "Paver Cleaning & Sealing",
    desc: "Deep-clean pavers, re-sand the joints, and seal to lock out weeds and stains.",
    href: "/paver-cleaning-sealing",
  },
  {
    icon: Layers,
    name: "Concrete Cleaning & Sealing",
    desc: "Blast dirt and oil off driveways and walkways, then seal to protect the surface.",
    href: "/concrete-cleaning-sealing",
  },
  {
    icon: Rows3,
    name: "Deck & Patio Cleaning",
    desc: "Strip dirt and graying from wood and composite. Restore a clean, even finish.",
    href: "/deck-patio-cleaning",
  },
  {
    icon: Droplets,
    name: "Gutter Cleaning & Whitening",
    desc: "Clear clogged gutters and scrub off the black tiger stripes. Like-new exterior.",
    href: "/gutter-cleaning",
  },
  {
    icon: AppWindow,
    name: "Window Cleaning",
    desc: "Streak-free windows inside and out. Let the light back in.",
    href: "/window-cleaning",
  },
  {
    icon: Fence,
    name: "Fence Cleaning",
    desc: "Wash away dirt, algae, and stains from wood, vinyl, and chain-link.",
    href: "/fence-cleaning",
  },
];

export function HomeServices() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            What We Do
          </p>
          <h2
            className="text-[#0B3D7A] text-3xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Pressure Washing Services for the Capital Region
          </h2>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          style={{ perspective: "1000px" }}
        >
          {services.map(({ icon: Icon, name, desc, href }, i) => (
            <Reveal
              as="a"
              key={name}
              delayMs={i * 90}
              variant="flap"
              href={href}
              className="card-pop group flex h-full flex-col bg-white border border-gray-200 rounded-lg p-6 text-center sm:text-left shadow-sm"
            >
              <div className="flex justify-center sm:justify-start mb-4">
                <Icon className="icon-wiggle text-[#C8102E]" size={40} strokeWidth={1.75} />
              </div>
              <h3
                className="text-[#0B3D7A] text-lg mb-2 uppercase"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
              >
                {name}
              </h3>
              <p className="text-[#1A1A1A] text-sm leading-relaxed mb-4 flex-1">
                {desc}
              </p>
              <span className="inline-flex items-center gap-1 text-[#C8102E] font-bold text-sm uppercase tracking-wide group-hover:underline mt-auto">
                Learn More <ArrowRight size={14} />
              </span>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#1A1A1A] text-lg mb-5">
            Not sure what you need? We'll tell you straight, free.
          </p>
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="btn-pop btn-shimmer inline-block bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </section>
  );
}
