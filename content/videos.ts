/**
 * The premade video library. Sample titles from the content doc.
 * TODO: real data — the production catalog (titles, posters, preview loops,
 * HighLevel media embeds, per-product order URLs) comes from Extendly.
 */

export type VideoCategory = "Explainer" | "Demo" | "Ad" | "Feature";

export const VIDEO_CATEGORIES: VideoCategory[] = [
  "Explainer",
  "Demo",
  "Ad",
  "Feature",
];

export interface Video {
  id: string;
  title: string;
  category: VideoCategory;
  price: number;
  /** Still frame. Local file in /public/posters. */
  poster?: string;
  /** Muted preview loop (lightweight), shown by default. */
  previewSrc?: string;
  /** The real video, loaded only on click. */
  embedSrc?: string;
  embedType?: "video" | "iframe";
  /** Per-product checkout URL; falls back to siteConfig.orderUrl. */
  orderUrl?: string;
  included: string[];
}

export const PREMADE_PRICE = 495;

// TODO: real data — per-video media. For now every card uses this placeholder reel.
export const PLACEHOLDER_REEL =
  "https://assets.cdn.filesafe.space/s3JXyf9P6cTSxG7NfF1B/media/6a09af05dbe569a25d999f9f.mp4";

export const DEFAULT_INCLUDED = [
  "Your logo and brand colors",
  "Voiceover with your brand name",
  "Full commercial rights",
  "HD download, delivered in days",
];

const baseVideos: Video[] = [
  {
    id: "all-in-one-platform",
    title: "All-in-one platform",
    category: "Explainer",
    price: PREMADE_PRICE,
    included: DEFAULT_INCLUDED,
  },
  {
    id: "ai-employee",
    title: "AI employee",
    category: "Explainer",
    price: PREMADE_PRICE,
    included: DEFAULT_INCLUDED,
  },
  {
    id: "reputation-management",
    title: "Reputation management",
    category: "Explainer",
    price: PREMADE_PRICE,
    included: DEFAULT_INCLUDED,
  },
  {
    id: "spokesperson-demo",
    title: "Spokesperson demo",
    category: "Demo",
    price: PREMADE_PRICE,
    included: DEFAULT_INCLUDED,
  },
  {
    id: "ai-capabilities-demo",
    title: "AI capabilities demo",
    category: "Demo",
    price: PREMADE_PRICE,
    included: DEFAULT_INCLUDED,
  },
  {
    id: "scroll-stopper-ad",
    title: "Scroll-stopper ad",
    category: "Ad",
    price: PREMADE_PRICE,
    included: DEFAULT_INCLUDED,
  },
];

export const videos: Video[] = baseVideos.map((v) => ({
  ...v,
  previewSrc: PLACEHOLDER_REEL,
  embedSrc: PLACEHOLDER_REEL,
  embedType: "video" as const,
}));
