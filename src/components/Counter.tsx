"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  value: number;
  prefix?: string;
  duration?: number;
  showControls?: boolean;
  min?: number;
  max?: number;
  step?: number;
  haptic?: boolean;
};

export default function Counter({ value, prefix, duration = 1200, showControls = false, min, max, step = 1, haptic = false }: Props) {
  const [display, setDisplay] = useState(0);
  const [animatedOnce, setAnimatedOnce] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const liveRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number | null>(null);

  const bounded = useMemo(() => {
    const lower = typeof min === "number" ? min : 0;
    const upper = typeof max === "number" ? max : value;
    return { lower, upper };
  }, [min, max, value]);

  const animateTo = useCallback(
    (target: number, ms = 300) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      const start = performance.now();
      const from = display;
      const run = (now: number) => {
        const p = Math.min((now - start) / ms, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        const next = Math.round(from + (target - from) * eased);
        setDisplay(next);
        if (p < 1) rafRef.current = requestAnimationFrame(run);
        else setDisplay(target);
      };
      rafRef.current = requestAnimationFrame(run);
    },
    [display]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el || animatedOnce) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimatedOnce(true);
          const start = performance.now();
          const stepFn = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(stepFn);
            else setDisplay(value);
          };
          requestAnimationFrame(stepFn);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration, animatedOnce]);

  const vibrate = useCallback(() => {
    if (!haptic || typeof navigator === "undefined") return;
    const vib = (navigator as unknown as { vibrate?: (pattern: number | number[]) => boolean }).vibrate;
    if (typeof vib === "function") {
      try {
        vib(10);
      } catch {}
    }
  }, [haptic]);

  const canDec = display > bounded.lower;
  const canInc = display < bounded.upper;

  const onInc = () => {
    if (!canInc) return;
    const target = Math.min(display + step, bounded.upper);
    vibrate();
    animateTo(target);
  };
  const onDec = () => {
    if (!canDec) return;
    const target = Math.max(display - step, bounded.lower);
    vibrate();
    animateTo(target);
  };
  const onReset = () => {
    vibrate();
    animateTo(0);
  };

  return (
    <div ref={containerRef} className={showControls ? "inline-flex items-center gap-3" : "inline-flex items-center"}>
      <span
        ref={liveRef}
        role="status"
        aria-live="polite"
        className="tabular-nums tracking-tight transition-opacity duration-200"
      >
        {`${prefix ?? ""}${display}`}
      </span>
      {showControls && (
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Decrease"
            onClick={onDec}
            disabled={!canDec}
            className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            −
          </button>
          <button
            type="button"
            aria-label="Increase"
            onClick={onInc}
            disabled={!canInc}
            className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            +
          </button>
          <button
            type="button"
            aria-label="Reset"
            onClick={onReset}
            className="inline-flex h-8 px-3 sm:h-9 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] text-xs transition hover:border-[var(--accent)] hover:text-[var(--accent)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
