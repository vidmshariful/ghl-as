import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type FeatureAccent = "blue" | "green" | "gold" | "coral";

/**
 * Per-accent visuals: a glossy gradient for the 3D-look icon tile, a soft tint
 * for the card surface, and a glow color for the hover halo. The bright tile
 * gradients read well on both the light and dark sections.
 */
const ACCENTS: Record<
  FeatureAccent,
  { grad: string; soft: string; glow: string }
> = {
  blue: {
    grad: "linear-gradient(155deg, #5a9bf7, #1f63d6)",
    soft: "var(--blue-soft)",
    glow: "rgba(45,127,240,0.45)",
  },
  green: {
    grad: "linear-gradient(155deg, #5fd07b, #2c9a47)",
    soft: "var(--green-soft)",
    glow: "rgba(67,185,91,0.40)",
  },
  gold: {
    grad: "linear-gradient(155deg, #f9cd4a, #e0980a)",
    soft: "var(--gold-soft)",
    glow: "rgba(242,184,22,0.40)",
  },
  coral: {
    grad: "linear-gradient(155deg, #f6857b, #d23b2d)",
    soft: "var(--coral-soft)",
    glow: "rgba(239,78,60,0.40)",
  },
};

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  body: string;
  accent?: FeatureAccent;
  /** If set, the whole card becomes a link. */
  href?: string;
  className?: string;
}

/**
 * Tall feature card with a soft accent-tinted surface, a glossy 3D-style icon
 * tile (gradient + top gloss + depth shadows), and a hover halo + icon motion.
 */
export function FeatureCard({
  icon: Icon,
  title,
  body,
  accent = "blue",
  href,
  className,
}: FeatureCardProps) {
  const a = ACCENTS[accent];

  const classes = cn(
    "card-surface group relative flex h-full min-h-[270px] flex-col rounded-2xl border border-line p-7 transition-all duration-300 hover:-translate-y-1",
    className,
  );

  const inner = (
    <>
      {/* Hover halo (sits just outside the card edges) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-2 -z-10 rounded-[30px] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(60% 55% at 50% 35%, ${a.glow}, transparent 70%)`,
        }}
      />
      {/* Accent tint over the surface */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(135% 95% at 0% 0%, ${a.soft}, transparent 58%)`,
        }}
      />

      {Icon && (
        <span
          className="relative flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105"
          style={{
            background: a.grad,
            boxShadow: `0 12px 24px ${a.glow}, inset 0 1.5px 0 rgba(255,255,255,0.5), inset 0 -4px 10px rgba(0,0,0,0.18)`,
          }}
        >
          {/* Top gloss highlight for the 3D look */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-1.5 top-1.5 h-2/5 rounded-t-xl bg-gradient-to-b from-white/45 to-transparent"
          />
          <Icon
            className="relative h-[26px] w-[26px] drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
            strokeWidth={2.2}
          />
        </span>
      )}

      <div className={cn("relative", Icon && "mt-auto pt-8")}>
        <h3 className="font-display text-[19px] font-bold tracking-[-0.3px] text-primary">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">{body}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
}
