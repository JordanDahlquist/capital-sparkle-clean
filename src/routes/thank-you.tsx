import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Capital Pro Pressure Washing" },
      { name: "robots", content: "noindex" },
      {
        name: "description",
        content:
          "Thanks for requesting a free quote from Capital Pro Pressure Washing. We'll text or call you the same day.",
      },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <main className="min-h-[70vh] bg-[var(--brand-light-gray)] flex items-center py-16 px-4">
      <div className="mx-auto max-w-[640px] w-full bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
        <div className="mx-auto mb-6 h-16 w-16 rounded-full bg-[var(--brand-deep-blue)]/10 flex items-center justify-center">
          <svg viewBox="0 0 52 52" className="h-10 w-10 text-[var(--brand-deep-blue)]">
            <circle cx="26" cy="26" r="24" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M14 27 l8 8 l16 -18" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p
          className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand-red)] mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Request Received
        </p>
        <h1
          className="text-3xl md:text-4xl font-bold uppercase text-[var(--brand-deep-blue)] tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Thanks — we've got it.
        </h1>
        <p className="mt-4 text-[var(--brand-charcoal)]/80">
          We'll text or call you with your free quote, usually the same day.
          If it's urgent, tap below to reach us right now.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:+15189001913"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-deep-blue)] px-6 py-3 text-white font-bold hover:brightness-110 transition"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call (518) 900-1913
          </a>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-white border border-[var(--brand-deep-blue)]/20 px-6 py-3 text-[var(--brand-deep-blue)] font-bold hover:bg-[var(--brand-light-gray)] transition"
          >
            Back to Home
          </Link>
        </div>
        <p className="mt-8 text-sm text-[var(--brand-charcoal)]/60">
          Local crew · 10+ years serving the Capital Region.
        </p>
      </div>
    </main>
  );
}