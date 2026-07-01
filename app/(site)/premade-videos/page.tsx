import type { Metadata } from "next";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { LibraryGrid } from "@/components/sections/library-grid";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";

import { videos } from "@/content/videos";
import {
  premadeHero,
  premadeIncludes,
  premadeLibrary,
  premadeProcess,
  premadeVsCustom,
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
        className="theme-light bg-bg"
      >
        <FeatureGrid items={premadeIncludes.items} columns={3} />
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
        className="theme-light bg-bg"
      >
        <ProcessSteps steps={premadeProcess.steps} columns={3} />
      </SectionWrapper>

      {/* Why premade */}
      <SectionWrapper
        eyebrow={premadeVsCustom.eyebrow}
        heading={premadeVsCustom.heading}
        description={premadeVsCustom.description}
        cta={{ label: "Book a call", href: "/book-a-call" }}
      >
        <FeatureGrid items={premadeVsCustom.cards} columns={3} />
      </SectionWrapper>

      {/* Social proof (global) */}
      <TestimonialsSection />

      {/* FAQ */}
      <FaqSection
        eyebrow={premadeFaqs.eyebrow}
        heading={premadeFaqs.heading}
        items={premadeFaqs.items}
        className="theme-light bg-bg"
      />

      {/* Final CTA */}
      <CtaBand {...premadeFinalCta} />
    </>
  );
}
