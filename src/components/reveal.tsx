import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Lightweight, dependency-free scroll-reveal.
 * - Uses a single IntersectionObserver per element (cheap, fires once).
 * - Transitions opacity + transform only (GPU-friendly, no layout jump).
 * - Honors prefers-reduced-motion: shows content immediately, no animation.
 * - Elements occupy their final layout space from the start; we only paint
 *   opacity/transform, so nothing on the page shifts.
 */
export function useReveal(delayMs = 0, variant: "fade" | "flap" = "fade") {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    // Enable the hidden pre-animation state only now that we know JS + IO work.
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("js-reveal-ready");
    }
    // Flap cards start rotated -75deg which squishes their bounding box.
    // Use a near-zero threshold so IO fires as soon as ANY part enters view.
    const isFlap = variant === "flap";
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      isFlap
        ? { rootMargin: "0px 0px -5% 0px", threshold: 0.01 }
        : { rootMargin: "0px 0px -18% 0px", threshold: 0.2 },
    );
    obs.observe(el);
    // Per-element safety net: poll a few times. For flap cards, the rotated
    // bounding box may confuse IO — also check the parent's rect so a card
    // is never stuck hidden once its grid is in view.
    const checkVisible = () => {
      const node = ref.current;
      if (!node) return false;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const targets: Element[] = [node];
      if (isFlap && node.parentElement) targets.push(node.parentElement);
      for (const t of targets) {
        const r = t.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) return true;
      }
      return false;
    };
    const failsafes = [200, 600, 1200, 2000].map((ms) =>
      window.setTimeout(() => {
        if (checkVisible()) {
          setVisible(true);
          obs.disconnect();
        }
      }, ms),
    );
    // Also re-check on scroll: if IO somehow misses, scroll position reveals it.
    const onScroll = () => {
      if (checkVisible()) {
        setVisible(true);
        obs.disconnect();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      obs.disconnect();
      failsafes.forEach((id) => window.clearTimeout(id));
      window.removeEventListener("scroll", onScroll);
    };
  }, [variant]);

  const style: CSSProperties = {
    transitionDelay: visible && delayMs ? `${delayMs}ms` : undefined,
  };
  const variantClass = variant === "flap" ? " reveal-flap" : "";
  return {
    ref,
    className: `reveal${variantClass}${visible ? " reveal-in" : ""}`,
    style,
  };
}

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  delayMs?: number;
  variant?: "fade" | "flap";
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "ref" | "as" | "children" | "className" | "style">;

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
      ref={r.ref as React.Ref<HTMLElement>}
      className={`${r.className} ${className}`.trim()}
      style={{ ...r.style, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}