"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Play } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CtaGroup, type CtaItem } from "@/components/ui/cta-group";
import { Reveal } from "@/components/ui/reveal";
import { RevealText } from "@/components/ui/reveal-text";
import { VideoModal, type ModalAction } from "@/components/ui/video-modal";
import { HeroBackdrop } from "@/components/sections/hero-backdrop";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface HeroProps {
  eyebrow: string;
  headline: { lead: string; highlight: string; trail?: string };
  subhead: string;
  ctas: CtaItem[];
  videoSrc?: string;
  /** "What next" CTAs shown under the video in the popup. */
  videoCtas?: ModalAction[];
}

/**
 * Centered signature hero: grid backdrop with a cursor-interactive glow, masked
 * word-reveal headline (two lines), a subhead matching the headline box width, a
 * text-plus-button CTA, and the reel below with a play-to-popup button.
 */
export function Hero({
  eyebrow,
  headline,
  subhead,
  ctas,
  videoSrc,
  videoCtas,
}: HeroProps) {
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState(false);
  const frameRef = React.useRef<HTMLDivElement>(null);

  const onTilt = (e: React.MouseEvent) => {
    const el = frameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-py * 7).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * 7).toFixed(2)}deg`);
  };

  const onLeave = () => {
    const el = frameRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-28 lg:pt-36 md:pb-[160px]">
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
          className="mt-4 text-balance font-display text-hero text-primary"
          segments={[
            { text: headline.lead },
            { text: headline.highlight, gradient: true },
            ...(headline.trail ? [{ text: headline.trail }] : []),
          ]}
        />

        <Reveal delay={0.18}>
          <p className="mt-3.5 text-lg text-secondary">{subhead}</p>
        </Reveal>

        <Reveal delay={0.24}>
          <CtaGroup ctas={ctas} className="mt-10 justify-center" />
        </Reveal>

        {/* Reel */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ perspective: "1200px" }}
          className="relative mx-auto mt-16 w-full max-w-[1100px] lg:mt-20"
        >
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-[44px]"
            style={{
              background:
                "radial-gradient(55% 60% at 50% 50%, var(--blue-glow), transparent 70%)",
              filter: "blur(32px)",
            }}
          />

          <div
            ref={frameRef}
            onMouseMove={reduce ? undefined : onTilt}
            onMouseLeave={reduce ? undefined : onLeave}
            style={{ transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
            className="tier-glow relative overflow-hidden rounded-2xl border border-transparent bg-surface-2 shadow-[0_36px_100px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.14)] transition-transform duration-200 ease-out"
          >
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
        <VideoModal
          open={open}
          onClose={() => setOpen(false)}
          src={videoSrc}
          actions={videoCtas}
        />
      )}
    </section>
  );
}
