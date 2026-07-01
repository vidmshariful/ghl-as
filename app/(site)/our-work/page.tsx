import type { Metadata } from "next";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { LibraryGrid } from "@/components/sections/library-grid";
import { StatBand } from "@/components/sections/stat-band";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

import { videos } from "@/content/videos";
import { workHero, workShowcase, workStats, workFinalCta } from "@/content/work";

export const metadata: Metadata = {
  title: "Our Work · GHL Animation Studios",
  description: "Real videos, real brands. See what your SaaS could look like.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow={workHero.eyebrow}
        headline={workHero.headline}
        subhead={workHero.subhead}
        ctas={workHero.ctas}
      />

      {/* Showcase */}
      <SectionWrapper
        eyebrow={workShowcase.eyebrow}
        heading={workShowcase.heading}
        description={workShowcase.description}
        className="theme-light bg-bg"
      >
        <LibraryGrid videos={videos.filter((v) => !v.comingSoon)} showcase />
      </SectionWrapper>

      {/* Results */}
      <StatBand stats={workStats} />

      {/* Social proof (global) */}
      <TestimonialsSection />

      {/* Final CTA */}
      <CtaBand {...workFinalCta} />
    </>
  );
}
