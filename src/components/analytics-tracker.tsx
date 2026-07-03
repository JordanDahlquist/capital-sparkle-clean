import { useEffect } from "react";

/**
 * Global click-delegation tracker.
 * Pushes `call_click` to GTM's dataLayer whenever any tel: link is tapped
 * anywhere on the site. Also exposed for Universal GA via gtag if present.
 */
export function AnalyticsTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href^="tel:"]');
      if (!anchor) return;
      const number = anchor.getAttribute("href")?.replace(/^tel:/i, "") ?? "";
      const w = window as unknown as {
        dataLayer?: Record<string, unknown>[];
        gtag?: (...args: unknown[]) => void;
      };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({
        event: "call_click",
        phone_number: number,
        link_text: anchor.textContent?.trim().slice(0, 80) ?? "",
        page_path: window.location.pathname,
      });
      try {
        w.gtag?.("event", "call_click", {
          phone_number: number,
          page_path: window.location.pathname,
        });
      } catch {
        /* ignore */
      }
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true } as EventListenerOptions);
  }, []);

  return null;
}