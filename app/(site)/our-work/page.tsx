import type { Metadata } from "next";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { LibraryGrid } from "@/components/sections/library-grid";
import { StatStrip } from "@/components/cards/stat-strip";

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
      >
        <LibraryGrid videos={videos} showcase />
      </SectionWrapper>

      {/* Results (full-bleed band) */}
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
          <StatStrip stats={workStats} />
        </div>
      </section>

      {/* Final CTA */}
      <CtaBand {...workFinalCta} />
    </>
  );
}
