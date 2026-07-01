import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { VideoCard } from "@/components/cards/video-card";
import { homeProblem, homeSolution } from "@/content/home";
import { videos } from "@/content/videos";

const featured = videos[0];

/**
 * Problem → Solution. Problem: full-width rows separated by borders that reveal
 * on scroll. Solution: a two-column block — copy + CTA on the left, the featured
 * video card on the right. (No sticky/pinning — kept simple and robust.)
 */
export function ProblemSolution() {
  return (
    <section className="theme-light bg-bg relative overflow-hidden py-20 md:py-32">
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        {/* PROBLEM */}
        <div>
          <Reveal>
            <Eyebrow>{homeProblem.eyebrow}</Eyebrow>
          </Reveal>
          <RevealText
            as="h2"
            className="mt-4 max-w-[1100px] font-display text-h2 text-primary"
            segments={[
              { text: homeProblem.heading },
              { text: ` ${homeProblem.headingHighlight}`, gradient: true },
            ]}
          />
          <Reveal delay={0.1}>
            <p className="mt-3.5 max-w-[520px] text-base text-secondary md:text-lg">
              {homeProblem.intro}
            </p>
          </Reveal>
        </div>

        {/* Full-width problem rows */}
        <div className="mt-12 border-t border-line">
          {homeProblem.cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <div className="grid items-baseline gap-2 border-b border-line py-8 md:grid-cols-[auto_1fr_1.5fr] md:gap-10">
                <span
                  className="bg-clip-text font-display text-4xl font-extrabold leading-none text-transparent md:text-5xl"
                  style={{ backgroundImage: "var(--grad-text)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-bold tracking-[-0.4px] text-primary md:text-3xl">
                  {c.title}
                </h3>
                <p className="text-base leading-relaxed text-secondary">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* SOLUTION — two columns */}
        <div className="mt-28 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 md:mt-40">
          <div>
            <Reveal>
              <Eyebrow>{homeSolution.eyebrow}</Eyebrow>
            </Reveal>
            <RevealText
              as="h2"
              className="mt-4 max-w-[15ch] text-balance font-display text-h2 text-primary"
              segments={[
                { text: homeSolution.headline.lead },
                { text: homeSolution.headline.highlight, gradient: true },
              ]}
            />
            <Reveal delay={0.1}>
              <p className="mt-3.5 max-w-[480px] text-base text-secondary md:text-lg">
                {homeSolution.body}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <ul className="mt-7 grid gap-3">
                {homeSolution.cards.map((f) => (
                  <li
                    key={f.title}
                    className="flex items-center gap-2.5 text-[15px] text-primary"
                  >
                    <Check className="h-4 w-4 shrink-0 text-blue" />
                    {f.title}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button variant="blue" arrow href={homeSolution.cta.href}>
                  {homeSolution.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto max-w-[440px] lg:ml-auto lg:mr-0">
              <VideoCard video={featured} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
