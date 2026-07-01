import type { TextSegment } from "@/components/ui/reveal-text";

/**
 * Build heading segments for RevealText. Either an explicit trailing `highlight`
 * becomes the gradient part, or `**...**` markers anywhere in the heading mark
 * the gradient word(s). Shared by SectionWrapper and FaqSection.
 */
export function toSegments(heading: string, highlight?: string): TextSegment[] {
  if (highlight) {
    return [{ text: heading }, { text: ` ${highlight}`, gradient: true }];
  }
  return heading
    .split(/\*\*(.+?)\*\*/g)
    .map((text, i) => ({ text, gradient: i % 2 === 1 }))
    .filter((s) => s.text !== "");
}
