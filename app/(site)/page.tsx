import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Stagger } from "@/components/ui/stagger";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/ui/marquee";
import { Parallax } from "@/components/ui/parallax";
import { Hero } from "@/components/sections/hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { WhyCard } from "@/components/cards/why-card";
import { type FeatureAccent } from "@/components/cards/feature-card";
import { ServiceCard } from "@/components/cards/service-card";
import { VideoCard } from "@/components/cards/video-card";
import { StatBand } from "@/components/sections/stat-band";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";

import { videos, type Video } from "@/content/videos";
import {
  homeHero,
  homeStats,
  homeServices,
  homeLibrary,
  homeWhy,
  homeFaqs,
  homeFinalCta,
} from "@/content/home";

const featured = homeLibrary.featuredIds
  .map((id) => videos.find((v) => v.id === id))
  .filter((v): v is Video => Boolean(v));

const WHY_ACCENTS: FeatureAccent[] = ["blue", "green", "gold", "coral"];

export default function HomePage() {
  return (
    <>
      {/* Hook */}
      <Hero {...homeHero} />

      {/* Trust strip */}
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
                  className="font-display text-lg font-semibold text-tertiary/55"
                >
                  {name}
                </div>
              ),
            )}
          </Marquee>
        </div>
      </section>

      {/* Problem to solution (tension, then the fix) */}
      <ProblemSolution />

      {/* Services (the offer) */}
      <SectionWrapper
        align="center"
        eyebrow={homeServices.eyebrow}
        heading={homeServices.heading}
        headingHighlight={homeServices.headingHighlight}
        description={homeServices.description}
        className="py-24 md:py-36"
      >
        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {homeServices.items.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </Stagger>

        {/* Combined-offer card */}
        <Reveal>
          <div className="card-surface mt-5 grid items-center gap-6 rounded-2xl border border-line p-6 text-left md:grid-cols-[1.5fr_auto] md:p-8">
            <div>
              <h3 className="font-display text-[19px] font-bold tracking-[-0.3px] text-primary">
                {homeServices.combo.title}
              </h3>
              <p className="mt-2 max-w-[640px] text-sm text-secondary md:text-base">
                {homeServices.combo.body}
              </p>
            </div>
            <div className="md:justify-self-end">
              <Button variant="blue" arrow href={homeServices.combo.cta.href}>
                {homeServices.combo.cta.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* Library showcase — the work is the pitch (anchor, left-aligned, light) */}
      <section className="theme-light bg-bg relative overflow-hidden py-28 md:py-[180px]">
        {/* Signature beat: the ambient glow drifts as the section scrolls */}
        <Parallax
          distance={70}
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[760px]"
        >
          <div
            className="mx-auto h-[620px] max-w-[1000px]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 40%, var(--blue-glow), transparent 65%)",
            }}
          />
        </Parallax>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8">
          {/* Left-aligned split header with the browse CTA on the right */}
          <div className="mb-[52px] flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="w-full lg:max-w-[72%]">
              <Reveal>
                <Eyebrow>{homeLibrary.eyebrow}</Eyebrow>
              </Reveal>
              <RevealText
                as="h2"
                className="mt-4 max-w-[16ch] text-balance font-display text-h2 text-primary"
                segments={[
                  { text: homeLibrary.headline.lead },
                  { text: homeLibrary.headline.highlight, gradient: true },
                ]}
              />
              <Reveal delay={0.1}>
                <p className="mt-3.5 max-w-[560px] text-base text-secondary md:text-lg">
                  {homeLibrary.description}
                </p>
              </Reveal>
            </div>
            <Reveal>
              <Button variant="ghost" arrow href={homeLibrary.cta.href}>
                {homeLibrary.cta.label}
              </Button>
            </Reveal>
          </div>

          {/* Featured bento: the flagship reel leads, supported by the rest */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((video, i) => (
              <Reveal
                key={video.id}
                delay={(i % 3) * 0.08}
                className={`h-full ${i === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
              >
                <VideoCard
                  video={video}
                  defaultOpen={video.id === "answering-service-247"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof: by the numbers */}
      <StatBand stats={homeStats} eyebrow="By the numbers" />

      {/* Why us (bento) — left header with a CTA on the right */}
      <SectionWrapper
        align="left"
        eyebrow={homeWhy.eyebrow}
        heading={homeWhy.heading}
        headingHighlight={homeWhy.headingHighlight}
        description={homeWhy.description}
        cta={{ label: "Browse videos", href: "/premade-videos" }}
        className="theme-light bg-bg py-24 md:py-36"
      >
        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          itemClassName="h-full"
        >
          {homeWhy.items.map((f, i) => (
            <WhyCard
              key={f.title}
              icon={f.icon}
              title={f.title}
              body={f.body}
              accent={WHY_ACCENTS[i % WHY_ACCENTS.length]}
            />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Proof: testimonials (global) */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection
        eyebrow={homeFaqs.eyebrow}
        heading={homeFaqs.heading}
        headingHighlight={homeFaqs.headingHighlight}
        items={homeFaqs.items}
        className="theme-light bg-bg"
      />

      {/* Offer */}
      <CtaBand {...homeFinalCta} />
    </>
  );
}
