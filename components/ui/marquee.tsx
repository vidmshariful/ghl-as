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
 * Seamless horizontal marquee. Renders its children twice and slides -50%, so
 * the loop is gapless. Pauses on hover; static under reduced motion. Edges fade
 * via a mask. Pure CSS (no JS).
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
        className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-12">
          {children}
        </div>
      </div>
    </div>
  );
}
