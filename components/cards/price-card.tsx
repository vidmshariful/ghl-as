import { Button } from "@/components/ui/button";
import type { FeatureAccent } from "@/components/cards/feature-card";

const ACCENTS: Record<FeatureAccent, { color: string; soft: string; glow: string }> = {
  blue: { color: "#2d7ff0", soft: "var(--blue-soft)", glow: "rgba(45,127,240,0.35)" },
  green: { color: "#43b95b", soft: "var(--green-soft)", glow: "rgba(67,185,91,0.30)" },
  gold: { color: "#f2b816", soft: "var(--gold-soft)", glow: "rgba(242,184,22,0.30)" },
  coral: { color: "#ef4e3c", soft: "var(--coral-soft)", glow: "rgba(239,78,60,0.30)" },
};

export interface PriceTier {
  type: string;
  scope: string;
  /** Starting price, e.g. "$2,500". Shown as "From $2,500". */
  price: string;
  accent?: FeatureAccent;
}

/**
 * Custom-video price card: video type, scope, a starting price, and a
 * get-a-quote CTA. Accent-tinted surface with a hover halo.
 */
export function PriceCard({
  type,
  scope,
  price,
  accent = "blue",
  cta,
}: PriceTier & { cta: { label: string; href: string } }) {
  const a = ACCENTS[accent];
  return (
    <div className="card-surface group relative flex h-full flex-col rounded-2xl border border-line p-7 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2">
      {/* hover halo */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-2 -z-10 rounded-[28px] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(60% 55% at 50% 35%, ${a.glow}, transparent 70%)`,
        }}
      />
      {/* accent tint */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(130% 90% at 0% 0%, ${a.soft}, transparent 58%)`,
        }}
      />

      <div className="relative flex h-full flex-col">
        <span
          className="font-mono text-[11px] font-semibold uppercase tracking-[1.5px]"
          style={{ color: a.color }}
        >
          {type}
        </span>
        <p className="mt-2 text-sm text-secondary">{scope}</p>

        <div className="mt-6 flex items-baseline gap-1.5">
          <span className="text-sm font-medium text-tertiary">From</span>
          <span
            className="bg-clip-text font-display text-[34px] font-extrabold tracking-[-1px] text-transparent"
            style={{ backgroundImage: "var(--grad-text)" }}
          >
            {price}
          </span>
        </div>

        <div className="mt-auto pt-6">
          <Button variant="ghost" arrow href={cta.href} className="w-full">
            {cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
