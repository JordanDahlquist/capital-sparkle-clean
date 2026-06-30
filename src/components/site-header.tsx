import { useEffect, useState } from "react";
import { Menu, Phone, X, Droplet } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Service Area", href: "#service-area" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const PHONE_DISPLAY = "(518) 900-1913";
const PHONE_TEL = "tel:+15189001913";

function Wordmark() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 min-h-[44px]"
      aria-label="Capital Pro Pressure Washing — Home"
    >
      <Droplet
        className="h-7 w-7 shrink-0 fill-[var(--brand-red)] text-[var(--brand-red)]"
        aria-hidden="true"
      />
      <span className="flex flex-col leading-none">
        <span
          className="font-display font-bold tracking-tight text-[var(--brand-deep-blue)] text-xl sm:text-2xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          CAPITAL PRO
        </span>
        <span
          className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-red)] mt-0.5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Pressure Washing
        </span>
      </span>
    </a>
  );
}

function CallBlock({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <a
        href={PHONE_TEL}
        aria-label={`Call ${PHONE_DISPLAY}`}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--brand-deep-blue)] hover:bg-[var(--brand-light-gray)] transition-colors"
      >
        <Phone className="h-5 w-5" />
      </a>
    );
  }
  return (
    <div className="flex flex-col items-end leading-tight">
      <span className="text-[11px] font-medium uppercase tracking-wide text-[var(--brand-charcoal)]/70">
        Free Quotes — Call Today
      </span>
      <a
        href={PHONE_TEL}
        className="inline-flex items-center gap-1.5 text-[var(--brand-deep-blue)] font-bold text-lg hover:text-[var(--brand-bright-blue)] transition-colors min-h-[24px]"
      >
        <Phone className="h-4 w-4" />
        {PHONE_DISPLAY}
      </a>
    </div>
  );
}

function QuoteButton({ className = "", onClick, children = "Get Free Quote" }: { className?: string; onClick?: () => void; children?: React.ReactNode }) {
  return (
    <a
      href="#quote"
      onClick={onClick}
      className={
        "btn-pop btn-shimmer inline-flex items-center justify-center min-h-[44px] px-4 sm:px-5 rounded-md bg-[var(--brand-red)] text-white font-bold uppercase tracking-wide text-sm hover:bg-[var(--brand-red-hover)] transition-colors " +
        className
      }
    >
      {children}
    </a>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={
        "sticky top-0 z-50 w-full bg-white transition-shadow " +
        (scrolled ? "shadow-md" : "shadow-none border-b border-[var(--brand-light-gray)]")
      }
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Left: logo */}
        <Wordmark />

        {/* Center: nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[var(--brand-charcoal)] font-medium text-sm hover:text-[var(--brand-bright-blue)] transition-colors min-h-[44px] flex items-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: call + CTA (desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <CallBlock />
          <QuoteButton />
        </div>

        {/* Right: mobile cluster */}
        <div className="flex lg:hidden items-center gap-1">
          <CallBlock compact />
          <QuoteButton className="text-xs px-3">Get Quote</QuoteButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-[var(--brand-deep-blue)] hover:bg-[var(--brand-light-gray)] transition-colors"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="lg:hidden border-t border-[var(--brand-light-gray)] bg-white">
          <nav className="mx-auto max-w-[1200px] px-4 py-3 flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[var(--brand-charcoal)] font-medium text-base border-b border-[var(--brand-light-gray)] last:border-b-0 hover:text-[var(--brand-bright-blue)] transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_TEL}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 min-h-[44px] rounded-md bg-[var(--brand-deep-blue)] text-white font-bold text-base"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}