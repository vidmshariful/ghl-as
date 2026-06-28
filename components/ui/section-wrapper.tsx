import * as React from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  /** Optional gradient word appended to a string heading. */
  headingHighlight?: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}

/**
 * Structural section: vertical rhythm + 1200px centered container, with an
 * optional header. String headings get the masked RevealText animation and the
 * art-directed text-h2 scale; eyebrow and description reveal alongside.
 */
export function SectionWrapper({
  id,
  eyebrow,
  heading,
  headingHighlight,
  description,
  align = "left",
  className,
  containerClassName,
  children,
}: SectionWrapperProps) {
  const center = align === "center";
  const hasHeader = Boolean(eyebrow || heading || description);

  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-[1200px] px-6 md:px-8",
          containerClassName,
        )}
      >
        {hasHeader && (
          <div className={cn("mb-12", center && "text-center")}>
            {eyebrow && (
              <Reveal>
                <Eyebrow>{eyebrow}</Eyebrow>
              </Reveal>
            )}
            {heading &&
              (typeof heading === "string" ? (
                <RevealText
                  as="h2"
                  className={cn(
                    "font-display text-h2",
                    eyebrow && "mt-4",
                    center ? "mx-auto max-w-[20ch]" : "max-w-[24ch]",
                  )}
                  segments={[
                    { text: heading },
                    ...(headingHighlight
                      ? [{ text: ` ${headingHighlight}`, gradient: true }]
                      : []),
                  ]}
                />
              ) : (
                <h2
                  className={cn(
                    "font-display text-h2",
                    eyebrow && "mt-4",
                    center ? "mx-auto max-w-[20ch]" : "max-w-[24ch]",
                  )}
                >
                  {heading}
                </h2>
              ))}
            {description && (
              <Reveal delay={0.1}>
                <p
                  className={cn(
                    "mt-5 max-w-[600px] text-base text-secondary md:text-lg",
                    center && "mx-auto",
                  )}
                >
                  {description}
                </p>
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
