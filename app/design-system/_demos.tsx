"use client";

import * as React from "react";
import { Nav } from "@/components/layout/nav";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { Hero } from "@/components/sections/hero";
import { VideoCard } from "@/components/cards/video-card";
import { LibraryGrid } from "@/components/sections/library-grid";
import { Button } from "@/components/ui/button";
import { homeHero } from "@/content/home";
import { videos } from "@/content/videos";

/** Nav previews: transparent (top of page) and glass (scrolled). */
export function NavDemo() {
  return (
    <div className="space-y-4">
      <div
        className="relative overflow-hidden rounded-xl border border-line"
        style={{
          background:
            "radial-gradient(80% 120% at 50% -20%, var(--blue-soft), transparent 70%), var(--surface-2)",
        }}
      >
        <Nav embedded />
        <div className="px-6 pb-3 pt-1 text-[11px] text-tertiary">
          Top of page · transparent
        </div>
      </div>
      <div className="overflow-hidden rounded-xl border border-line bg-bg">
        <Nav embedded forceGlass />
        <div className="px-6 pb-3 pt-1 text-[11px] text-tertiary">
          Scrolled · glass
        </div>
      </div>
    </div>
  );
}

/** Explicit trigger so the drawer is reviewable at any width. */
export function MobileMenuDemo() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="ghost" size="sm" onClick={() => setOpen(true)}>
        Open mobile menu
      </Button>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}

/** Full Structure C opening: transparent Nav over the hero glow. */
export function HeroDemo() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-bg">
      <Nav embedded />
      <Hero {...homeHero} />
    </div>
  );
}

/** VideoCards: muted preview loop by default; the play button opens the popup
 * player (with a Buy now line for these library cards). */
export function VideoCardDemo() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <VideoCard video={videos[0]} />
      <VideoCard video={videos[3]} />
      <VideoCard video={videos[5]} />
    </div>
  );
}

/** Library with buy cards, plus the showcase (no price/buy) variant. */
export function LibraryGridDemo() {
  return (
    <div className="space-y-8">
      <LibraryGrid videos={videos} />
      <div>
        <div className="mb-3 font-mono text-[11px] uppercase tracking-[1px] text-tertiary">
          Showcase variant (Our Work · no price/buy)
        </div>
        <LibraryGrid videos={videos} showcase />
      </div>
    </div>
  );
}
