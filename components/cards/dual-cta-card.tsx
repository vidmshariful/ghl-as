import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface DualCtaCardProps {
  title: string;
  body: string;
  cta: { label: string; href: string };
  variant?: "blue" | "ghost";
  className?: string;
}

/**
 * Two-up choice card used in the Hero (Browse / Book a call). Glassy surface,
 * hover lift. The blue (primary) variant carries the diagonal arrow.
 */
export function DualCtaCard({
  title,
  body,
  cta,
  variant = "blue",
  className,
}: DualCtaCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface-2/50 p-[18px] text-left backdrop-blur-sm transition-all duration-200 hover:-translate-y-[3px] hover:border-line-strong",
        className,
      )}
    >
      <h3 className="font-display text-[15px] font-bold text-primary">{title}</h3>
      <p className="mt-1.5 mb-3.5 text-[12.5px] text-secondary">{body}</p>
      <Button
        variant={variant}
        size="sm"
        arrow={variant === "blue"}
        href={cta.href}
      >
        {cta.label}
      </Button>
    </div>
  );
}
