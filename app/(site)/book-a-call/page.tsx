import type { Metadata } from "next";
import { Check } from "lucide-react";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Stagger } from "@/components/ui/stagger";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { FeatureCard } from "@/components/cards/feature-card";
import { Testimonial } from "@/components/cards/testimonial";

import {
  bookHero,
  bookWhatYouGet,
  bookWhoFor,
  bookBooking,
  bookTestimonial,
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
      >
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {bookWhatYouGet.cards.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Who it is for */}
      <SectionWrapper eyebrow={bookWhoFor.eyebrow} heading={bookWhoFor.heading}>
        <Stagger
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
          itemClassName="h-full"
        >
          {bookWhoFor.cards.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </Stagger>
      </SectionWrapper>

      {/* Booking block */}
      <SectionWrapper heading={bookBooking.heading} description={bookBooking.description}>
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

      {/* Light proof */}
      <SectionWrapper className="!pt-0">
        <Reveal>
          <div className="mx-auto max-w-[640px]">
            <Testimonial {...bookTestimonial} />
          </div>
        </Reveal>
      </SectionWrapper>
    </>
  );
}
