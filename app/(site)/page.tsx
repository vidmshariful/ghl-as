import { Check } from "lucide-react";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Stagger } from "@/components/ui/stagger";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureCard } from "@/components/cards/feature-card";
import { VideoCard } from "@/components/cards/video-card";
import { StatStrip } from "@/components/cards/stat-strip";
import { Testimonial } from "@/components/cards/testimonial";
import { FaqItem } from "@/components/cards/faq-item";

import { videos, type Video } from "@/content/videos";
import {
  homeHero,
  homeStats,
  homeServices,
  homeProblem,
  homeSolution,
  homeLibrary,
  homeWhy,
  homeTestimonials,
  homeFaqs,
  homeFinalCta,
} from "@/content/home";
import { cn } from "@/lib/utils";

const featured = homeLibrary.featuredIds
  .map((id) => videos.find((v) => v.id === id))
  .filter((v): v is Video => Boolean(v));

export default function HomePage() {
  return (
    <>
      <Hero {...homeHero} />

      {/* Trust marquee */}
      <section className="border-y border-line bg-surface-1/50 py-10">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <p className="mb-7 text-center font-mono text-[11px] uppercase tracking-[2px] text-tertiary">
            Trusted across the HighLevel ecosystem
          </p>
          {/* TODO: real data — cleared Extendly agency logos. */}
          <Marquee>
            {["Agency", "Reseller", "SaaS", "Studio", "Partner", "Brand"].map(
              (name, i) => (
                <div
                  key={i}
                  className="flex h-9 w-32 items-center justify-center rounded-lg border border-line bg-surface-2 font-display text-sm font-bold text-tertiary"
                >
                  {name}
                </div>
              ),
            )}
          </Marquee>
        </div>
      </section>

      {/* Services */}
      <SectionWrapper
        align="center"
        eyebrow={homeServices.eyebrow}
        heading={homeServices.heading}
        description={homeServices.description}
        className="!py-20 md:!py-24"
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {homeServices.items.map((s) => (
            <FeatureCard key={s.title} {...s} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Problem (quieter secondary) */}
      <SectionWrapper
        align="center"
        eyebrow={homeProblem.eyebrow}
        heading={homeProblem.heading}
        description={homeProblem.intro}
        className="!py-20 md:!py-24"
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {homeProblem.cards.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Solution (asymmetric split) */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <Eyebrow>{homeSolution.eyebrow}</Eyebrow>
            </Reveal>
            <RevealText
              as="h2"
              className="mt-4 max-w-[14ch] font-display text-h2"
              segments={[
                { text: homeSolution.headline.lead },
                { text: homeSolution.headline.highlight, gradient: true },
              ]}
            />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[460px] text-base text-secondary md:text-lg">
                {homeSolution.body}
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <ul className="mt-7 grid gap-3">
                {homeSolution.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2.5 text-[15px] text-primary"
                  >
                    <Check className="h-4 w-4 shrink-0 text-blue" />
                    {point}
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

          <Reveal delay={0.1} className="relative">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-[40px]"
              style={{
                background:
                  "radial-gradient(60% 60% at 55% 45%, var(--blue-glow), transparent 70%)",
                filter: "blur(28px)",
              }}
            />
            <div className="mx-auto max-w-[420px] lg:mr-0 lg:ml-auto">
              {featured[0] && <VideoCard video={featured[0]} />}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Library (big moment) */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-1/4 h-[600px]"
          style={{
            background:
              "radial-gradient(45% 50% at 50% 50%, var(--blue-glow), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 text-center md:px-8">
          <Reveal>
            <Eyebrow>{homeLibrary.eyebrow}</Eyebrow>
          </Reveal>
          <RevealText
            as="h2"
            className="mx-auto mt-4 max-w-[16ch] font-display text-h2"
            segments={[
              { text: homeLibrary.headline.lead },
              { text: homeLibrary.headline.highlight, gradient: true },
            ]}
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[560px] text-base text-secondary md:text-lg">
              {homeLibrary.description}
            </p>
          </Reveal>
          <Stagger
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            itemClassName="h-full"
          >
            {featured.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </Stagger>
          <Reveal>
            <div className="mt-12 flex justify-center">
              <Button variant="ghost" href={homeLibrary.cta.href}>
                {homeLibrary.cta.label}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats (full-bleed band) */}
      <section className="relative overflow-hidden border-y border-line bg-surface-1 py-24 md:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[400px]"
          style={{
            background:
              "radial-gradient(50% 70% at 50% 0%, var(--blue-glow), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
          <Reveal className="mb-14 text-center">
            <Eyebrow>By the numbers</Eyebrow>
          </Reveal>
          <StatStrip stats={homeStats} />
        </div>
      </section>

      {/* Why us (bento) */}
      <SectionWrapper
        align="center"
        eyebrow={homeWhy.eyebrow}
        heading={homeWhy.heading}
        description={homeWhy.description}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {homeWhy.items.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 4) * 0.06}
              className={cn("h-full", i < 2 && "lg:col-span-2")}
            >
              <FeatureCard {...f} className="h-full" />
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Social proof */}
      <SectionWrapper
        align="center"
        eyebrow={homeTestimonials.eyebrow}
        heading={homeTestimonials.heading}
        className="!py-20 md:!py-24"
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          itemClassName="h-full"
        >
          {homeTestimonials.items.map((t, i) => (
            <Testimonial key={i} {...t} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* FAQ (asymmetric) */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <Eyebrow>{homeFaqs.eyebrow}</Eyebrow>
            </Reveal>
            <RevealText
              as="h2"
              className="mt-4 max-w-[12ch] font-display text-h2"
              segments={[{ text: homeFaqs.heading }]}
            />
          </div>
          <Stagger className="flex flex-col gap-2.5">
            {homeFaqs.items.map((f) => (
              <FaqItem key={f.question} {...f} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand {...homeFinalCta} />
    </>
  );
}
