import { Phone } from "lucide-react";
import { openQuoteModal } from "./quote-modal";
import offerVideo from "../assets/video/house-wash-100-off.mp4.asset.json";
import offerVideoPoster from "../assets/video/house-wash-100-off-poster.jpg.asset.json";

export function HouseWashVideoSection() {
  return (
    <section className="bg-[var(--brand-light-gray)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <div className="grid items-center gap-8 md:grid-cols-[minmax(0,320px)_1fr]">
          <div className="mx-auto w-full max-w-[320px]">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-black shadow-xl">
              <video
                src={offerVideo.url}
                poster={offerVideoPoster.url}
                className="aspect-[9/16] h-full w-full object-cover"
                controls
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                aria-label="Capital Pro house washing in action on a Capital Region home"
              />
            </div>
          </div>
          <div>
            <p
              className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-red)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See It In Action
            </p>
            <h2
              className="mt-3 text-3xl font-bold uppercase leading-tight tracking-tight text-[var(--brand-deep-blue)] sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Watch A Real House Wash
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--brand-charcoal)]/85">
              Real footage from a Capital Region job — commercial soft-wash equipment,
              low pressure on the siding, and landscaping soaked before, during and
              after. Most homes are done in 1–2 hours.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => openQuoteModal()}
                className="btn-pop btn-shimmer inline-flex min-h-[52px] items-center justify-center rounded-md bg-[var(--brand-red)] px-6 font-bold uppercase tracking-wide text-white transition-colors hover:bg-[var(--brand-red-hover)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get My Free Quote
              </button>
              <a
                href="tel:+15189001913"
                data-analytics="call_click"
                data-source="house-washing-video"
                className="btn-pop inline-flex min-h-[52px] items-center justify-center gap-2 rounded-md border border-[var(--brand-deep-blue)]/20 bg-white px-6 font-bold uppercase tracking-wide text-[var(--brand-deep-blue)] transition-colors hover:bg-[var(--brand-light-gray)]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                (518) 900-1913
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}