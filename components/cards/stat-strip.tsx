"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
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
 * Big-number moment, all stats on one line with vertical dividers and faint
 * corner marks. Numbers count up from zero on scroll into view. Falls back to a
 * 2-up grid on the smallest screens.
 */
export function StatStrip({
  stats,
  className,
}: {
  stats: StatItem[];
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {/* Corner marks */}
      <Plus
        aria-hidden
        className="absolute -left-2 -top-6 hidden h-4 w-4 text-blue/40 sm:block"
      />
      <Plus
        aria-hidden
        className="absolute -right-2 -top-6 hidden h-4 w-4 text-blue/40 sm:block"
      />
      <Plus
        aria-hidden
        className="absolute -bottom-6 -left-2 hidden h-4 w-4 text-blue/40 sm:block"
      />
      <Plus
        aria-hidden
        className="absolute -bottom-6 -right-2 hidden h-4 w-4 text-blue/40 sm:block"
      />

      <div className="grid grid-cols-2 gap-y-10 sm:flex sm:divide-x sm:divide-line">
        {stats.map((s, i) => (
          <div
            key={`${s.label}-${i}`}
            className="px-4 text-center sm:flex-1 sm:px-6"
          >
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
            <div className="mt-3 font-mono text-[11px] uppercase tracking-[1.5px] text-tertiary">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
