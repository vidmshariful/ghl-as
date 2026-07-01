interface Quote {
  quote: string;
  name: string;
  role?: string;
  /** Local avatar in /public. Falls back to initials. */
  avatar?: string;
}

/**
 * SINGLE SOURCE OF TRUTH for the testimonials section. Rendered identically on
 * every page via <TestimonialsSection />, so editing here updates all pages.
 * TODO: real data — Extendly client quotes, names, roles, photos.
 * The first two items are the featured (wide) cards, so their quotes can run
 * longer; the rest are compact.
 */
export const testimonials = {
  eyebrow: "Proof",
  heading: "Agencies that trust the",
  headingHighlight: "work",
  items: [
    {
      quote:
        "Real Extendly client quote for the featured card, up to about forty words. Plenty of room here to let a strong, specific result land.",
      name: "Placeholder Name",
      role: "Role, Company",
    },
    {
      quote:
        "Real Extendly client quote for the second featured card, up to about forty words of specific, credible praise about the videos.",
      name: "Placeholder Name",
      role: "Role, Company",
    },
    {
      quote: "Real Extendly client quote, up to 30 words.",
      name: "Placeholder Name",
      role: "Role, Company",
    },
    {
      quote: "Real Extendly client quote, up to 30 words.",
      name: "Placeholder Name",
      role: "Role, Company",
    },
    {
      quote: "Real Extendly client quote, up to 30 words.",
      name: "Placeholder Name",
      role: "Role, Company",
    },
    {
      quote: "Real Extendly client quote, up to 30 words.",
      name: "Placeholder Name",
      role: "Role, Company",
    },
  ] satisfies Quote[],
};
