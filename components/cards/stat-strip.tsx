"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface StatItem {
  /** Numeric value counts up on scroll into view. */
  value?: number;
  /** Raw string shown as-is (for placeholder figures like "000"). */
  display?: string;
  prefix?: string;
  /** Rendered in gold (e.g. "+", "%"). */
  suffix?: string;
  label: string;
}

function CountUp({ value }: { value: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const [n, setN] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: reduce ? 0 : 1.6,
      ease: EASE,
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return <span ref={ref}>{n.toLocaleString()}</span>;
}

/**
 * Big-number moment. Enormous gradient numbers with gold plus/percent marks,
 * laid out so the digits have room to breathe (2-up for four stats, a row for
 * three). Numbers count up from zero on scroll into view.
 */
export function StatStrip({
  stats,
  className,
}: {
  stats: StatItem[];
  className?: string;
}) {
  const cols =
    stats.length === 3
      ? "grid-cols-1 sm:grid-cols-3"
      : "grid-cols-2";

  return (
    <div className={cn("grid gap-x-8 gap-y-12", cols, className)}>
      {stats.map((s, i) => (
        <div key={`${s.label}-${i}`} className="text-center">
          <div className="inline-flex items-baseline font-display text-stat leading-none">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--grad-text)" }}
            >
              {s.prefix}
              {s.value != null ? <CountUp value={s.value} /> : s.display}
            </span>
            {s.suffix && <span className="text-gold">{s.suffix}</span>}
          </div>
          <div className="mt-3 text-sm text-secondary">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
