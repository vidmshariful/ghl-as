import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";

interface Cta {
  label: string;
  href: string;
  variant?: "blue" | "ghost" | "gold";
}

interface CtaBandProps {
  eyebrow?: string;
  headline: { lead: string; highlight?: string; trail?: string };
  subhead?: string;
  ctas: Cta[];
}

/** Final call-to-action band: a glowing panel, masked-reveal headline, CTAs. */
export function CtaBand({ eyebrow, headline, subhead, ctas }: CtaBandProps) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line-strong bg-surface-1 px-6 py-20 text-center shadow-[0_30px_90px_rgba(0,0,0,0.4)] md:px-8 md:py-28">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(60% 90% at 50% 0%, var(--blue-glow), transparent 60%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[140%] -translate-x-1/2 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(circle, var(--blue-soft), transparent 70%)",
                filter: "blur(50px)",
              }}
            />
            <div className="relative">
              {eyebrow && <Eyebrow variant="bare">{eyebrow}</Eyebrow>}
              <RevealText
                as="h2"
                className="mx-auto mt-4 max-w-[18ch] font-display text-h2"
                segments={[
                  { text: headline.lead },
                  ...(headline.highlight
                    ? [{ text: headline.highlight, gradient: true }]
                    : []),
                  ...(headline.trail ? [{ text: headline.trail }] : []),
                ]}
              />
              {subhead && (
                <Reveal delay={0.1}>
                  <p className="mx-auto mt-5 max-w-[480px] text-base text-secondary md:text-lg">
                    {subhead}
                  </p>
                </Reveal>
              )}
              <Reveal delay={0.16}>
                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  {ctas.map((cta) => (
                    <Button
                      key={cta.label}
                      variant={cta.variant ?? "blue"}
                      arrow={(cta.variant ?? "blue") !== "ghost"}
                      href={cta.href}
                    >
                      {cta.label}
                    </Button>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
