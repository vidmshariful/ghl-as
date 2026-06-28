import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  /** Optional. With an icon the card is taller and text anchors to the bottom. */
  icon?: LucideIcon;
  title: string;
  body: string;
  /** If set, the whole card becomes a link (used for the home service cards). */
  href?: string;
  className?: string;
}

/**
 * Feature card. With an icon: blue-gradient tile at top, title and body anchored
 * to the bottom so there is a generous gap (the signature look). Without an icon:
 * a compact title + body card (used for problem / comparison grids). With an href
 * the whole card is a link.
 */
export function FeatureCard({
  icon: Icon,
  title,
  body,
  href,
  className,
}: FeatureCardProps) {
  const classes = cn(
    "card-surface group flex h-full flex-col rounded-2xl border border-line p-5 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]",
    href ? "hover:border-blue" : "hover:border-line-strong",
    Icon && "min-h-[210px]",
    className,
  );

  const inner = (
    <>
      {Icon && (
        <div
          className="flex h-11 w-11 items-center justify-center rounded-[10px] text-white"
          style={{ background: "var(--grad-btn)" }}
        >
          <Icon className="h-[18px] w-[18px]" />
        </div>
      )}
      <div className={cn(Icon && "mt-auto")}>
        <h3 className="font-display text-base font-bold tracking-[-0.3px] text-primary">
          {title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-secondary">{body}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }
  return <div className={classes}>{inner}</div>;
}
