import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { Stagger } from "@/components/ui/stagger";
import { FaqItem, type Faq } from "@/components/cards/faq-item";
import { toSegments } from "@/lib/segments";
import { cn } from "@/lib/utils";

/**
 * The one FAQ section, shared by every page: an asymmetric block with the
 * heading + a supporting line + "Contact us" on the left and the accordion on
 * the right. Pass `className` for tone (e.g. theme-light) and an optional
 * `headingHighlight` for the gradient word.
 */
export function FaqSection({
  eyebrow,
  heading,
  headingHighlight,
  supporting = "Still have a question? We are happy to help.",
  contactHref = "/contact",
  items,
  className,
}: {
  eyebrow?: string;
  heading: string;
  headingHighlight?: string;
  supporting?: string;
  contactHref?: string;
  items: Faq[];
  className?: string;
}) {
  return (
    <section className={cn("py-24 md:py-36", className)}>
      <div className="mx-auto grid max-w-[1200px] gap-10 px-6 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          {eyebrow && (
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
          )}
          <RevealText
            as="h2"
            className="mt-4 max-w-[14ch] text-balance font-display text-h2 text-primary"
            segments={toSegments(heading, headingHighlight)}
          />
          <Reveal delay={0.1}>
            <p className="mt-3.5 max-w-[340px] text-base text-secondary">
              {supporting}
            </p>
            <div className="mt-6">
              <Button variant="ghost" arrow href={contactHref}>
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>
        <Stagger className="flex flex-col gap-3">
          {items.map((f) => (
            <FaqItem key={f.question} {...f} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
