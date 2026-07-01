import { type LucideIcon } from "lucide-react";
import { type FeatureAccent } from "@/components/cards/feature-card";

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

interface WhyCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  accent?: FeatureAccent;
}

/**
 * Centered "why" card: a glossy 3D-style icon tile over a soft accent-tinted
 * surface, with a hover halo + icon motion. Matches the FeatureCard language.
 */
export function WhyCard({ icon: Icon, title, body, accent = "blue" }: WhyCardProps) {
  const a = ACCENTS[accent];
  return (
    <div className="card-surface group relative flex h-full min-h-[260px] flex-col items-center justify-center rounded-2xl border border-line px-6 py-10 text-center transition-all duration-300 hover:-translate-y-1">
      {/* Hover halo */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-2 -z-10 rounded-[30px] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(60% 55% at 50% 35%, ${a.glow}, transparent 70%)`,
        }}
      />
      {/* Accent tint */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background: `radial-gradient(120% 70% at 50% 0%, ${a.soft}, transparent 60%)`,
        }}
      />

      <span
        className="relative flex h-16 w-16 items-center justify-center rounded-2xl text-white transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-105"
        style={{
          background: a.grad,
          boxShadow: `0 14px 28px ${a.glow}, inset 0 1.5px 0 rgba(255,255,255,0.5), inset 0 -4px 10px rgba(0,0,0,0.18)`,
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-2 top-2 h-2/5 rounded-t-xl bg-gradient-to-b from-white/45 to-transparent"
        />
        <Icon
          className="relative h-7 w-7 drop-shadow-[0_2px_3px_rgba(0,0,0,0.3)]"
          strokeWidth={2.2}
        />
      </span>

      <h3 className="relative mt-6 font-display text-[19px] font-bold tracking-[-0.3px] text-primary">
        {title}
      </h3>
      <p className="relative mt-2 max-w-[260px] text-sm leading-relaxed text-secondary">
        {body}
      </p>
    </div>
  );
}
