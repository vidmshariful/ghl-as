import type { Metadata } from "next";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Stagger } from "@/components/ui/stagger";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { FeatureCard } from "@/components/cards/feature-card";
import { SampleCard } from "@/components/cards/sample-card";
import { FaqItem } from "@/components/cards/faq-item";

import {
  customHero,
  customWhoFor,
  customWhatWeProduce,
  customProcess,
  customSamples,
  customDifference,
  customFaqs,
  customFinalCta,
} from "@/content/custom";

export const metadata: Metadata = {
  title: "Custom Video Production · GHL Animation Studios",
  description:
    "Bespoke video for your HighLevel SaaS, scripted and animated around your brand. Custom scope, custom quote.",
};

export default function CustomVideoProductionPage() {
  return (
    <>
      <PageHero
        eyebrow={customHero.eyebrow}
        headline={customHero.headline}
        subhead={customHero.subhead}
        ctas={customHero.ctas}
        micro={customHero.micro}
      />

      {/* Who it is for */}
      <SectionWrapper
        eyebrow={customWhoFor.eyebrow}
        heading={customWhoFor.heading}
        description={customWhoFor.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {customWhoFor.cards.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* What we produce */}
      <SectionWrapper
        eyebrow={customWhatWeProduce.eyebrow}
        heading={customWhatWeProduce.heading}
        description={customWhatWeProduce.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="h-full"
        >
          {customWhatWeProduce.items.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper
        eyebrow={customProcess.eyebrow}
        heading={customProcess.heading}
        description={customProcess.description}
      >
        <ProcessSteps steps={customProcess.steps} columns={4} />
      </SectionWrapper>

      {/* Sample work */}
      <SectionWrapper
        eyebrow={customSamples.eyebrow}
        heading={customSamples.heading}
        description={customSamples.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          itemClassName="h-full"
        >
          {customSamples.items.map((s, i) => (
            <SampleCard key={i} tag={s.tag} title={s.title} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* The difference */}
      <SectionWrapper
        eyebrow={customDifference.eyebrow}
        heading={customDifference.heading}
        description={customDifference.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {customDifference.cards.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper eyebrow={customFaqs.eyebrow} heading={customFaqs.heading}>
        <Stagger className="mx-auto flex max-w-[760px] flex-col gap-2.5">
          {customFaqs.items.map((f) => (
            <FaqItem key={f.question} {...f} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Final CTA */}
      <CtaBand {...customFinalCta} />
    </>
  );
}
