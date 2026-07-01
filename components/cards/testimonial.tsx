import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialData {
  quote: string;
  name: string;
  role?: string;
  /** Local avatar in /public. Falls back to initials. */
  avatar?: string;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/** Quote card with gold stars and an author. Authority is Extendly clients only. */
export function Testimonial({
  quote,
  name,
  role,
  avatar,
  className,
}: TestimonialData & { className?: string }) {
  return (
    <figure
      className={cn(
        "card-surface flex h-full flex-col rounded-2xl border border-line p-6 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:border-line-strong",
        className,
      )}
    >
      <div className="flex gap-1" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" />
        ))}
      </div>

      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-secondary">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden
            className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold text-white"
            style={{ background: "var(--grad-btn)" }}
          >
            {initials(name)}
          </span>
        )}
        <div>
          <div className="text-sm font-semibold text-primary">{name}</div>
          {role && <div className="text-[12.5px] text-secondary">{role}</div>}
        </div>
      </figcaption>
    </figure>
  );
}
