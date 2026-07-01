import { useId, useState } from "react";
import { Plus, Phone } from "lucide-react";
import { Reveal } from "./reveal";
import { openQuoteModal } from "./quote-modal";
import { faqItems } from "../data/faq";

export function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="bg-[#F4F6F8] py-16 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-[820px] px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            Common Questions
          </p>
          <h2
            className="text-[#0B3D7A] text-3xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Pressure Washing Questions, Answered
          </h2>
        </div>

        <ul className="space-y-3">
          {faqItems.map((item, i) => {
            const isOpen = open === i;
            const btnId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;
            return (
              <Reveal
                as="li"
                delayMs={i * 40}
                key={item.q}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <h3 className="m-0">
                  <button
                    type="button"
                    id={btnId}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-4 text-left px-5 md:px-6 py-4 md:py-5 min-h-[56px] cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span
                      className="text-[#0B3D7A] text-base md:text-lg font-bold pr-2"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.q}
                    </span>
                    <Plus
                      size={22}
                      strokeWidth={2.5}
                      className={`shrink-0 text-[#C8102E] mt-0.5 transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`faq-panel ${isOpen ? "faq-panel--open" : ""}`}
                >
                  <div className="px-5 md:px-6 pb-5 pt-0">
                    <p
                      className="text-[#1A1A1A]/85 text-base leading-relaxed m-0"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <p
            className="text-[#0B3D7A] text-lg md:text-xl font-semibold mb-5"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Still have a question?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <button
              type="button"
              onClick={() => openQuoteModal()}
              className="btn-pop btn-shimmer btn-jiggle inline-flex items-center justify-center bg-[#C8102E] hover:bg-[#a50d25] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
            >
              Get A Free Quote
            </button>
            <a
              href="tel:+15189001913"
              className="btn-pop inline-flex items-center justify-center gap-2 bg-[#0B3D7A] hover:bg-[#092f5e] text-white font-bold uppercase tracking-wide px-8 py-4 rounded-md transition-colors min-h-[44px]"
            >
              <Phone size={20} strokeWidth={2.5} />
              Call (518) 900-1913
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}