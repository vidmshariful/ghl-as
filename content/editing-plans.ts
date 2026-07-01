import { siteConfig } from "./site";

/**
 * Video Editing subscription tiers. Pricing is LOCKED (do not change).
 * Start now links to the external order subdomain.
 * TODO: real data — per-tier order URLs from Extendly (currently the base order URL).
 */

export interface Tier {
  name: string;
  subtitle: string;
  price: number;
  was?: number;
  period: string;
  popular?: boolean;
  includes: string[];
  cta: { label: string; href: string };
}

const start = { label: "Get started now", href: siteConfig.orderUrl };

export const editingTiers: Tier[] = [
  {
    name: "Essential",
    subtitle: "For steady creators",
    price: 595,
    was: 799,
    period: "month",
    includes: [
      "2 to 3 long-form video edits",
      "4 to 6 short-form edits",
      "Delivery: 2 to 3 business days",
      "Dedicated team",
      "One active request at a time",
      "Unlimited revisions",
    ],
    cta: start,
  },
  {
    name: "Growth",
    subtitle: "For active creators and agencies",
    price: 995,
    was: 1195,
    period: "month",
    popular: true,
    includes: [
      "4 to 8 long-form video edits",
      "8 to 12 short-form edits",
      "Delivery: 2 to 3 business days",
      "Dedicated team",
      "One active request at a time",
      "Unlimited revisions",
    ],
    cta: start,
  },
  {
    name: "Scale",
    subtitle: "For high-volume teams",
    price: 1995,
    was: 2295,
    period: "month",
    includes: [
      "Continuous editing queue",
      "Works like a full-time editor",
      "Delivery: 1 to 2 business days",
      "Dedicated editor",
      "Priority handling",
      "Unlimited revisions",
    ],
    cta: start,
  },
];
