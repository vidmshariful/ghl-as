import * as React from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * The one eyebrow: a colorful gold/amber tag — gold text on a soft-gold fill
 * with a gold hairline border (8px radius), mono and letter-spaced. The brand
 * gold reads on both the dark and light sections and gives each section a warm
 * accent marker.
 */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-lg border border-gold/40 bg-gold-soft px-3 py-1.5 font-mono text-[12px] font-semibold uppercase leading-none tracking-[2px] text-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}
