import { Phone } from "lucide-react";
import { openQuoteModal } from "./quote-modal";
import { Reveal } from "./reveal";

export function HomeFinalCta() {
  return (
    <section className="bg-[#0B3D7A] py-16 md:py-20">
      <Reveal className="mx-auto max-w-[1200px] px-4 text-center">
        <h2
          className="text-white text-3xl md:text-5xl uppercase leading-tight mb-4"
          style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
        >
          Ready For A Cleaner Home?
        </h2>
        <p
          className="text-white/90 text-base md:text-lg max-w-2xl mx-auto mb-8"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Free quotes, fast scheduling, and a crew that's been doing this for 10 years.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
          <button
            type="button"
            onClick={() => openQuoteModal()}
            className="btn-pop btn-shimmer btn-jiggle inline-flex items-center justify-center bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            Get Free Quote
          </button>
          <a
            href="tel:+15189001913"
            className="btn-pop inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-[#0B3D7A] font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
          >
            <Phone size={20} strokeWidth={2.5} />
            Call (518) 900-1913
          </a>
        </div>
      </Reveal>
    </section>
  );
}
