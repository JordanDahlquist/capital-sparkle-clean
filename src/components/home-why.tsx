import { MapPin, ShieldCheck, Layers, Droplets, Shield } from "lucide-react";
import { Reveal } from "./reveal";

const items = [
  {
    icon: MapPin,
    title: "10 Years, All Local",
    body: "A decade cleaning homes right here in the Capital Region. We know these neighborhoods and we are not going anywhere.",
  },
  {
    icon: ShieldCheck,
    title: "Clean AND Sealed",
    body: "We don't just wash it. We seal and protect your pavers and concrete so the results last, not just look good for a week.",
  },
  {
    icon: Layers,
    title: "Every Surface, One Call",
    body: "House, roof, concrete, pavers, decks, gutters, windows, fences. Full-service exterior cleaning from one trusted crew.",
  },
  {
    icon: Droplets,
    title: "Soft-Wash Safe",
    body: "Low-pressure soft washing that kills mold and mildew at the root without damaging your siding, roof, or wood.",
  },
];

export function HomeWhy() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Why Capital Pro
          </p>
          <h2
            className="text-[#0B3D7A] text-3xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            10 Years Making Capital Region Homes Look New
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, body }, i) => (
            <Reveal
              key={title}
              delayMs={i * 80}
              className="flex h-full flex-col bg-white border border-gray-200 rounded-lg p-6 text-center sm:text-left shadow-sm"
            >
              <div className="flex justify-center sm:justify-start mb-4">
                <Icon className="text-[#C8102E]" size={40} strokeWidth={1.75} />
              </div>
              <h3
                className="text-[#0B3D7A] text-lg mb-2 uppercase"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
              >
                {title}
              </h3>
              <p className="text-[#1A1A1A] text-sm leading-relaxed">{body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 bg-[#0B3D7A] rounded-lg px-6 py-6 md:py-7 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <Shield className="text-[#C8102E] shrink-0" size={32} strokeWidth={2} fill="#C8102E" stroke="#ffffff" />
          <p className="text-white text-base md:text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="font-bold">Proud to offer Military &amp; First Responder discounts.</span>{" "}
            <span className="opacity-90">Thank you for your service.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}