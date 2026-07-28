import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X, Facebook, Instagram, ChevronDown } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { openQuoteModal } from "./quote-modal";
import logo from "../assets/capital-pro-logo.png.asset.json";
import { SERVICES } from "../data/services";
import { CITIES } from "../data/cities";

type NavLink = { label: string; href?: string; action?: "quote"; dropdown?: "services" | "areas" };
const NAV_LINKS: NavLink[] = [
  { label: "Services", dropdown: "services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Service Area", dropdown: "areas" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", action: "quote" },
];

const PHONE_DISPLAY = "(518) 900-1913";
const PHONE_TEL = "tel:+15189001913";
const FACEBOOK_URL = "https://www.facebook.com/CapitalProPressureWashing";
const INSTAGRAM_URL = "https://www.instagram.com/capitalpropressurewashing/";

function Wordmark() {
  return (
    <a
      href="/"
      className="flex items-center gap-2 min-h-[44px]"
      aria-label="Capital Pro Pressure Washing — Home"
    >
      <img
        src={logo.url}
        alt="Capital Pro Pressure Washing"
        className="h-12 sm:h-14 lg:h-16 w-auto"
        width={800}
        height={800}
        decoding="async"
      />
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
    <button
      type="button"
      onClick={(e) => {
        onClick?.();
        openQuoteModal();
        e.currentTarget.blur();
      }}
      className={
        "btn-pop btn-shimmer inline-flex items-center justify-center min-h-[44px] px-4 sm:px-5 rounded-md bg-[var(--brand-red)] text-white font-bold uppercase tracking-wide text-sm hover:bg-[var(--brand-red-hover)] transition-colors " +
        className
      }
    >
      {children}
    </button>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const areasRef = useRef<HTMLDivElement | null>(null);
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const areasTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current);
    setServicesOpen(true);
  };
  const scheduleCloseServices = () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current);
    servicesTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };
  const openAreas = () => {
    if (areasTimer.current) clearTimeout(areasTimer.current);
    setAreasOpen(true);
  };
  const scheduleCloseAreas = () => {
    if (areasTimer.current) clearTimeout(areasTimer.current);
    areasTimer.current = setTimeout(() => setAreasOpen(false), 120);
  };

  useEffect(() => {
    if (!servicesOpen && !areasOpen) return;
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (!servicesRef.current?.contains(target)) setServicesOpen(false);
      if (!areasRef.current?.contains(target)) setAreasOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen, areasOpen]);

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
        "sticky top-0 z-50 w-full bg-white border-b transition-shadow " +
        (scrolled
          ? "shadow-md border-transparent"
          : "shadow-none border-[var(--brand-light-gray)]")
      }
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Left: logo */}
        <Wordmark />

        {/* Center: nav (desktop) */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
          {NAV_LINKS.map((link) =>
            link.dropdown === "services" ? (
              <div
                key={link.label}
                ref={servicesRef}
                className="relative"
                onMouseEnter={openServices}
                onMouseLeave={scheduleCloseServices}
              >
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={servicesOpen}
                  className="text-[var(--brand-charcoal)] font-medium text-sm hover:text-[var(--brand-bright-blue)] transition-colors min-h-[44px] flex items-center gap-1 bg-transparent"
                >
                  {link.label}
                  <ChevronDown className={"h-4 w-4 transition-transform " + (servicesOpen ? "rotate-180" : "")} />
                </button>
                {servicesOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                    onMouseEnter={openServices}
                    onMouseLeave={scheduleCloseServices}
                  >
                    <div className="w-[520px] rounded-md border border-[var(--brand-light-gray)] bg-white shadow-lg p-2 grid grid-cols-2 gap-1">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to="/$service"
                          params={{ service: s.slug }}
                          onClick={() => setServicesOpen(false)}
                          className="px-3 py-2 rounded text-sm text-[var(--brand-charcoal)] hover:bg-[var(--brand-light-gray)] hover:text-[var(--brand-bright-blue)] transition-colors"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : link.dropdown === "areas" ? (
              <div
                key={link.label}
                ref={areasRef}
                className="relative"
                onMouseEnter={openAreas}
                onMouseLeave={scheduleCloseAreas}
              >
                <button
                  type="button"
                  onClick={() => setAreasOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={areasOpen}
                  className="text-[var(--brand-charcoal)] font-medium text-sm hover:text-[var(--brand-bright-blue)] transition-colors min-h-[44px] flex items-center gap-1 bg-transparent"
                >
                  {link.label}
                  <ChevronDown className={"h-4 w-4 transition-transform " + (areasOpen ? "rotate-180" : "")} />
                </button>
                {areasOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                    onMouseEnter={openAreas}
                    onMouseLeave={scheduleCloseAreas}
                  >
                    <div className="w-[260px] rounded-md border border-[var(--brand-light-gray)] bg-white shadow-lg p-2 flex flex-col">
                      {CITIES.map((c) => (
                        <a
                          key={c.slug}
                          href={`/${c.slug}`}
                          onClick={() => setAreasOpen(false)}
                          className="px-3 py-2 rounded text-sm font-semibold text-[var(--brand-charcoal)] hover:bg-[var(--brand-light-gray)] hover:text-[var(--brand-bright-blue)] transition-colors"
                        >
                          {c.city}, NY
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : link.action === "quote" ? (
              <button
                key={link.label}
                type="button"
                onClick={() => openQuoteModal()}
                className="text-[var(--brand-charcoal)] font-medium text-sm hover:text-[var(--brand-bright-blue)] transition-colors min-h-[44px] flex items-center bg-transparent"
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-[var(--brand-charcoal)] font-medium text-sm hover:text-[var(--brand-bright-blue)] transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </a>
            )
          )}
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
            {NAV_LINKS.map((link) =>
              link.dropdown === "services" ? (
                <div key={link.label} className="border-b border-[var(--brand-light-gray)]">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                    className="w-full py-3 text-left text-[var(--brand-charcoal)] font-medium text-base flex items-center justify-between min-h-[44px] bg-transparent"
                  >
                    {link.label}
                    <ChevronDown className={"h-4 w-4 transition-transform " + (mobileServicesOpen ? "rotate-180" : "")} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pb-2 flex flex-col">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to="/$service"
                          params={{ service: s.slug }}
                          onClick={() => {
                            setOpen(false);
                            setMobileServicesOpen(false);
                          }}
                          className="pl-4 py-2 text-sm text-[var(--brand-charcoal)] hover:text-[var(--brand-bright-blue)] transition-colors min-h-[40px] flex items-center"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.dropdown === "areas" ? (
                <div key={link.label} className="border-b border-[var(--brand-light-gray)]">
                  <button
                    type="button"
                    onClick={() => setMobileAreasOpen((v) => !v)}
                    aria-expanded={mobileAreasOpen}
                    className="w-full py-3 text-left text-[var(--brand-charcoal)] font-medium text-base flex items-center justify-between min-h-[44px] bg-transparent"
                  >
                    {link.label}
                    <ChevronDown className={"h-4 w-4 transition-transform " + (mobileAreasOpen ? "rotate-180" : "")} />
                  </button>
                  {mobileAreasOpen && (
                    <div className="pb-2 flex flex-col">
                      {CITIES.map((c) => (
                        <a
                          key={c.slug}
                          href={`/${c.slug}`}
                          onClick={() => {
                            setOpen(false);
                            setMobileAreasOpen(false);
                          }}
                          className="pl-4 py-2 text-sm font-semibold text-[var(--brand-charcoal)] hover:text-[var(--brand-bright-blue)] transition-colors min-h-[40px] flex items-center"
                        >
                          {c.city}, NY
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : link.action === "quote" ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openQuoteModal();
                  }}
                  className="py-3 text-left text-[var(--brand-charcoal)] font-medium text-base border-b border-[var(--brand-light-gray)] last:border-b-0 hover:text-[var(--brand-bright-blue)] transition-colors min-h-[44px] flex items-center bg-transparent"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[var(--brand-charcoal)] font-medium text-base border-b border-[var(--brand-light-gray)] last:border-b-0 hover:text-[var(--brand-bright-blue)] transition-colors min-h-[44px] flex items-center"
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href={PHONE_TEL}
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 min-h-[44px] rounded-md bg-[var(--brand-deep-blue)] text-white font-bold text-base"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
            <div className="mt-4 flex items-center justify-center gap-5 pt-3 border-t border-[var(--brand-light-gray)]">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Capital Pro on Facebook"
                className="text-[var(--brand-deep-blue)] hover:text-[var(--brand-bright-blue)] transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Capital Pro on Instagram"
                className="text-[var(--brand-deep-blue)] hover:text-[var(--brand-bright-blue)] transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}