"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children: React.ReactNode;
  /** Seconds. For grouped stagger pass i * 0.07 (60 to 80ms between items). */
  delay?: number;
  /** Initial y offset in px. */
  y?: number;
  amount?: number;
  once?: boolean;
  className?: string;
}

/**
 * Scroll reveal: opacity 0 to 1, y 24 to 0, once at ~15% in view.
 * The site's one reveal motion. Respects prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  amount = 0.15,
  once = true,
  className,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.5, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
