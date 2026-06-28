import type { Metadata } from "next";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Stagger } from "@/components/ui/stagger";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FeatureCard } from "@/components/cards/feature-card";
import { TierCard } from "@/components/cards/tier-card";
import { StatStrip } from "@/components/cards/stat-strip";
import { SampleCard } from "@/components/cards/sample-card";
import { FaqItem } from "@/components/cards/faq-item";

import { editingTiers } from "@/content/pricing";
import {
  editingHero,
  editingWhoFor,
  editingProblem,
  editingProcess,
  editingPlans,
  editingIncludes,
  editingStats,
  editingSamples,
  editingFaqs,
  editingFinalCta,
} from "@/content/editing";

export const metadata: Metadata = {
  title: "Video Editing · GHL Animation Studios",
  description:
    "Editing for HighLevel creators on a simple monthly subscription. No contracts, unlimited revisions, fast turnaround.",
};

export default function VideoEditingPage() {
  return (
    <>
      <PageHero
        eyebrow={editingHero.eyebrow}
        headline={editingHero.headline}
        subhead={editingHero.subhead}
        ctas={editingHero.ctas}
        micro={editingHero.micro}
      />

      {/* Who it is for */}
      <SectionWrapper
        eyebrow={editingWhoFor.eyebrow}
        heading={editingWhoFor.heading}
        description={editingWhoFor.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="h-full"
        >
          {editingWhoFor.items.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Problem */}
      <SectionWrapper
        eyebrow={editingProblem.eyebrow}
        heading={editingProblem.heading}
        description={editingProblem.intro}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {editingProblem.cards.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper
        eyebrow={editingProcess.eyebrow}
        heading={editingProcess.heading}
        description={editingProcess.description}
      >
        <ProcessSteps steps={editingProcess.steps} columns={3} />
      </SectionWrapper>

      {/* Plans */}
      <SectionWrapper
        id="plans"
        eyebrow={editingPlans.eyebrow}
        heading={editingPlans.heading}
        description={editingPlans.description}
        className="scroll-mt-24"
      >
        <Stagger
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          itemClassName="h-full"
        >
          {editingTiers.map((tier) => (
            <TierCard key={tier.name} tier={tier} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Every plan includes */}
      <SectionWrapper
        eyebrow={editingIncludes.eyebrow}
        heading={editingIncludes.heading}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="h-full"
        >
          {editingIncludes.items.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Turnaround stats (full-bleed band) */}
      <section className="relative overflow-hidden border-y border-line bg-surface-1 py-20 md:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-[360px]"
          style={{
            background:
              "radial-gradient(50% 70% at 50% 0%, var(--blue-glow), transparent 65%)",
          }}
        />
        <div className="relative mx-auto max-w-[1000px] px-6 md:px-8">
          <StatStrip stats={editingStats} />
        </div>
      </section>

      {/* Sample edits */}
      <SectionWrapper
        eyebrow={editingSamples.eyebrow}
        heading={editingSamples.heading}
        description={editingSamples.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          itemClassName="h-full"
        >
          {editingSamples.items.map((s, i) => (
            <SampleCard key={i} tag={s.tag} title={s.title} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper eyebrow={editingFaqs.eyebrow} heading={editingFaqs.heading}>
        <Stagger className="mx-auto flex max-w-[760px] flex-col gap-2.5">
          {editingFaqs.items.map((f) => (
            <FaqItem key={f.question} {...f} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Final CTA */}
      <CtaBand {...editingFinalCta} />
    </>
  );
}
