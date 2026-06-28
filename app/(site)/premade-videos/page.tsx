import type { Metadata } from "next";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Stagger } from "@/components/ui/stagger";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { LibraryGrid } from "@/components/sections/library-grid";
import { FeatureCard } from "@/components/cards/feature-card";
import { Testimonial } from "@/components/cards/testimonial";
import { FaqItem } from "@/components/cards/faq-item";

import { videos } from "@/content/videos";
import {
  premadeHero,
  premadeIncludes,
  premadeLibrary,
  premadeProcess,
  premadeVsCustom,
  premadeTestimonials,
  premadeFaqs,
  premadeFinalCta,
} from "@/content/premade";

export const metadata: Metadata = {
  title: "Premade Videos · GHL Animation Studios",
  description:
    "Branded explainer, demo, ad, and feature videos for your HighLevel SaaS. Preview the exact video, then make it yours. From $495.",
};

export default function PremadeVideosPage() {
  return (
    <>
      <PageHero
        eyebrow={premadeHero.eyebrow}
        headline={premadeHero.headline}
        subhead={premadeHero.subhead}
        ctas={premadeHero.ctas}
        micro={premadeHero.micro}
      />

      {/* What you get */}
      <SectionWrapper
        eyebrow={premadeIncludes.eyebrow}
        heading={premadeIncludes.heading}
        description={premadeIncludes.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="h-full"
        >
          {premadeIncludes.items.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Library */}
      <SectionWrapper
        eyebrow={premadeLibrary.eyebrow}
        heading={premadeLibrary.heading}
        description={premadeLibrary.description}
      >
        <LibraryGrid videos={videos} />
        {/* TODO: real data — catalog and per-product order URLs from Extendly. */}
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper
        eyebrow={premadeProcess.eyebrow}
        heading={premadeProcess.heading}
        description={premadeProcess.description}
      >
        <ProcessSteps steps={premadeProcess.steps} columns={3} />
      </SectionWrapper>

      {/* Why premade */}
      <SectionWrapper
        eyebrow={premadeVsCustom.eyebrow}
        heading={premadeVsCustom.heading}
        description={premadeVsCustom.description}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {premadeVsCustom.cards.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Social proof */}
      <SectionWrapper
        eyebrow={premadeTestimonials.eyebrow}
        heading={premadeTestimonials.heading}
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          itemClassName="h-full"
        >
          {premadeTestimonials.items.map((t, i) => (
            <Testimonial key={i} {...t} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper eyebrow={premadeFaqs.eyebrow} heading={premadeFaqs.heading}>
        <Stagger className="mx-auto flex max-w-[760px] flex-col gap-2.5">
          {premadeFaqs.items.map((f) => (
            <FaqItem key={f.question} {...f} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Final CTA */}
      <CtaBand {...premadeFinalCta} />
    </>
  );
}
