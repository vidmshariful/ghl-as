"use client";

import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export interface ProcessPhase {
  title: string;
  body: string;
}

const ACCENTS = [
  {
    grad: "linear-gradient(155deg, #5a9bf7, #1f63d6)",
    soft: "var(--blue-soft)",
    glow: "rgba(45,127,240,0.40)",
  },
  {
    grad: "linear-gradient(155deg, #5fd07b, #2c9a47)",
    soft: "var(--green-soft)",
    glow: "rgba(67,185,91,0.40)",
  },
  {
    grad: "linear-gradient(155deg, #f7c83a, #e0980a)",
    soft: "var(--gold-soft)",
    glow: "rgba(242,184,22,0.40)",
  },
  {
    grad: "linear-gradient(155deg, #f6857b, #d23b2d)",
    soft: "var(--coral-soft)",
    glow: "rgba(239,78,60,0.40)",
  },
];

/**
 * Scroll-stacking process: each phase card is sticky at an increasing top
 * offset, so as you scroll the cards stack into a deck (each covering the last,
 * leaving a small peek). Covered cards scale down slightly for depth.
 */
export function ProcessStack({ steps }: { steps: ProcessPhase[] }) {
  return (
    <div className="mx-auto max-w-[880px]">
      {steps.map((s, i) => (
        <StackCard key={s.title} step={s} index={i} total={steps.length} />
      ))}
    </div>
  );
}

function StackCard({
  step,
  index,
  total,
}: {
  step: ProcessPhase;
  index: number;
  total: number;
}) {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 170px", "end 170px"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const a = ACCENTS[index % ACCENTS.length];
  const isLast = index === total - 1;
  const top = 128 + index * 22;

  return (
    <div ref={ref} className="sticky pb-6" style={{ top }}>
      <motion.div
        style={reduce || isLast ? undefined : { scale }}
        className="card-surface relative flex items-center gap-6 overflow-hidden rounded-3xl border border-line p-7 shadow-[0_24px_60px_rgba(0,0,0,0.30)] md:gap-8 md:p-9"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl"
          style={{
            background: `radial-gradient(120% 95% at 0% 0%, ${a.soft}, transparent 55%)`,
          }}
        />
        <span
          className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl font-display text-xl font-extrabold text-white"
          style={{
            background: a.grad,
            boxShadow: `0 12px 24px ${a.glow}, inset 0 1.5px 0 rgba(255,255,255,0.5), inset 0 -4px 10px rgba(0,0,0,0.18)`,
          }}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-2 top-2 h-2/5 rounded-t-xl bg-gradient-to-b from-white/45 to-transparent"
          />
          <span className="relative">{String(index + 1).padStart(2, "0")}</span>
        </span>
        <div className="relative">
          <h3 className="font-display text-[22px] font-bold tracking-[-0.4px] text-primary">
            {step.title}
          </h3>
          <p className="mt-1.5 text-[15px] leading-relaxed text-secondary">
            {step.body}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
