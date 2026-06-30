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
export function useReveal(delayMs = 0) {
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
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );
    obs.observe(el);
    // Per-element safety net: if the element is already at/near the viewport
    // shortly after mount but the observer hasn't fired (e.g. IO bug, async
    // layout), force-reveal just THAT element. Off-screen elements stay
    // hidden until they actually scroll into view.
    const failsafe = window.setTimeout(() => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh * 0.95 && rect.bottom > 0) {
        setVisible(true);
        obs.disconnect();
      }
    }, 400);
    return () => {
      obs.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  const style: CSSProperties = {
    transitionDelay: visible && delayMs ? `${delayMs}ms` : undefined,
  };
  return {
    ref,
    className: `reveal${visible ? " reveal-in" : ""}`,
    style,
  };
}

type RevealProps<T extends ElementType = "div"> = {
  as?: T;
  delayMs?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "ref" | "as" | "children" | "className" | "style">;

export function Reveal<T extends ElementType = "div">({
  as,
  delayMs = 0,
  className = "",
  style,
  children,
  ...rest
}: RevealProps<T>) {
  const Tag = (as || "div") as ElementType;
  const r = useReveal(delayMs);
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