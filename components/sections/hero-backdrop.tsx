import { cn } from "@/lib/utils";

const EDGE_MASK =
  "radial-gradient(ellipse 80% 70% at 50% 18%, #000 30%, transparent 85%)";

const GRID_LINES =
  "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)";

// Vertical lights (grid-aligned x = multiples of 64).
const VBEAMS = [
  { left: 192, duration: 5, delay: 0 },
  { left: 512, duration: 6.5, delay: 1.6 },
  { left: 768, duration: 5.6, delay: 0.8 },
  { left: 1088, duration: 7, delay: 2.4 },
];

// Horizontal lights (grid-aligned y = multiples of 64), some reversed (R to L).
const HBEAMS = [
  { top: 128, duration: 6, delay: 0.5, reverse: false },
  { top: 256, duration: 7.5, delay: 2, reverse: true },
  { top: 448, duration: 6.8, delay: 1.1, reverse: false },
];

// Star sparks at intersections where the beams cross.
const SPARKS = [
  { left: 192, top: 128, duration: 3.4, delay: 1.2 },
  { left: 512, top: 256, duration: 4.2, delay: 2.6 },
  { left: 768, top: 448, duration: 3.8, delay: 0.9 },
  { left: 1088, top: 128, duration: 4.6, delay: 3.4 },
];

/**
 * Shared hero background: a top gradient wash, a faint grid, and glow lights
 * running along the grid lines (vertical + horizontal) that spark where they
 * cross. Pure CSS, decorative, reduced-motion safe (beams hidden when reduced).
 */
export function HeroBackdrop({ className }: { className?: string }) {
  return (
    <div
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

      {/* Running glow lights + sparks */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ maskImage: EDGE_MASK, WebkitMaskImage: EDGE_MASK }}
      >
        {VBEAMS.map((b, i) => (
          <span
            key={`v${i}`}
            className="grid-beam motion-reduce:hidden"
            style={{
              left: `${b.left}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
        {HBEAMS.map((b, i) => (
          <span
            key={`h${i}`}
            className="grid-beam-h motion-reduce:hidden"
            style={{
              top: `${b.top}px`,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
              animationDirection: b.reverse ? "reverse" : "normal",
            }}
          />
        ))}
        {SPARKS.map((s, i) => (
          <span
            key={`s${i}`}
            className="grid-spark motion-reduce:hidden"
            style={{
              left: `${s.left}px`,
              top: `${s.top}px`,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
