import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaGroup, type CtaItem } from "@/components/ui/cta-group";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";

interface Step {
  title: string;
  body: string;
}

interface CtaBandProps {
  eyebrow?: string;
  headline: { lead: string; highlight?: string; trail?: string };
  subhead?: string;
  ctas: CtaItem[];
  /** Trust ticks shown under the CTAs (split layout). */
  checks?: string[];
  /** "How it works" steps shown in the right card (enables the split layout). */
  steps?: Step[];
}

function headlineSegments({
  headline,
}: {
  headline: CtaBandProps["headline"];
}) {
  return [
    { text: headline.lead },
    ...(headline.highlight ? [{ text: headline.highlight, gradient: true }] : []),
    ...(headline.trail ? [{ text: headline.trail }] : []),
  ];
}

/**
 * Final call-to-action band. Two shapes:
 *  - split: copy + CTAs + trust ticks on the left, a "How it works" step card on
 *    the right, inside an animated glowing border (used when `steps` is passed).
 *  - centered: a single glowing panel with the headline and CTAs (default).
 */
export function CtaBand({
  eyebrow,
  headline,
  subhead,
  ctas,
  checks,
  steps,
}: CtaBandProps) {
  const split = Boolean(steps && steps.length > 0);

  if (split) {
    return (
      <section className="cta-overlap relative z-10 pt-28 md:pt-[180px] pb-0 mb-[-64px] md:mb-[-100px]">
        <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
          <Reveal>
            <div className="tier-glow relative overflow-hidden rounded-2xl border border-transparent bg-surface-1 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:p-12 lg:p-14">
              {/* Blue ambient glow, concentrated upper-left like the panel light */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(75% 70% at 22% 0%, var(--blue-glow), transparent 62%)",
                }}
              />

              <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
                {/* Left: copy + CTAs + trust ticks */}
                <div>
                  {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
                  <RevealText
                    as="h2"
                    className="mt-4 max-w-[16ch] text-balance font-display text-h2 text-primary"
                    segments={headlineSegments({ headline })}
                  />
                  {subhead && (
                    <Reveal delay={0.1}>
                      <p className="mt-3.5 max-w-[440px] text-base text-secondary md:text-lg">
                        {subhead}
                      </p>
                    </Reveal>
                  )}
                  <Reveal delay={0.16}>
                    <CtaGroup ctas={ctas} className="mt-10" />
                  </Reveal>
                  {checks && checks.length > 0 && (
                    <Reveal delay={0.22}>
                      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                        {checks.map((c) => (
                          <span
                            key={c}
                            className="inline-flex items-center gap-2 text-sm text-secondary"
                          >
                            <Check className="h-4 w-4 shrink-0 text-blue" />
                            {c}
                          </span>
                        ))}
                      </div>
                    </Reveal>
                  )}
                </div>

                {/* Right: How it works steps */}
                <Reveal delay={0.12}>
                  <div className="card-surface rounded-2xl border border-line p-6 md:p-7">
                    <p className="font-mono text-[12px] uppercase tracking-[2px] text-tertiary">
                      How it works
                    </p>
                    <div className="relative mt-6">
                      {/* Connector line behind the number badges */}
                      <span
                        aria-hidden
                        className="absolute left-5 top-5 bottom-5 w-px bg-line"
                      />
                      <ul className="relative flex flex-col gap-6">
                        {steps!.map((s, i) => (
                          <li key={s.title} className="flex gap-4">
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-blue/30 bg-blue-soft font-mono text-[13px] font-bold text-blue">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <div>
                              <h3 className="font-display text-base font-bold tracking-[-0.3px] text-primary">
                                {s.title}
                              </h3>
                              <p className="mt-1 text-sm leading-relaxed text-secondary">
                                {s.body}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 pt-28 md:pt-[180px] pb-0 mb-[-64px] md:mb-[-100px]">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface-1 px-6 py-20 text-center shadow-[0_24px_60px_rgba(0,0,0,0.45)] md:px-8 md:py-28">
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
              {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
              <RevealText
                as="h2"
                className="mx-auto mt-4 max-w-[18ch] font-display text-h2 text-primary"
                segments={headlineSegments({ headline })}
              />
              {subhead && (
                <Reveal delay={0.1}>
                  <p className="mx-auto mt-3.5 max-w-[480px] text-base text-secondary md:text-lg">
                    {subhead}
                  </p>
                </Reveal>
              )}
              <Reveal delay={0.16}>
                <CtaGroup ctas={ctas} className="mt-10 justify-center" />
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
