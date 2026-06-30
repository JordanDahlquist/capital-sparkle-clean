import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { useQuoteModal } from "./quote-modal";

const PHONE_TEL = "tel:+15189001913";

/**
 * Sticky bottom conversion bar (mobile only).
 *
 * Appears after the user scrolls past the hero. Hidden at top of page and
 * while the quote modal is open. Respects iOS safe-area insets.
 */
export function StickyMobileBar() {
  const { isOpen, open } = useQuoteModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function compute() {
      // "Past the hero" — use 70% of viewport height as a stable proxy
      // that works whether or not the hero section is mounted.
      const threshold = Math.max(320, window.innerHeight * 0.7);
      setVisible(window.scrollY > threshold);
    }
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, []);

  const show = visible && !isOpen;

  return (
    <div
      className={`smb-root lg:hidden ${show ? "smb-visible" : "smb-hidden"}`}
      aria-hidden={!show}
    >
      <div className="smb-inner">
        <a
          href={PHONE_TEL}
          className="smb-btn smb-btn-call"
          aria-label="Call (518) 900-1913"
          tabIndex={show ? 0 : -1}
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call Now
        </a>
        <button
          type="button"
          onClick={() => open()}
          className="smb-btn smb-btn-quote"
          tabIndex={show ? 0 : -1}
        >
          Free Quote
        </button>
      </div>
    </div>
  );
}
