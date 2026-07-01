import { Phone, Mail, MapPin, Clock, Globe, Facebook, Instagram } from "lucide-react";
import logo from "../assets/capital-pro-logo.png.asset.json";

// Wired to the SAME toggle concept as the hero. Flip to true once Jordan
// confirms licensing/insurance docs and a public license number.
const SHOW_LICENSED_INSURED = false;

// Flip to true once Jordan confirms the Google Business Profile URL.
const SHOW_GOOGLE_PROFILE = false;

// Flip to true once Jordan confirms public social handles.
const SHOW_SOCIAL = false;

const services = [
  { name: "House Washing", href: "/house-washing" },
  { name: "Roof Washing", href: "/roof-washing" },
  { name: "Paver Cleaning & Sealing", href: "/paver-cleaning-sealing" },
  { name: "Concrete Cleaning & Sealing", href: "/concrete-cleaning-sealing" },
  { name: "Deck & Patio Cleaning", href: "/deck-patio-cleaning" },
  { name: "Gutter Cleaning & Whitening", href: "/gutter-cleaning" },
  { name: "Gutter Guards", href: "/gutter-guards" },
  { name: "Window Cleaning", href: "/window-cleaning" },
  { name: "Fence Cleaning", href: "/fence-cleaning" },
  { name: "Holiday Lighting", href: "/holiday-lighting" },
  { name: "Permanent Outdoor Lighting", href: "/permanent-lighting" },
  { name: "Commercial Washing", href: "/commercial-pressure-washing" },
];

const areas = [
  { name: "Albany", href: "/pressure-washing-albany-ny" },
  { name: "Schenectady", href: "/pressure-washing-schenectady-ny" },
  { name: "Clifton Park", href: "/pressure-washing-clifton-park-ny" },
  { name: "Saratoga Springs", href: "/pressure-washing-saratoga-springs-ny" },
  { name: "Troy", href: "/pressure-washing-troy-ny" },
  { name: "Rensselaer", href: "/pressure-washing-rensselaer-ny" },
];

function FooterLogo() {
  return (
    <a href="/" className="inline-flex items-center gap-2" aria-label="Capital Pro Pressure Washing — Home">
      <img
        src={logo.url}
        alt="Capital Pro Pressure Washing"
        className="h-20 w-auto bg-white rounded-md p-2"
        width={800}
        height={800}
        decoding="async"
      />
    </a>
  );
}

const colHeading =
  "text-white text-base uppercase mb-4";
const colHeadingStyle = {
  fontFamily: "Oswald, sans-serif",
  fontWeight: 700,
  letterSpacing: "0.08em",
} as const;
const linkClass =
  "text-white/75 hover:text-white text-sm transition-colors";

export function SiteFooter() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: brand */}
          <div>
            <FooterLogo />
            <p className="text-white/75 text-sm leading-relaxed mt-4">
              Professional exterior cleaning across New York's Capital Region.
              10 years in business.
            </p>
            {SHOW_LICENSED_INSURED && (
              <p className="text-white/75 text-sm mt-4 font-semibold">
                Licensed &amp; Insured
              </p>
            )}
          </div>

          {/* Column 2: services */}
          <div>
            <h3 className={colHeading} style={colHeadingStyle}>Services</h3>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className={linkClass}>{s.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: service area */}
          <div>
            <h3 className={colHeading} style={colHeadingStyle}>Service Area</h3>
            <ul className="space-y-2">
              {areas.map((a) => (
                <li key={a.name} className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#C8102E] shrink-0 mt-1" strokeWidth={2} />
                  <a href={a.href} className={linkClass}>{a.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: contact */}
          <div>
            <h3 className={colHeading} style={colHeadingStyle}>Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+15189001913"
                  className="inline-flex items-center gap-2 text-white hover:text-[#C8102E] text-sm font-bold transition-colors"
                >
                  <Phone size={16} strokeWidth={2.5} />
                  (518) 900-1913
                </a>
              </li>
              <li>
                <a
                  href="mailto:luist@capitalpropw.com"
                  className="inline-flex items-center gap-2 text-white hover:text-[#C8102E] text-sm transition-colors"
                >
                  <Mail size={16} strokeWidth={2} />
                  luist@capitalpropw.com
                </a>
              </li>
              <li>
                <span className="inline-flex items-start gap-2 text-white/75 text-sm">
                  <Clock size={16} strokeWidth={2} />
                  Mon–Fri, 9am–5pm ET
                </span>
              </li>
              {SHOW_GOOGLE_PROFILE && (
                <li>
                  <a
                    href="#"
                    data-placeholder="CONFIRM_GOOGLE_BUSINESS_PROFILE_URL"
                    className="inline-flex items-center gap-2 text-white/75 hover:text-white text-sm transition-colors"
                  >
                    <Globe size={16} strokeWidth={2} />
                    Google Business Profile
                  </a>
                </li>
              )}
              {SHOW_SOCIAL && (
                <li className="flex items-center gap-3 pt-1">
                  <a
                    href="#"
                    data-placeholder="CONFIRM_FACEBOOK_URL"
                    aria-label="Facebook"
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    <Facebook size={20} strokeWidth={2} />
                  </a>
                  <a
                    href="#"
                    data-placeholder="CONFIRM_INSTAGRAM_URL"
                    aria-label="Instagram"
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    <Instagram size={20} strokeWidth={2} />
                  </a>
                </li>
              )}
              {SHOW_LICENSED_INSURED && (
                <li>
                  <span
                    data-placeholder="CONFIRM_LICENSE_NUMBER"
                    className="text-white/75 text-sm"
                  >
                    License #: [CONFIRM]
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© 2026 Capital Pro Pressure Washing. All rights reserved.</p>
          <p>
            Site by{" "}
            <a
              href="https://washerauthority.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white underline underline-offset-2 transition-colors"
            >
              Washer Authority
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}