import type { Metadata } from "next";
import { Check } from "lucide-react";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

import {
  bookHero,
  bookWhatYouGet,
  bookWhoFor,
  bookBooking,
  bookFinalCta,
} from "@/content/book";

export const metadata: Metadata = {
  title: "Book a Call · GHL Animation Studios",
  description: "A quick call to find the right video for your SaaS. No pressure.",
};

export default function BookACallPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow={bookHero.eyebrow}
        headline={bookHero.headline}
        subhead={bookHero.subhead}
      />

      {/* What you get */}
      <SectionWrapper
        eyebrow={bookWhatYouGet.eyebrow}
        heading={bookWhatYouGet.heading}
        className="theme-light bg-bg"
      >
        <FeatureGrid items={bookWhatYouGet.cards} columns={3} />
      </SectionWrapper>

      {/* Who it is for */}
      <SectionWrapper eyebrow={bookWhoFor.eyebrow} heading={bookWhoFor.heading}>
        <FeatureGrid items={bookWhoFor.cards} columns={3} />
      </SectionWrapper>

      {/* Booking block */}
      <SectionWrapper
        heading={bookBooking.heading}
        description={bookBooking.description}
        className="theme-light bg-bg"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <ul className="grid gap-3">
              {bookBooking.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2.5 text-[15px] text-primary"
                >
                  <Check className="h-4 w-4 shrink-0 text-blue" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-tertiary">{bookBooking.micro}</p>
          </Reveal>

          <Reveal delay={0.08}>
            {/* TODO: real data — calendar embed (booking widget). */}
            <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-dashed border-line-strong bg-surface-1 text-sm text-tertiary">
              Calendar embed
            </div>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* Social proof (global) */}
      <TestimonialsSection />

      {/* Final CTA */}
      <CtaBand {...bookFinalCta} />
    </>
  );
}
