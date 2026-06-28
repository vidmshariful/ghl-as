import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/content/site";

/**
 * Brand lockup. The logo PNG is transparent with a dark wordmark, so it sits on
 * a white chip to stay legible in both themes. The chip carries the animated
 * rotating blue→gold border (.tier-glow), matching the pricing tier.
 */
export function Logo({
  className,
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex", className)}
    >
      <span className="tier-glow relative inline-flex items-center overflow-hidden rounded-xl bg-white px-2.5 py-1.5">
        <Image
          src="/logo.png"
          alt={siteConfig.name}
          width={250}
          height={98}
          priority
          className="relative z-10 h-9 w-auto"
        />
      </span>
    </Link>
  );
}
