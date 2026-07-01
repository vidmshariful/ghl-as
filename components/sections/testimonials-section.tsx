import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/ui/reveal";
import { Testimonial } from "@/components/cards/testimonial";
import { testimonials } from "@/content/testimonials";

/**
 * The global testimonials section: one shared design AND one shared content
 * source ({@link testimonials}), so it is identical on every page and editing
 * the content updates all pages at once. Centered header over a bento grid —
 * the first two cards run wide, the rest are compact.
 *
 * Drop in with no props: <TestimonialsSection />
 */
export function TestimonialsSection() {
  return (
    <SectionWrapper
      align="center"
      eyebrow={testimonials.eyebrow}
      heading={testimonials.heading}
      headingHighlight={testimonials.headingHighlight}
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.items.map((t, i) => (
          <Reveal
            key={i}
            delay={(i % 4) * 0.06}
            className={`h-full ${i < 2 ? "lg:col-span-2" : ""}`}
          >
            <Testimonial {...t} className="h-full" />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
