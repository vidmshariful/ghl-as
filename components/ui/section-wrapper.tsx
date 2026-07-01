import * as React from "react";
import { cn } from "@/lib/utils";
import { toSegments } from "@/lib/segments";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";

interface SectionWrapperProps {
  id?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  /** Gradient word(s) appended to a string heading. */
  headingHighlight?: string;
  description?: React.ReactNode;
  align?: "left" | "center";
  /** When set with align="left", renders a button on the right of the header. */
  cta?: { label: string; href: string; variant?: "blue" | "ghost" };
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
}

/**
 * Structural section: consistent vertical rhythm + 1200px container, with a
 * header that is either centered, left-aligned, or left-aligned with a CTA
 * button on the right. The heading uses the masked RevealText animation, a
 * gradient highlight, and balanced wrapping; heading and subhead share one
 * ~60% width so they line up.
 */
export function SectionWrapper({
  id,
  eyebrow,
  heading,
  headingHighlight,
  description,
  align = "left",
  cta,
  className,
  containerClassName,
  children,
}: SectionWrapperProps) {
  const center = align === "center";
  const hasHeader = Boolean(eyebrow || heading || description);
  const split = Boolean(cta) && !center;

  // One section-heading scale everywhere (text-h2), split header or not.
  // text-primary so the heading re-resolves per section (dark vs light).
  const headingClass = "font-display text-h2 text-balance text-primary";

  const headerInner = (
    <>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      {heading &&
        (typeof heading === "string" ? (
          <RevealText
            as="h2"
            className={cn(headingClass, eyebrow && "mt-4")}
            segments={toSegments(heading, headingHighlight)}
          />
        ) : (
          <h2 className={cn(headingClass, eyebrow && "mt-4")}>{heading}</h2>
        ))}
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-3.5 max-w-[620px] text-base text-secondary md:text-lg",
              center && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </>
  );

  return (
    <section id={id} className={cn("py-20 md:py-32", className)}>
      <div
        className={cn(
          "mx-auto w-full max-w-[1200px] px-6 md:px-8",
          containerClassName,
        )}
      >
        {hasHeader &&
          (split ? (
            <div className="mb-[52px] flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="w-full lg:max-w-[72%]">{headerInner}</div>
              <Reveal>
                <Button
                  variant={cta?.variant ?? "ghost"}
                  arrow
                  href={cta!.href}
                >
                  {cta!.label}
                </Button>
              </Reveal>
            </div>
          ) : (
            <div className={cn("mb-[52px]", center && "mx-auto text-center")}>
              {headerInner}
            </div>
          ))}
        {children}
      </div>
    </section>
  );
}
