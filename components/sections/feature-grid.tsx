import { Stagger } from "@/components/ui/stagger";
import { FeatureCard, type FeatureAccent } from "@/components/cards/feature-card";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

/** Brand accents cycled across the cards so each one gets its own color. */
const PALETTE: FeatureAccent[] = ["blue", "green", "gold", "coral"];

export interface FeatureItem {
  icon?: LucideIcon;
  title: string;
  body: string;
  href?: string;
}

/**
 * Grid of FeatureCards with auto-cycled brand accents (each card a different
 * color). Use columns=3 or 4. Reveals in sequence on scroll.
 */
export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: FeatureItem[];
  columns?: 3 | 4;
}) {
  return (
    <Stagger
      className={cn(
        "grid grid-cols-1 gap-5 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "sm:grid-cols-3",
      )}
      itemClassName="h-full"
    >
      {items.map((f, i) => (
        <FeatureCard key={f.title} {...f} accent={PALETTE[i % PALETTE.length]} />
      ))}
    </Stagger>
  );
}
