import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Placeholder showcase card for sample work / sample edits (custom + editing
 * pages). Free-form tag, gradient thumb, title. Non-interactive until real
 * media lands. TODO: real data — swap for real posters / embeds.
 */
export function SampleCard({
  tag,
  title,
  className,
}: {
  tag: string;
  title: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "card-surface group flex h-full flex-col overflow-hidden rounded-2xl border border-line transition-all duration-200 hover:-translate-y-[3px] hover:border-line-strong",
        className,
      )}
    >
      <div
        className="relative aspect-video border-b border-line"
        style={{ background: "linear-gradient(140deg, #16203a, #0e1626)" }}
      >
        <span className="absolute left-2.5 top-2.5 rounded-lg bg-blue px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.5px] text-white">
          {tag}
        </span>
        <span className="absolute left-1/2 top-1/2 flex h-[46px] w-[46px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue/90 text-white shadow-lg transition-transform duration-200 group-hover:scale-110">
          <Play className="h-[18px] w-[18px] translate-x-px fill-current" />
        </span>
      </div>
      <figcaption className="p-4">
        <h3 className="font-display text-base font-bold tracking-[-0.3px] text-primary">
          {title}
        </h3>
      </figcaption>
    </figure>
  );
}
