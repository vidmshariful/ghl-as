import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StatStrip, type StatItem } from "@/components/cards/stat-strip";

/**
 * Full-bleed proof band: a blue glow behind count-up stats on a dark surface.
 * Shared by the home, our-work, and video-editing pages. Pass an optional
 * `eyebrow` to show a centered label above the numbers.
 */
export function StatBand({
  stats,
  eyebrow,
}: {
  stats: StatItem[];
  eyebrow?: string;
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface-1 py-28 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[260px]"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 0%, var(--blue-glow), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1200px] px-6 md:px-8">
        {eyebrow && (
          <Reveal className="mb-16 text-center">
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
        )}
        <StatStrip stats={stats} />
      </div>
    </section>
  );
}
