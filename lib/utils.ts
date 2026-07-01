import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * tailwind-merge, taught about our custom display font-size tokens
 * (text-hero / text-display / text-h2 / text-stat). Without this, merging a
 * heading's `text-h2` with a `text-primary` color class would drop the size,
 * since twMerge treats both as conflicting `text-*` utilities.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["hero", "display", "h2", "stat"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
