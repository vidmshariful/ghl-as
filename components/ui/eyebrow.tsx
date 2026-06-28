import * as React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  /** Kept for compatibility; all eyebrows now render as a glowing chip. */
  variant?: "pill" | "bare";
  className?: string;
}

/**
 * Mono, gold, framed in guillemets, inside a button-shaped chip with the
 * animated rotating blue→gold glow border (.tier-glow), matching the logo / CTA.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "tier-glow relative inline-flex items-center overflow-hidden rounded-full bg-surface-2 px-4 py-2.5",
        className,
      )}
    >
      <span className="relative z-10 font-mono text-[11.5px] uppercase leading-none tracking-[1.6px] text-gold">
        « {children} »
      </span>
    </span>
  );
}
