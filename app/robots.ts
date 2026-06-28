import type { MetadataRoute } from "next";

const SITE_URL = "https://ghlanimationstudios.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Internal living design system is never indexed.
      disallow: "/design-system",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
