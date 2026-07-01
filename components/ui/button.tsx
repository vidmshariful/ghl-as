import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "blue" | "ghost" | "gold";
type Size = "md" | "sm";

const base =
  "group relative isolate inline-flex items-center justify-center overflow-hidden whitespace-nowrap rounded-lg font-display font-semibold cursor-pointer transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, { pad: string; gap: string }> = {
  md: { pad: "text-[15px] px-7 py-[17px]", gap: "gap-[9px]" },
  sm: { pad: "text-[13.5px] px-[22px] py-[13px]", gap: "gap-[7px]" },
};

const variants: Record<Variant, string> = {
  blue: "text-white shadow-[0_8px_26px_var(--blue-glow)] hover:-translate-y-px hover:brightness-110",
  ghost: "border border-line-strong text-primary bg-transparent hover:bg-surface-2",
  gold: "bg-gold-btn text-ink hover:-translate-y-px hover:brightness-105",
};

function Arrow({ size }: { size: Size }) {
  return (
    <ArrowUpRight
      aria-hidden
      className={cn(
        "transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        size === "md" ? "h-[18px] w-[18px]" : "h-4 w-4",
      )}
    />
  );
}

/** Diagonal light sweep on hover. CSS-only, GPU-friendly, off under reduced motion. */
function Sheen() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 -translate-x-[150%] skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[150%] motion-reduce:hidden"
    />
  );
}

interface BaseProps {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

type AnchorProps = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonElProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | ButtonElProps;

/**
 * The one Button used everywhere. Renders a <button>, an internal Next <Link>,
 * or an external <a> based on `href`. External checkout (order subdomain) links
 * pass an absolute href and render a plain anchor.
 */
export function Button({
  variant = "blue",
  size = "md",
  arrow = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, sizes[size].pad, variants[variant], className);
  const style =
    variant === "blue" ? { backgroundImage: "var(--grad-btn)" } : undefined;
  const content = (
    <>
      {/* Ghost is transparent, so no sheen there. */}
      {variant !== "ghost" && <Sheen />}
      <span
        className={cn("relative z-10 inline-flex items-center", sizes[size].gap)}
      >
        {children}
        {arrow && <Arrow size={size} />}
      </span>
    </>
  );

  const href = (rest as { href?: string }).href;

  if (typeof href === "string") {
    const { href: _omit, ...anchorRest } =
      rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    void _omit;
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a href={href} className={classes} style={style} {...anchorRest}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} style={style} {...anchorRest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      style={style}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
