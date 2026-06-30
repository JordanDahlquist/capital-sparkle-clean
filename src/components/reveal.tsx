import {
  useCallback,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

/**
 * Bulletproof scroll-reveal.
 * - Content is ALWAYS visible at rest (see styles.css `.reveal`).
 * - We attach an IntersectionObserver via a callback ref (no useEffect/useState),
 *   so timing is deterministic: the moment React mounts the node, we observe it.
 * - When the element enters the viewport, we add `animate-in` to play a one-shot
 *   keyframe. If anything fails, content stays visible — never hidden.
 */
function attach(el: HTMLElement, delayMs: number) {
  if (
    typeof window === "undefined" ||
    typeof IntersectionObserver === "undefined" ||
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  ) {
    return () => {};
  }
  if (delayMs) el.style.animationDelay = `${delayMs}ms`;

  const trigger = () => {
    if (el.classList.contains("animate-in")) return;
    el.classList.add("animate-in");
  };

  // If already in view at mount, fire on next frame.
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    requestAnimationFrame(trigger);
    return () => {};
  }

  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          trigger();
          obs.disconnect();
          break;
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
  );
  obs.observe(el);
  return () => obs.disconnect();
}

export function useReveal(delayMs = 0, variant: "fade" | "flap" = "fade") {
  const cleanupRef = useRef<(() => void) | null>(null);
  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
      if (node) {
        cleanupRef.current = attach(node, delayMs);
      }
    },
    [delayMs],
  );
  const variantClass = variant === "flap" ? " reveal-flap" : "";
  return {
    ref,
    className: `reveal${variantClass}`,
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
  "ref" | "as" | "children" | "className" | "style"
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
      ref={r.ref}
      className={`${r.className} ${className}`.trim()}
      style={style}
      {...rest}
    >
      {children}
    </Tag>
  );
}