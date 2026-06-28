"use client";

import * as React from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface StaggerProps {
  children: React.ReactNode;
  /** Seconds between items (60 to 80ms). */
  gap?: number;
  y?: number;
  className?: string;
  /** Applied to each item wrapper (e.g. "h-full" for equal-height card grids). */
  itemClassName?: string;
}

/**
 * Reveals its children in sequence on scroll into view. Each child is wrapped in
 * a Reveal with an incremental delay. Use as a grid/flex container.
 */
export function Stagger({
  children,
  gap = 0.07,
  y,
  className,
  itemClassName,
}: StaggerProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, i) =>
        child == null ? null : (
          <Reveal delay={i * gap} y={y} className={cn(itemClassName)}>
            {child}
          </Reveal>
        ),
      )}
    </div>
  );
}
