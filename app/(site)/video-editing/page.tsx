import type { Metadata } from "next";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Stagger } from "@/components/ui/stagger";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { TierCard } from "@/components/cards/tier-card";
import { StatBand } from "@/components/sections/stat-band";
import { SampleCard } from "@/components/cards/sample-card";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";

import { editingTiers } from "@/content/editing-plans";
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
        className="theme-light bg-bg"
      >
        <FeatureGrid items={editingWhoFor.items} columns={4} />
      </SectionWrapper>

      {/* Problem */}
      <SectionWrapper
        eyebrow={editingProblem.eyebrow}
        heading={editingProblem.heading}
        description={editingProblem.intro}
      >
        <FeatureGrid items={editingProblem.cards} columns={3} />
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper
        eyebrow={editingProcess.eyebrow}
        heading={editingProcess.heading}
        description={editingProcess.description}
        className="theme-light bg-bg"
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
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
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
        cta={{ label: "See plans", href: "#plans" }}
        className="theme-light bg-bg"
      >
        <FeatureGrid items={editingIncludes.items} columns={4} />
      </SectionWrapper>

      {/* Turnaround stats */}
      <StatBand stats={editingStats} />

      {/* Sample edits */}
      <SectionWrapper
        eyebrow={editingSamples.eyebrow}
        heading={editingSamples.heading}
        description={editingSamples.description}
        className="theme-light bg-bg"
      >
        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          itemClassName="h-full"
        >
          {editingSamples.items.map((s, i) => (
            <SampleCard key={i} tag={s.tag} title={s.title} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Social proof (global) */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection
        eyebrow={editingFaqs.eyebrow}
        heading={editingFaqs.heading}
        items={editingFaqs.items}
        className="theme-light bg-bg"
      />

      {/* Final CTA */}
      <CtaBand {...editingFinalCta} />
    </>
  );
}
