import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Glass trust pill with a gold star. Used static, and floated by the Hero.
 */
export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[7px] rounded-full border border-line bg-surface-2/70 px-[13px] py-[7px] text-xs text-secondary backdrop-blur-sm",
        className,
      )}
    >
      <Star className="h-3 w-3 fill-gold text-gold" aria-hidden />
      {children}
    </span>
  );
}
