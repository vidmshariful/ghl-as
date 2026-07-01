import type { Metadata } from "next";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Stagger } from "@/components/ui/stagger";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessStack } from "@/components/sections/process-stack";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { ImageCard } from "@/components/cards/image-card";
import { PriceCard } from "@/components/cards/price-card";
import { SampleCard } from "@/components/cards/sample-card";
import { QuoteForm } from "@/components/sections/quote-form";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";

import {
  customHero,
  customWhoFor,
  customPillars,
  customProcess,
  customPricing,
  customSamples,
  customDifference,
  customQuote,
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
        className="theme-light bg-bg"
      >
        <FeatureGrid items={customWhoFor.cards} columns={3} />
      </SectionWrapper>

      {/* What goes into every video (pillars) */}
      <SectionWrapper
        eyebrow={customPillars.eyebrow}
        heading={customPillars.heading}
        description={customPillars.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {customPillars.items.map((p) => (
            <ImageCard key={p.title} {...p} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* How we make your video (scroll-stack) */}
      <SectionWrapper
        eyebrow={customProcess.eyebrow}
        heading={customProcess.heading}
        description={customProcess.description}
        className="theme-light bg-bg"
      >
        <ProcessStack steps={customProcess.steps} />
      </SectionWrapper>

      {/* Pricing */}
      <SectionWrapper
        eyebrow={customPricing.eyebrow}
        heading={customPricing.heading}
        description={customPricing.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="h-full"
        >
          {customPricing.tiers.map((t) => (
            <PriceCard key={t.type} {...t} cta={customPricing.cta} />
          ))}
        </Stagger>
        <p className="mt-8 text-center text-sm text-tertiary">
          {customPricing.micro}
        </p>
      </SectionWrapper>

      {/* Sample work */}
      <SectionWrapper
        eyebrow={customSamples.eyebrow}
        heading={customSamples.heading}
        description={customSamples.description}
        className="theme-light bg-bg"
      >
        <Stagger
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
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
        <FeatureGrid items={customDifference.cards} columns={3} />
      </SectionWrapper>

      {/* Request a quote */}
      <SectionWrapper
        id="quote"
        eyebrow={customQuote.eyebrow}
        heading={customQuote.heading}
        description={customQuote.description}
        className="theme-light bg-bg scroll-mt-24"
      >
        <div className="mx-auto max-w-[720px]">
          <QuoteForm />
        </div>
      </SectionWrapper>

      {/* Social proof (global) */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection
        eyebrow={customFaqs.eyebrow}
        heading={customFaqs.heading}
        items={customFaqs.items}
        className="theme-light bg-bg"
      />

      {/* Final CTA */}
      <CtaBand {...customFinalCta} />
    </>
  );
}
