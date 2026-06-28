"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface TextSegment {
  text: string;
  gradient?: boolean;
}

interface RevealTextProps {
  segments: TextSegment[];
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  stagger?: number;
  once?: boolean;
  amount?: number;
}

const MOTION_TAGS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
} as const;

/**
 * Masked, word-by-word headline reveal: each word rises out of a clip on scroll
 * into view, staggered. Keeps the --grad-text gradient on flagged segments.
 * Static (plain) under prefers-reduced-motion.
 */
export function RevealText({
  segments,
  className,
  as = "h2",
  delay = 0,
  stagger = 0.045,
  once = true,
  amount = 0.4,
}: RevealTextProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return React.createElement(
      as,
      { className },
      segments.map((s, i) =>
        s.gradient ? (
          <span
            key={i}
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--grad-text)" }}
          >
            {s.text}
          </span>
        ) : (
          <React.Fragment key={i}>{s.text}</React.Fragment>
        ),
      ),
    );
  }

  const words: { word: string; gradient?: boolean }[] = [];
  segments.forEach((seg) => {
    seg.text
      .trim()
      .split(/\s+/)
      .forEach((w) => words.push({ word: w, gradient: seg.gradient }));
  });

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word: Variants = {
    hidden: { y: "115%" },
    show: { y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  const Tag = MOTION_TAGS[as];

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {words.map((w, i) => (
        <React.Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom">
            <motion.span
              variants={word}
              className={w.gradient ? "inline-block bg-clip-text text-transparent" : "inline-block"}
              style={
                w.gradient ? { backgroundImage: "var(--grad-text)" } : undefined
              }
            >
              {w.word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : null}
        </React.Fragment>
      ))}
    </Tag>
  );
}
