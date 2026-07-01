import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CtaItem {
  label: string;
  href: string;
  variant?: "blue" | "ghost" | "gold" | "text";
}

/**
 * The one CTA-list renderer used by the hero, page heroes, and the final CTA
 * band. A `text` variant renders an inline arrow link; any other variant renders
 * a Button (with the diagonal arrow on everything except the ghost variant).
 */
export function CtaGroup({
  ctas,
  className,
}: {
  ctas: CtaItem[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-6 gap-y-3",
        className,
      )}
    >
      {ctas.map((cta) =>
        cta.variant === "text" ? (
          <Link
            key={cta.label}
            href={cta.href}
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary transition-colors hover:text-blue"
          >
            {cta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ) : (
          <Button
            key={cta.label}
            variant={cta.variant ?? "blue"}
            arrow={(cta.variant ?? "blue") !== "ghost"}
            href={cta.href}
          >
            {cta.label}
          </Button>
        ),
      )}
    </div>
  );
}
