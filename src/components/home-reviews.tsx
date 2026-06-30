import { Star } from "lucide-react";
import { Reveal } from "./reveal";

// Toggle ON only after the Google Business Profile link is confirmed.
const SHOW_VERIFIED_LINE = false;

const cards = [
  "REPLACE_WITH_REAL_REVIEW_1",
  "REPLACE_WITH_REAL_REVIEW_2",
  "REPLACE_WITH_REAL_REVIEW_3",
];

export function HomeReviews() {
  return (
    <section className="bg-[#F4F6F8] py-16 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="text-[#C8102E] font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            What Customers Say
          </p>
          <h2
            className="text-[#0B3D7A] text-3xl md:text-5xl uppercase leading-tight"
            style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
          >
            Reviews From Capital Region Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((marker, i) => (
            <Reveal
              as="article"
              key={marker}
              delayMs={i * 80}
              data-placeholder={marker}
              className="flex h-full flex-col bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <div className="flex gap-1 mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-[#C8102E]"
                    fill="#C8102E"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p className="text-[#1A1A1A] text-base leading-relaxed flex-1 mb-5">
                [REPLACE WITH REAL CUSTOMER REVIEW]
              </p>
              <p
                className="text-[#0B3D7A] uppercase text-sm tracking-wide"
                style={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}
              >
                [Name], [Town]
              </p>
            </Reveal>
          ))}
        </div>

        {SHOW_VERIFIED_LINE && (
          <p className="text-center text-sm text-[#1A1A1A]/70 mt-8">
            Verified reviews from our Google Business Profile
          </p>
        )}
      </div>
    </section>
  );
}