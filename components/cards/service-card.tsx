import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

export type ServiceAccent = "blue" | "gold" | "green" | "coral";

// Brand-logo accents (blue / gold / green / coral) on the navy theme.
const ACCENTS: Record<ServiceAccent, { color: string; soft: string }> = {
  blue: { color: "var(--blue)", soft: "var(--blue-soft)" },
  gold: { color: "var(--gold)", soft: "var(--gold-soft)" },
  green: { color: "var(--green)", soft: "var(--green-soft)" },
  coral: { color: "var(--coral)", soft: "var(--coral-soft)" },
};

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  href: string;
  cta: string;
  accent: ServiceAccent;
  /** Scarcity line, e.g. "3 of 6 production slots left". */
  urgency?: string;
  /** Animated GIF related to the service. TODO: real data. */
  gif?: string;
}

/**
 * Home service card: a service GIF, a colored accent matching the brand, title,
 * short description, an optional urgency line, and an arrow CTA. The whole card
 * links to the service page and grows the signature glowing border on hover.
 */
export function ServiceCard({
  icon: Icon,
  title,
  body,
  href,
  cta,
  accent,
  urgency,
  gif,
}: ServiceCardProps) {
  const a = ACCENTS[accent];

  return (
    <Link
      href={href}
      className="tier-glow-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface-2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[6px]"
    >
      {/* Accent tint */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(120% 80% at 50% 0%, ${a.soft}, transparent 60%)`,
        }}
      />

      {/* Media — one shared treatment: 16:10, cover, soft accent vignette */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {gif ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- service render */}
            <img src={gif} alt="" className="h-full w-full object-cover" />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background: `linear-gradient(180deg, transparent 55%, ${a.soft})`,
              }}
            />
          </>
        ) : (
          <div
            className="flex h-full w-full items-center justify-center"
            style={{ background: `linear-gradient(140deg, ${a.soft}, transparent 70%)` }}
          >
            <span
              className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg"
              style={{ background: a.color }}
            >
              <Icon className="h-8 w-8" />
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="relative flex flex-1 flex-col p-5">
        {urgency && (
          <span
            className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[11.5px] font-medium"
            style={{ borderColor: a.color, color: a.color }}
          >
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full"
              style={{ background: a.color }}
            />
            {urgency}
          </span>
        )}
        <h3 className="font-display text-[19px] font-bold tracking-[-0.3px] text-primary">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-secondary">{body}</p>
        <div
          className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold"
          style={{ color: a.color }}
        >
          {cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
