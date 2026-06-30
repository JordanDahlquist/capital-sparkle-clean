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
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window === "undefined" ||
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      // Already visible at rest; just skip the entrance animation.
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setAnimate(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: CSSProperties = {
    animationDelay: animate && delayMs ? `${delayMs}ms` : undefined,
  };
  const variantClass = variant === "flap" ? " reveal-flap" : "";
  return {
    ref,
    className: `reveal${variantClass}${animate ? " animate-in" : ""}`,
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