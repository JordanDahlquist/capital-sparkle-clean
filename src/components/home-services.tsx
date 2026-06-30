import { Home, Cloud, Layers, Trees, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Home,
    name: "House Washing",
    desc: "Soft-wash siding, brick, and stucco. Lifts mold, mildew, and grime without damage.",
  },
  {
    icon: Cloud,
    name: "Roof Cleaning",
    desc: "Low-pressure soft wash that clears black streaks and moss. Safe for shingles.",
  },
  {
    icon: Layers,
    name: "Concrete & Driveway",
    desc: "Clean and seal driveways, walkways, and patios. Brings back the original surface.",
  },
  {
    icon: Trees,
    name: "Decks & Fences",
    desc: "Strip dirt and graying, restore wood and composite to a clean finish.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, name, desc }) => (
            <div
              key={name}
              className="group bg-white border border-gray-200 rounded-lg p-6 text-center md:text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex justify-center md:justify-start mb-4">
                <Icon className="text-[#C8102E]" size={40} strokeWidth={1.75} />
              </div>
              <h3
                className="text-[#0B3D7A] text-xl mb-2 uppercase"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
              >
                {name}
              </h3>
              <p className="text-[#1A1A1A] text-base leading-relaxed mb-4">
                {desc}
              </p>
              <a
                href="#quote"
                className="inline-flex items-center gap-1 text-[#C8102E] font-bold text-sm uppercase tracking-wide hover:underline"
              >
                Free Quote <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#1A1A1A] text-lg mb-5">
            Not sure what you need? We'll tell you straight, free.
          </p>
          <a
            href="#quote"
            className="inline-block bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}