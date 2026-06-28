"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { VideoCard } from "@/components/cards/video-card";
import {
  VIDEO_CATEGORIES,
  type Video,
  type VideoCategory,
} from "@/content/videos";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Filter = "All" | VideoCategory;

/**
 * Filterable library: tab row with a sliding layoutId indicator and a card grid
 * that reflows with a layout animation on filter change. `showcase` hides
 * price/buy (Our Work). Respects prefers-reduced-motion.
 */
export function LibraryGrid({
  videos,
  showcase = false,
  className,
}: {
  videos: Video[];
  showcase?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [active, setActive] = React.useState<Filter>("All");
  const tabs: Filter[] = ["All", ...VIDEO_CATEGORIES];
  // Unique per instance so multiple grids on one page do not share the indicator.
  const indicatorId = React.useId();

  const filtered =
    active === "All" ? videos : videos.filter((v) => v.category === active);

  return (
    <div className={className}>
      {/* Filter tabs */}
      <div
        role="tablist"
        aria-label="Filter videos by type"
        className="mb-8 flex flex-wrap gap-1.5"
      >
        {tabs.map((tab) => {
          const isActive = active === tab;
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(tab)}
              className={cn(
                "relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors",
                isActive ? "text-primary" : "text-secondary hover:text-primary",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId={`library-tab-${indicatorId}`}
                  className="absolute inset-0 rounded-full border border-line-strong bg-surface-2"
                  transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
                />
              )}
              <span className="relative z-10">{tab}</span>
            </button>
          );
        })}
      </div>

      {/* Card grid */}
      <motion.div
        layout={!reduce}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((video, i) => (
            <motion.div
              key={video.id}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
              transition={{
                duration: reduce ? 0 : 0.3,
                ease: EASE,
                delay: reduce ? 0 : Math.min(i * 0.04, 0.3),
              }}
            >
              <VideoCard video={video} showcase={showcase} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
