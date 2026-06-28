import type { MetadataRoute } from "next";

const SITE_URL = "https://ghlanimationstudios.com";

/**
 * Public routes only. /design-system is intentionally omitted (internal).
 * Add routes here as their pages are built.
 */
const PUBLIC_ROUTES = [
  "/",
  "/premade-videos",
  "/custom-video-production",
  "/video-editing",
  "/our-work",
  "/book-a-call",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PUBLIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
