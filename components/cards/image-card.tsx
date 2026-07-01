import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageCardProps {
  title: string;
  body: string;
  /** Real image in /public; when absent a placeholder shows the hint. */
  image?: string;
  /** One-line note describing the image to drop in here (placeholder guide). */
  imageHint?: string;
  className?: string;
}

/**
 * Media-led card: a 16:10 image on top, title + body below. Until a real image
 * lands it shows a labelled placeholder so it is clear what art belongs there.
 */
export function ImageCard({
  title,
  body,
  image,
  imageHint,
  className,
}: ImageCardProps) {
  return (
    <div
      className={cn(
        "card-surface group flex h-full flex-col overflow-hidden rounded-2xl border border-line transition-all duration-200 hover:-translate-y-[3px] hover:border-line-strong",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element -- art asset
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col items-center justify-center gap-2 px-5 text-center"
            style={{
              background:
                "linear-gradient(140deg, var(--surface-3), var(--surface-2))",
            }}
          >
            <ImageIcon className="h-6 w-6 text-tertiary" />
            {imageHint && (
              <span className="text-xs leading-snug text-secondary">
                {imageHint}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[17px] font-bold tracking-[-0.3px] text-primary">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-secondary">
          {body}
        </p>
      </div>
    </div>
  );
}
