"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { VideoModal } from "@/components/ui/video-modal";
import { HeroBackdrop } from "@/components/sections/hero-backdrop";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface HeroCta {
  label: string;
  href: string;
  variant?: "blue" | "ghost" | "gold" | "text";
}

interface HeroProps {
  eyebrow: string;
  headline: { lead: string; highlight: string; trail?: string };
  subhead: string;
  ctas: HeroCta[];
  videoSrc?: string;
}

export function HeroCtas({ ctas }: { ctas: HeroCta[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {ctas.map((cta) =>
        cta.variant === "text" ? (
          <Link
            key={cta.label}
            href={cta.href}
            className="group inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary transition-colors hover:text-blue"
          >
            {cta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        ) : (
          <Button
            key={cta.label}
            variant={cta.variant ?? "blue"}
            arrow
            href={cta.href}
          >
            {cta.label}
          </Button>
        ),
      )}
    </div>
  );
}

/**
 * Centered signature hero: grid backdrop with a cursor-interactive glow, masked
 * word-reveal headline (two lines), a subhead matching the headline box width, a
 * text-plus-button CTA, and the reel below with a play-to-popup button.
 */
export function Hero({ eyebrow, headline, subhead, ctas, videoSrc }: HeroProps) {
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState(false);

  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-36">
      <HeroBackdrop />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 text-center md:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>

        {/* Full-width heading so this copy lands on two lines */}
        <RevealText
          as="h1"
          delay={0.1}
          stagger={0.05}
          className="mt-6 text-balance font-display text-hero"
          segments={[
            { text: headline.lead },
            { text: headline.highlight, gradient: true },
            ...(headline.trail ? [{ text: headline.trail }] : []),
          ]}
        />

        <Reveal delay={0.18}>
          <p className="mt-6 text-lg text-secondary">{subhead}</p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9">
            <HeroCtas ctas={ctas} />
          </div>
        </Reveal>

        {/* Reel */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative mx-auto mt-16 w-full max-w-[880px] lg:mt-20"
        >
          <div
            aria-hidden
            className="absolute -inset-8 -z-10 rounded-[40px]"
            style={{
              background:
                "radial-gradient(55% 60% at 50% 50%, var(--blue-glow), transparent 70%)",
              filter: "blur(28px)",
            }}
          />

          <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface-2 shadow-[0_36px_100px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.14)]">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Play video"
              className="group relative block aspect-video w-full"
            >
              {videoSrc ? (
                <video
                  src={videoSrc}
                  muted
                  loop
                  playsInline
                  autoPlay={!reduce}
                  preload="metadata"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <span
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(140deg, #16203a, #0e1626)",
                  }}
                />
              )}
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.35))",
                }}
              />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue/90 text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 fill-current" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {videoSrc && (
        <VideoModal open={open} onClose={() => setOpen(false)} src={videoSrc} />
      )}
    </section>
  );
}
