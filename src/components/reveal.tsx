import {
  useEffect,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Scroll-reveal — global, bulletproof.
 *
 * Strategy: a SINGLE module-level scanner watches the document for
 * `.reveal` elements and toggles `.animate-in` when they enter the
 * viewport. Bypasses any per-component ref/hydration timing issues.
 *
 * Content is ALWAYS visible at rest (see `styles.css`). If JS or
 * IntersectionObserver is unavailable, nothing breaks — content just
 * stays visible without an entrance animation.
 */

let installed = false;
let io: IntersectionObserver | null = null;

function scan() {
  if (!io) return;
  const nodes = document.querySelectorAll<HTMLElement>(
    ".reveal:not(.animate-in)",
  );
  nodes.forEach((el) => {
    if (el.dataset.revealObs === "1") return;
    el.dataset.revealObs = "1";
    const d = el.dataset.revealDelay;
    if (d && !el.style.animationDelay) {
      el.style.animationDelay = `${d}ms`;
    }
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) {
      requestAnimationFrame(() => el.classList.add("animate-in"));
    } else {
      io!.observe(el);
    }
  });
}

function install() {
  if (installed) {
    scan();
    return;
  }
  installed = true;
  if (
    typeof window === "undefined" ||
    typeof IntersectionObserver === "undefined" ||
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("animate-in");
          io!.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
  );

  const start = () => {
    scan();
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });
    let raf = 0;
    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        scan();
      });
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
}

export function useReveal(delayMs = 0, variant: "fade" | "flap" = "fade") {
  useEffect(() => {
    install();
  }, []);
  const variantClass = variant === "flap" ? " reveal-flap" : "";
  return {
    className: `reveal${variantClass}`,
    dataDelay: delayMs ? String(delayMs) : undefined,
  };
}

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  delayMs?: number;
  variant?: "fade" | "flap";
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  "as" | "children" | "className" | "style"
>;

export function Reveal<T extends ElementType = "div">({
  as,
  delayMs = 0,
  variant = "fade",
  className = "",
  style,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const r = useReveal(delayMs, variant);
  return (
    <Tag
      className={`${r.className} ${className}`.trim()}
      style={style}
      data-reveal-delay={r.dataDelay}
      {...rest}
    >
      {children}
    </Tag>
  );
}