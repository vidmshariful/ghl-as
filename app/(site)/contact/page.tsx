import type { Metadata } from "next";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ContactForm } from "@/components/sections/contact-form";

import { contactHero, contactBlock, contactFinalCta } from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact · GHL Animation Studios",
  description: "Questions, support, or anything else. We are here to help.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        size="compact"
        eyebrow={contactHero.eyebrow}
        headline={contactHero.headline}
        subhead={contactHero.subhead}
      />

      <SectionWrapper
        className="!pt-0 theme-light bg-bg"
        heading={contactBlock.heading}
        description={contactBlock.description}
      >
        <Reveal>
          <ContactForm />
          <p className="mt-6 text-sm text-secondary">
            Or email us at{" "}
            <a
              href={`mailto:${contactBlock.supportEmail}`}
              className="text-blue transition-colors hover:text-blue-hover"
            >
              {contactBlock.supportEmail}
            </a>
          </p>
          <p className="mt-2 text-xs text-tertiary">{contactBlock.micro}</p>
        </Reveal>
      </SectionWrapper>

      {/* Final CTA */}
      <CtaBand {...contactFinalCta} />
    </>
  );
}
