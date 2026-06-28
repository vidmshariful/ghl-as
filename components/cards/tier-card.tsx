import { Button } from "@/components/ui/button";
import type { Tier } from "@/content/pricing";
import { cn } from "@/lib/utils";

/**
 * Pricing tier. Bordered price box with the original price struck through (muted
 * gray, never red) next to the current price (gradient) and period, an Includes
 * list with gold ring bullets, and a CTA anchored at the bottom.
 *
 * Popular tier: an animated rotating blue→gold gradient border (.tier-glow), a
 * warm gold corner glow, and a floating "Most popular" badge that is absolutely
 * positioned so every card keeps the same height and content alignment.
 */
export function TierCard({ tier, className }: { tier: Tier; className?: string }) {
  return (
    <div
      className={cn(
        "card-surface group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-200",
        tier.popular
          ? "tier-glow border-transparent hover:-translate-y-[3px]"
          : "border-line hover:-translate-y-[3px] hover:border-blue hover:shadow-[0_12px_34px_rgba(0,0,0,0.3)]",
        className,
      )}
    >
      {/* Gold corner glow (popular) */}
      {tier.popular && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 z-[1] h-48 w-48 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(245,184,31,0.28), transparent 70%)",
            filter: "blur(18px)",
          }}
        />
      )}

      {/* Floating badge (absolute so it never changes card height) */}
      {tier.popular && (
        <span className="absolute right-4 top-4 z-20 rounded-md bg-gold px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.5px] text-ink shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
          Most popular
        </span>
      )}

      <div className="relative z-10 flex h-full flex-col">
        <h3 className="font-display text-[23px] font-extrabold tracking-[-0.6px] text-primary">
          {tier.name}
        </h3>
        <p className="mt-1.5 min-h-[36px] max-w-[88%] text-[13px] text-secondary">
          {tier.subtitle}
        </p>

        <div
          className={cn(
            "my-[18px] flex flex-wrap items-baseline gap-2 rounded-[10px] border p-4",
            tier.popular ? "border-blue/40 bg-blue-soft" : "border-line",
          )}
        >
          {tier.was != null && (
            <span className="font-display text-[17px] font-bold text-tertiary line-through">
              ${tier.was.toLocaleString()}
            </span>
          )}
          <span
            className="bg-clip-text font-display text-[33px] font-extrabold tracking-[-1.2px] text-transparent"
            style={{ backgroundImage: "var(--grad-text)" }}
          >
            ${tier.price.toLocaleString()}
          </span>
          <span className="text-[13px] text-secondary">/{tier.period}</span>
        </div>

        <p className="mb-4 text-[13px] font-semibold text-primary">Includes:</p>
        <ul className="flex flex-col gap-3">
          {tier.includes.map((item) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[13.5px] text-secondary"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-gold">
                <span className="h-[7px] w-[7px] rounded-full bg-gold" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-[22px]">
          <Button variant="blue" arrow href={tier.cta.href} className="w-full">
            {tier.cta.label}
          </Button>
        </div>
      </div>
    </div>
  );
}
