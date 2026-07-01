import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaGroup, type CtaItem } from "@/components/ui/cta-group";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { HeroBackdrop } from "@/components/sections/hero-backdrop";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  headline: { lead: string; highlight?: string; trail?: string };
  subhead?: string;
  ctas?: CtaItem[];
  micro?: string;
  size?: "standard" | "compact";
  glow?: boolean;
}

/**
 * Standard / compact page hero: grid backdrop with passing light, masked-reveal
 * headline, a subhead matching the headline box width, text-plus-button CTAs.
 * The homepage uses the richer Hero instead.
 */
export function PageHero({
  eyebrow,
  headline,
  subhead,
  ctas,
  micro,
  size = "standard",
  glow = true,
}: PageHeroProps) {
  const standard = size === "standard";

  return (
    <section className="relative overflow-hidden">
      {glow && <HeroBackdrop />}

      <div
        className={cn(
          "relative z-10 mx-auto px-6 text-center md:px-8",
          standard
            ? "max-w-[1200px] pt-44 pb-28 lg:pt-52"
            : "max-w-[760px] pt-40 pb-24 lg:pt-44",
        )}
      >
        {eyebrow && (
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}

        <RevealText
          as="h1"
          delay={0.08}
          className={cn(
            "mt-4 text-balance font-display",
            standard ? "text-hero" : "text-h2",
          )}
          segments={[
            { text: headline.lead },
            ...(headline.highlight
              ? [{ text: headline.highlight, gradient: true }]
              : []),
            ...(headline.trail ? [{ text: headline.trail }] : []),
          ]}
        />

        {subhead && (
          <Reveal delay={0.16}>
            <p className="mt-3.5 text-base text-secondary sm:text-lg">{subhead}</p>
          </Reveal>
        )}

        {ctas && ctas.length > 0 && (
          <Reveal delay={0.22}>
            <CtaGroup ctas={ctas} className="mt-8 justify-center" />
          </Reveal>
        )}

        {micro && (
          <Reveal delay={0.28}>
            <p className="mt-6 text-xs text-tertiary">{micro}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
