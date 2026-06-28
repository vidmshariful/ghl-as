"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const EDGE_MASK =
  "radial-gradient(ellipse 80% 70% at 50% 18%, #000 30%, transparent 85%)";

const GRID_LINES =
  "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)";

const GRID_MASK =
  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)";

// Grid-aligned (multiples of 64px) so the beams ride the vertical grid lines.
const BEAMS = [
  { left: 192, duration: 5, delay: 0 },
  { left: 512, duration: 6.5, delay: 1.6 },
  { left: 768, duration: 5.6, delay: 0.8 },
  { left: 1088, duration: 7, delay: 2.4 },
];

/**
 * Shared hero background: a top gradient wash (so the hero is not too dark), a
 * faint grid, glow lights running down the grid lines, and a cursor-interactive
 * glow that lights the lines near the pointer. Interactivity attaches to the
 * parent section so the host hero can stay a Server Component.
 */
export function HeroBackdrop({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--hx", `${e.clientX - r.left}px`);
      el.style.setProperty("--hy", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* Top gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(70% 55% at 50% -8%, var(--blue-glow), transparent 60%)",
        }}
      />

      {/* Base grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: GRID_LINES,
          backgroundSize: "64px 64px",
          maskImage: EDGE_MASK,
          WebkitMaskImage: EDGE_MASK,
        }}
      />

      {/* Running glow lights along grid lines */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
      >
        {BEAMS.map((b, i) => (
          <span
            key={i}
            className="grid-beam motion-reduce:hidden"
            style={{
              left: `${b.left}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Cursor-lit grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(320px circle at var(--hx, 50%) var(--hy, 28%), var(--blue), transparent 65%)",
          maskImage: GRID_MASK,
          WebkitMaskImage: GRID_MASK,
          maskSize: "64px 64px",
          WebkitMaskSize: "64px 64px",
        }}
      />

      {/* Soft ambient pool following the cursor */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(360px circle at var(--hx, 50%) var(--hy, 28%), var(--blue-soft), transparent 70%)",
        }}
      />
    </div>
  );
}
