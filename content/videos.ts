/**
 * The premade video library.
 * TODO: real data — posters, per-product order URLs, and the three videos still
 * marked `comingSoon` (media lands this month).
 */

export type VideoCategory = "Promotional" | "Explainer" | "Demo";

export const VIDEO_CATEGORIES: VideoCategory[] = [
  "Promotional",
  "Explainer",
  "Demo",
];

export interface Video {
  id: string;
  title: string;
  category: VideoCategory;
  price: number;
  /** Still frame. Local file in /public/posters. */
  poster?: string;
  /** Muted preview loop, shown by default. */
  previewSrc?: string;
  /** The real video, loaded only on click. */
  embedSrc?: string;
  embedType?: "video" | "iframe";
  /** Per-product checkout URL; falls back to siteConfig.orderUrl. */
  orderUrl?: string;
  /** Media not ready yet — the card shows a "Launching this month" state. */
  comingSoon?: boolean;
  included: string[];
}

export const PREMADE_PRICE = 495;

const CDN = "https://assets.cdn.filesafe.space/Ju4F0bHjSGPG09M3c5vt/media";

/** What every branded video includes. */
export const INCLUDED = [
  "Exact video branded to your company logo",
  "Voiceover changed to announce your company name",
  "On-demand niche-based ICP personalization",
  "Commercial rights to use the video",
  "HD download link",
  "Delivery in 5 to 7 days",
];

/** Same list without ICP personalization — for titles that already name a niche. */
const INCLUDED_NICHE = INCLUDED.filter(
  (item) => !item.startsWith("On-demand niche-based"),
);

/**
 * Titles that already name a niche in parentheses (e.g. "(Home Service)",
 * "(Healthcare)") skip the ICP personalization line.
 */
function includedFor(title: string): string[] {
  return /\(/.test(title) ? INCLUDED_NICHE : INCLUDED;
}

/** Real video: same source used for the hover preview and the popup player. */
function video(
  id: string,
  title: string,
  category: VideoCategory,
  file: string,
): Video {
  return {
    id,
    title,
    category,
    price: PREMADE_PRICE,
    previewSrc: `${CDN}/${file}`,
    embedSrc: `${CDN}/${file}`,
    embedType: "video",
    included: includedFor(title),
  };
}

/** Coming-soon video: no media yet, shown with a "Launching this month" state. */
function soon(id: string, title: string, category: VideoCategory): Video {
  return {
    id,
    title,
    category,
    price: PREMADE_PRICE,
    comingSoon: true,
    included: includedFor(title),
  };
}

export const videos: Video[] = [
  video("speed-to-lead", "Speed to lead", "Promotional", "6a44fcbe08049c65ab3afa62.mp4"),
  video(
    "answering-service-247",
    "24/7 answering service",
    "Promotional",
    "6a44fd46f5487c9778e72b69.mp4",
  ),
  video(
    "answering-service-home",
    "24/7 answering service (Home Service)",
    "Promotional",
    "6a44fd46b653a0ddc211cefa.mp4",
  ),
  video(
    "answering-service-healthcare",
    "24/7 answering service (Healthcare)",
    "Promotional",
    "6a44fd4608049c65ab3b8cc9.mp4",
  ),
  soon(
    "ai-bos-explainer",
    "AI-powered business operating system",
    "Explainer",
  ),
  soon("ai-bos-demo", "AI-powered business operating system", "Demo"),
];
