"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, ChevronDown, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { VideoModal } from "@/components/ui/video-modal";
import { siteConfig } from "@/content/site";
import type { Video } from "@/content/videos";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * The revenue centerpiece. Poster + muted preview loop by default; the play
 * button opens a popup player (see before you buy). For library (buy) cards the
 * popup includes a Buy now line; showcase cards omit it. Blue category tag,
 * price, "What's included" toggle, and a Buy now button on the card.
 */
export function VideoCard({
  video,
  showcase = false,
}: {
  video: Video;
  /** Showcase mode (Our Work): thumb + title only, no price / included / buy. */
  showcase?: boolean;
}) {
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const rootRef = React.useRef<HTMLElement>(null);

  const orderHref = video.orderUrl ?? siteConfig.orderUrl;
  const soon = video.comingSoon;

  const onMove = (e: React.MouseEvent) => {
    const el = rootRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      ref={rootRef}
      onMouseMove={reduce ? undefined : onMove}
      className="card-surface group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line transition-all duration-200 hover:-translate-y-[5px] hover:border-blue hover:shadow-[0_14px_40px_rgba(0,0,0,0.45),0_0_30px_var(--blue-glow)]"
    >
      {/* Cursor glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-30 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), var(--blue-soft), transparent 65%)",
        }}
      />

      {/* Thumbnail */}
      <div className="relative aspect-video border-b border-line">
        {soon ? (
          <div className="absolute inset-0">
            <span
              aria-hidden
              className="absolute inset-0"
              style={{ background: "linear-gradient(140deg, #16203a, #0e1626)" }}
            />
            <span className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-gold/40 bg-surface-1/85 px-4 py-2 text-xs font-semibold text-primary backdrop-blur-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Launching this month
            </span>
          </div>
        ) : (
          <button
            type="button"
            aria-label={`Play ${video.title}`}
            onClick={() => setOpen(true)}
            className="absolute inset-0 h-full w-full"
          >
            {video.poster ? (
              <Image
                src={video.poster}
                alt={video.title}
                fill
                sizes="(max-width: 640px) 100vw, 360px"
                className="object-cover"
              />
            ) : (
              <span
                aria-hidden
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(140deg, #16203a, #0e1626)",
                }}
              />
            )}

            {video.previewSrc && !reduce && (
              <video
                src={video.previewSrc}
                poster={video.poster}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}

            <span className="absolute left-1/2 top-1/2 z-10 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue/90 text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
              <Play className="h-[18px] w-[18px] translate-x-px fill-current" />
            </span>
          </button>
        )}

        <span className="absolute left-2.5 top-2.5 z-20 rounded-lg bg-blue px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.5px] text-white">
          {video.category}
        </span>
      </div>

      {/* Body */}
      <div className="relative z-20 flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-bold tracking-[-0.3px] text-primary">
          {video.title}
        </h3>

        {soon ? (
          <>
            <p className="mt-1 text-[12.5px] text-secondary">{video.category}</p>
            <div className="mt-auto pt-4">
              <span className="flex w-full items-center justify-center gap-2 rounded-lg border border-line bg-surface-2/60 px-4 py-3 text-[13px] font-semibold text-secondary">
                <Clock className="h-4 w-4 text-gold" />
                Launching this month
              </span>
            </div>
          </>
        ) : showcase ? (
          <p className="mt-1 text-[12.5px] text-secondary">{video.category}</p>
        ) : (
          <>
            <div className="mt-1.5 flex items-baseline gap-2">
              <span className="font-display text-xl font-extrabold tracking-[-0.5px] text-primary">
                ${video.price.toLocaleString()}
              </span>
              <span className="text-xs text-secondary">one-time</span>
            </div>

            <div className="mt-3 border-t border-line">
              <button
                type="button"
                aria-expanded={expanded}
                onClick={() => setExpanded((o) => !o)}
                className="flex w-full items-center justify-between pt-3 text-[13px] font-semibold text-primary"
              >
                What&apos;s included
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 text-blue transition-transform duration-200",
                    expanded && "rotate-180",
                  )}
                />
              </button>

              {reduce ? (
                expanded && <IncludedList items={video.included} />
              ) : (
                <AnimatePresence initial={false}>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <IncludedList items={video.included} />
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>

            <div className="mt-auto pt-4">
              <Button variant="blue" arrow href={orderHref} className="w-full">
                Buy now
              </Button>
            </div>
          </>
        )}
      </div>

      {video.embedSrc && (
        <VideoModal
          open={open}
          onClose={() => setOpen(false)}
          src={video.embedSrc}
          title={video.title}
          buy={showcase ? undefined : { price: video.price, href: orderHref }}
        />
      )}
    </article>
  );
}

function IncludedList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5 pb-1 pt-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-[12.5px] text-secondary"
        >
          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue" />
          {item}
        </li>
      ))}
    </ul>
  );
}
