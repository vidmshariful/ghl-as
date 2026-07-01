import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  /** Seconds for one full loop. */
  duration?: number;
  /** Gap between items (Tailwind gap class suffix in px via arbitrary). */
  className?: string;
}

/**
 * Seamless, always-full infinite marquee. Renders four identical copies (each
 * carrying its own trailing gap so spacing is uniform across the seam) and
 * slides -50%, so the loop is gapless and continuous even on wide screens.
 * Pauses on hover; static under reduced motion. Edges fade via a mask.
 */
export function Marquee({ children, duration = 32, className }: MarqueeProps) {
  return (
    <div
      className={cn("group relative overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${duration}s` }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            aria-hidden={i > 0}
            className="flex shrink-0 items-center gap-12 pr-12"
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
