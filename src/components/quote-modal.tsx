import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { submitLead } from "@/lib/submit-lead.functions";
import {
  X,
  Check,
  Phone,
  Home as HomeIcon,
  Building2,
  Droplets,
  Sparkles,
  Square,
  Grid3x3,
  Trees,
  CloudRain,
  AppWindow,
  Fence,
  HelpCircle,
  Shield,
  Snowflake,
  Lightbulb,
} from "lucide-react";

/* Context — any button on the site can call useQuoteModal().open() */

type QuoteModalCtx = { open: () => void; close: () => void; isOpen: boolean };
const Ctx = createContext<QuoteModalCtx | null>(null);

export function useQuoteModal() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useQuoteModal must be used inside <QuoteModalProvider>");
  return c;
}

// Imperative escape hatch so non-React code (or buttons rendered outside the
// provider tree) can open the modal. Set by the provider on mount.
let _openQuoteModal: (() => void) | null = null;
export function openQuoteModal() {
  _openQuoteModal?.();
}

type Payload = {
  services: string[];
  address: string;
  city: string;
  state: string;
  zip: string;
  propertyType: "Home" | "Business";
  timeline: string;
  message: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
};

const EMPTY: Payload = {
  services: [],
  address: "",
  city: "",
  state: "NY",
  zip: "",
  propertyType: "Home",
  timeline: "",
  message: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

const SERVICES = [
  { id: "rejuvenation", label: "Roof Rejuvenation", Icon: Sparkles },
  { id: "house", label: "House Washing", Icon: Droplets },
  { id: "roof", label: "Roof Washing", Icon: CloudRain },
  { id: "concrete", label: "Concrete & Driveway", Icon: Square },
  { id: "pavers", label: "Paver Cleaning", Icon: Grid3x3 },
  { id: "deck", label: "Deck & Patio", Icon: Trees },
  { id: "gutter", label: "Gutter Cleaning", Icon: Sparkles },
  { id: "guards", label: "Gutter Guards", Icon: Shield },
  { id: "window", label: "Window Cleaning", Icon: AppWindow },
  { id: "fence", label: "Fence Cleaning", Icon: Fence },
  { id: "holiday", label: "Holiday Lighting", Icon: Snowflake },
  { id: "permanent", label: "Permanent Lighting", Icon: Lightbulb },
  { id: "commercial", label: "Commercial Washing", Icon: Building2 },
  { id: "unsure", label: "Not sure / Multiple", Icon: HelpCircle },
];

const TIMELINES = ["As soon as possible", "Next few weeks", "Just getting quotes"];

const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const zipRx = /^\d{5}$/;
function normalizePhone(v: string) {
  return v.replace(/\D/g, "");
}
function formatPhone(v: string) {
  const d = normalizePhone(v).slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
}
function isValidUsPhone(v: string) {
  const d = normalizePhone(v);
  return d.length === 10 && !/^[01]/.test(d);
}

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    _openQuoteModal = open;
    return () => {
      if (_openQuoteModal === open) _openQuoteModal = null;
    };
  }, [open]);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <Ctx.Provider value={value}>
      {children}
      {isOpen && <QuoteModal onClose={close} />}
    </Ctx.Provider>
  );
}

function QuoteModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = "quote-modal-title";

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),input:not([disabled]),textarea:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  function onBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  return (
    <div className="qm-backdrop" onMouseDown={onBackdrop}>
      <div
        ref={dialogRef}
        className="qm-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <QuoteWizard titleId={titleId} onClose={onClose} containerRef={dialogRef} />
      </div>
    </div>
  );
}

/**
 * QuoteWizard — the step machine + form UI. Used inside the modal AND
 * rendered inline above the footer for users who scroll past CTAs.
 */
export function QuoteWizard({
  titleId = "quote-inline-title",
  onClose,
  containerRef,
}: {
  titleId?: string;
  onClose?: () => void;
  containerRef?: React.RefObject<HTMLElement | HTMLDivElement | null>;
}) {
  const [step, setStep] = useState(1);
  const [stepDir, setStepDir] = useState<1 | -1>(1);
  const [data, setData] = useState<Payload>(() => {
    if (typeof window !== "undefined" && window.location.pathname === "/roof-rejuvenation") {
      return { ...EMPTY, services: ["rejuvenation"] };
    }
    return EMPTY;
  });
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const submittingRef = useRef(false);

  // Autofocus the first focusable in the active step — but only when this
  // wizard is inside a modal (containerRef provided). Inline usage avoids
  // scroll-jacking the user.
  useEffect(() => {
    if (!containerRef?.current) return;
    const t = window.setTimeout(() => {
      const el = containerRef.current?.querySelector<HTMLElement>("[data-autofocus]");
      el?.focus();
    }, 60);
    return () => window.clearTimeout(t);
  }, [step, submitted, containerRef]);

  const update = <K extends keyof Payload>(k: K, v: Payload[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  function stepValid(s: number): boolean {
    if (s === 1) return data.services.length > 0;
    if (s === 2)
      return (
        data.city.trim().length > 0 &&
        data.state.trim().length > 0 &&
        zipRx.test(data.zip.trim())
      );
    if (s === 3) return data.timeline.length > 0;
    if (s === 4)
      return (
        data.firstName.trim().length > 0 &&
        data.lastName.trim().length > 0 &&
        isValidUsPhone(data.phone) &&
        emailRx.test(data.email.trim())
      );
    return true;
  }

  function go(next: number) {
    setStepDir(next > step ? 1 : -1);
    setStep(next);
  }

  function handleContinue() {
    if (!stepValid(step)) {
      if (step === 2) setTouched((t) => ({ ...t, city: true, state: true, zip: true }));
      if (step === 4) setTouched((t) => ({ ...t, firstName: true, lastName: true, phone: true, email: true }));
      return;
    }
    if (step < 4) go(step + 1);
    else handleSubmit();
  }

  function handleSubmit() {
    // Guard: prevent double-submits (rapid double-click, re-render, etc.)
    // from firing the Lead pixel/analytics event more than once.
    if (submittingRef.current) return;
    submittingRef.current = true;
    const payload: Payload = {
      ...data,
      phone: normalizePhone(data.phone),
      email: data.email.trim(),
      firstName: data.firstName.trim(),
      lastName: data.lastName.trim(),
      address: data.address.trim(),
      city: data.city.trim(),
      state: data.state.trim(),
      zip: data.zip.trim(),
      message: data.message.trim(),
    };
    // Single event_id for this submission. Shared between client Pixel (eventID)
    // and any future server-side Conversions API call so Meta can dedupe.
    const eventId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `lead_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    void (async () => {
      try {
        await submitLead({ data: payload });
      } catch (err) {
        // Server always returns ok; surface only unexpected transport errors in logs.
        console.error("[quote-form] submit error", err);
      }
      // Fire analytics if present (GA4 + Meta Pixel). Defensive — no-op if not loaded.
      try {
        const w = window as unknown as {
          gtag?: (...args: unknown[]) => void;
          fbq?: (...args: unknown[]) => void;
          dataLayer?: unknown[];
        };
        w.gtag?.("event", "generate_lead", {
          form: "quote",
          services: payload.services.join(","),
          property_type: payload.propertyType,
          timeline: payload.timeline,
        });
        w.fbq?.(
          "track",
          "Lead",
          {
            content_category: payload.services.join(","),
            content_name: "Quote Form",
          },
          { eventID: eventId },
        );
        w.dataLayer = w.dataLayer || [];
        (w.dataLayer as unknown[]).push({
          event: "lead_submitted",
          event_id: eventId,
          form: "quote",
          services: payload.services,
          property_type: payload.propertyType,
          timeline: payload.timeline,
          location: payload.location,
          page_path: window.location.pathname,
        });
      } catch {
        /* ignore analytics failures */
      }
      setSubmitted(true);
      // Give the success state a beat to render for users who watch for it,
      // then redirect to /thank-you (canonical conversion page).
      if (typeof window !== "undefined") {
        window.setTimeout(() => {
          window.location.assign("/thank-you");
        }, 250);
      }
    })();
  }

  const progressPct = submitted ? 100 : (step / 4) * 100;

  return (
    <>
      <div className="qm-header">
          {!submitted && (
            <div className="qm-progress-wrap" aria-hidden="true">
              <div className="qm-progress-meta">
                <span>Step {step} of 4</span>
              </div>
              <div className="qm-progress-track">
                <div className="qm-progress-fill" style={{ width: `${progressPct}%` }} />
              </div>
            </div>
          )}
          {onClose && (
            <button type="button" onClick={onClose} aria-label="Close quote form" className="qm-close">
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        <div className="qm-body">
          {submitted ? (
            <SuccessView onClose={onClose} titleId={titleId} />
          ) : (
            <div
              key={step}
              className={`qm-step qm-step-${stepDir > 0 ? "in-right" : "in-left"}`}
            >
              {step === 1 && (
                <Step1
                  titleId={titleId}
                  selected={data.services}
                  onToggle={(id) =>
                    update(
                      "services",
                      data.services.includes(id)
                        ? data.services.filter((s) => s !== id)
                        : [...data.services, id],
                    )
                  }
                />
              )}
              {step === 2 && (
                <Step2
                  titleId={titleId}
                  data={data}
                  touched={touched}
                  onChange={update}
                  onBlur={(k) => setTouched((t) => ({ ...t, [k]: true }))}
                />
              )}
              {step === 3 && (
                <Step3
                  titleId={titleId}
                  timeline={data.timeline}
                  message={data.message}
                  onTimeline={(v) => update("timeline", v)}
                  onMessage={(v) => update("message", v)}
                />
              )}
              {step === 4 && (
                <Step4
                  titleId={titleId}
                  data={data}
                  touched={touched}
                  onChange={update}
                  onBlur={(k) => setTouched((t) => ({ ...t, [k]: true }))}
                />
              )}
            </div>
          )}
        </div>

        {!submitted && (
          <div className="qm-footer">
            <div className="qm-nav">
              {step > 1 ? (
                <button type="button" className="qm-btn-secondary" onClick={() => go(step - 1)}>
                  Back
                </button>
              ) : (
                <span />
              )}
              <button
                type="button"
                className="qm-btn-primary"
                onClick={handleContinue}
                disabled={!stepValid(step)}
              >
                {step === 4 ? "Get My Free Quote" : "Continue"}
              </button>
            </div>
            {step === 4 && (
              <p className="qm-consent">
                By submitting, you agree to be contacted by phone or text about your quote. Msg/data rates may apply.
              </p>
            )}
            <p className="qm-trust">No obligation. Free quote. Local crew, 10+ years.</p>
          </div>
        )}
    </>
  );
}

function StepTitle({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="qm-title">
      {children}
    </h2>
  );
}

function Step1({
  titleId,
  selected,
  onToggle,
}: {
  titleId: string;
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div>
      <StepTitle id={titleId}>What do you need cleaned?</StepTitle>
      <p className="qm-sub">Pick all that apply.</p>
      <div className="qm-grid" role="group" aria-label="Services">
        {SERVICES.map((s, i) => {
          const active = selected.includes(s.id);
          return (
            <button
              key={s.id}
              type="button"
              data-autofocus={i === 0 ? "" : undefined}
              aria-pressed={active}
              onClick={() => onToggle(s.id)}
              className={`qm-card ${active ? "qm-card-active" : ""}`}
            >
              <s.Icon className="h-6 w-6" aria-hidden="true" />
              <span>{s.label}</span>
              {active && (
                <span className="qm-card-check" aria-hidden="true">
                  <Check className="h-3.5 w-3.5" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Step2({
  titleId,
  location,
  propertyType,
  onLocation,
  onPropertyType,
}: {
  titleId: string;
  location: string;
  propertyType: "Home" | "Business";
  onLocation: (v: string) => void;
  onPropertyType: (v: "Home" | "Business") => void;
}) {
  return (
    <div>
      <StepTitle id={titleId}>Where's the property?</StepTitle>
      <div className="qm-field">
        <label htmlFor="qm-location" className="qm-label">Full address (optional)</label>
        <input
          id="qm-location"
          type="text"
          autoComplete="street-address"
          data-autofocus=""
          className="qm-input"
          placeholder="e.g. 123 Main St, Clifton Park, NY 12065"
          value={location}
          onChange={(e) => onLocation(e.target.value)}
        />
      </div>
      <div className="qm-field">
        <span className="qm-label">Property type</span>
        <div className="qm-toggle" role="radiogroup" aria-label="Property type">
          {(["Home", "Business"] as const).map((t) => {
            const active = propertyType === t;
            const Icon = t === "Home" ? HomeIcon : Building2;
            return (
              <button
                key={t}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => onPropertyType(t)}
                className={`qm-toggle-btn ${active ? "qm-toggle-active" : ""}`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {t}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Step3({
  titleId,
  timeline,
  message,
  onTimeline,
  onMessage,
}: {
  titleId: string;
  timeline: string;
  message: string;
  onTimeline: (v: string) => void;
  onMessage: (v: string) => void;
}) {
  return (
    <div>
      <StepTitle id={titleId}>How soon, and anything we should know?</StepTitle>
      <div className="qm-field">
        <span className="qm-label">Timeline</span>
        <div className="qm-chips" role="radiogroup" aria-label="Timeline">
          {TIMELINES.map((t, i) => {
            const active = timeline === t;
            return (
              <button
                key={t}
                type="button"
                role="radio"
                aria-checked={active}
                data-autofocus={i === 0 ? "" : undefined}
                onClick={() => onTimeline(t)}
                className={`qm-chip ${active ? "qm-chip-active" : ""}`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>
      <div className="qm-field">
        <label htmlFor="qm-message" className="qm-label">
          Anything specific? <span className="qm-optional">(optional)</span>
        </label>
        <textarea
          id="qm-message"
          rows={4}
          className="qm-input qm-textarea"
          placeholder="Stains, access, square footage, anything helpful…"
          value={message}
          onChange={(e) => onMessage(e.target.value)}
        />
      </div>
    </div>
  );
}

function Step4({
  titleId,
  data,
  touched,
  onChange,
  onBlur,
}: {
  titleId: string;
  data: Payload;
  touched: Record<string, boolean>;
  onChange: <K extends keyof Payload>(k: K, v: Payload[K]) => void;
  onBlur: (k: string) => void;
}) {
  const nameErr =
    touched.firstName && data.firstName.trim().length === 0
      ? "Please enter your first name."
      : "";
  const lastNameErr =
    touched.lastName && data.lastName.trim().length === 0
      ? "Please enter your last name."
      : "";
  const phoneErr =
    touched.phone && !isValidUsPhone(data.phone)
      ? "Enter a valid 10-digit US phone number."
      : "";
  const emailErr =
    touched.email && !emailRx.test(data.email.trim())
      ? "Enter a valid email address."
      : "";

  return (
    <div>
      <StepTitle id={titleId}>Where do we send your quote?</StepTitle>
      <div className="qm-field">
        <label htmlFor="qm-name" className="qm-label">First name</label>
        <input
          id="qm-name"
          type="text"
          autoComplete="given-name"
          data-autofocus=""
          className={`qm-input ${nameErr ? "qm-input-err" : ""}`}
          value={data.firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
          onBlur={() => onBlur("firstName")}
          aria-invalid={!!nameErr}
          aria-describedby={nameErr ? "qm-name-err" : undefined}
          required
        />
        {nameErr && <p id="qm-name-err" className="qm-err">{nameErr}</p>}
      </div>
      <div className="qm-field">
        <label htmlFor="qm-lastname" className="qm-label">Last name</label>
        <input
          id="qm-lastname"
          type="text"
          autoComplete="family-name"
          className={`qm-input ${lastNameErr ? "qm-input-err" : ""}`}
          value={data.lastName}
          onChange={(e) => onChange("lastName", e.target.value)}
          onBlur={() => onBlur("lastName")}
          aria-invalid={!!lastNameErr}
          aria-describedby={lastNameErr ? "qm-lastname-err" : undefined}
          required
        />
        {lastNameErr && <p id="qm-lastname-err" className="qm-err">{lastNameErr}</p>}
      </div>
      <div className="qm-field">
        <label htmlFor="qm-phone" className="qm-label">Phone</label>
        <input
          id="qm-phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          className={`qm-input ${phoneErr ? "qm-input-err" : ""}`}
          value={data.phone}
          onChange={(e) => onChange("phone", formatPhone(e.target.value))}
          onBlur={() => onBlur("phone")}
          aria-invalid={!!phoneErr}
          aria-describedby={phoneErr ? "qm-phone-err" : undefined}
          placeholder="(518) 555-0123"
          required
        />
        {phoneErr && <p id="qm-phone-err" className="qm-err">{phoneErr}</p>}
      </div>
      <div className="qm-field">
        <label htmlFor="qm-email" className="qm-label">Email</label>
        <input
          id="qm-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          className={`qm-input ${emailErr ? "qm-input-err" : ""}`}
          value={data.email}
          onChange={(e) => onChange("email", e.target.value)}
          onBlur={() => onBlur("email")}
          aria-invalid={!!emailErr}
          aria-describedby={emailErr ? "qm-email-err" : undefined}
          placeholder="you@example.com"
          required
        />
        {emailErr && <p id="qm-email-err" className="qm-err">{emailErr}</p>}
      </div>
    </div>
  );
}

function SuccessView({ onClose, titleId }: { onClose?: () => void; titleId: string }) {
  return (
    <div className="qm-success">
      <div className="qm-check" aria-hidden="true">
        <svg viewBox="0 0 52 52" className="qm-check-svg">
          <circle className="qm-check-circle" cx="26" cy="26" r="24" fill="none" />
          <path className="qm-check-path" fill="none" d="M14 27 l8 8 l16 -18" />
        </svg>
      </div>
      <h2 id={titleId} className="qm-title qm-success-title">We've got it.</h2>
      <p className="qm-success-sub">
        We'll text or call you with your free quote, usually the same day.
      </p>
      <a href="tel:+15189001913" className="qm-btn-call" data-autofocus="">
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call us now (518) 900-1913
      </a>
      {onClose && (
        <button type="button" className="qm-btn-text" onClick={onClose}>
          Close
        </button>
      )}
    </div>
  );
}
