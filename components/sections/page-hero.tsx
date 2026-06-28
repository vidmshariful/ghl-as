import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { HeroBackdrop } from "@/components/sections/hero-backdrop";
import { cn } from "@/lib/utils";

interface Cta {
  label: string;
  href: string;
  variant?: "blue" | "ghost" | "gold" | "text";
}

interface PageHeroProps {
  eyebrow?: string;
  headline: { lead: string; highlight?: string; trail?: string };
  subhead?: string;
  ctas?: Cta[];
  micro?: string;
  size?: "standard" | "compact";
  glow?: boolean;
}

function PageHeroCtas({ ctas }: { ctas: Cta[] }) {
  return (
    <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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
            arrow
            href={cta.href}
          >
            {cta.label}
          </Button>
        ),
      )}
    </div>
  );
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
            ? "max-w-[1200px] pt-36 pb-20 lg:pt-40"
            : "max-w-[760px] pt-32 pb-14 lg:pt-36",
        )}
      >
        {eyebrow && (
          <Reveal>
            <Eyebrow variant="bare">{eyebrow}</Eyebrow>
          </Reveal>
        )}

        <RevealText
          as="h1"
          delay={0.08}
          className={cn(
            "mt-5 text-balance font-display",
            standard
              ? "text-hero"
              : "text-[clamp(32px,5vw,52px)] font-extrabold leading-[1.3] tracking-[-1.5px]",
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
            <p className="mt-6 text-base text-secondary sm:text-lg">{subhead}</p>
          </Reveal>
        )}

        {ctas && ctas.length > 0 && (
          <Reveal delay={0.22}>
            <PageHeroCtas ctas={ctas} />
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
