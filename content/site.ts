/**
 * Site-wide config and navigation. Typed source of truth for chrome.
 * Brand wall: authority attributes to Extendly only.
 */

export const siteConfig = {
  name: "GHL Animation Studios",
  tagline:
    "Branded explainer, demo, and ad videos for your HighLevel SaaS. Preview the exact video before you buy.",
  // External checkout. Every Buy / Start now button links here.
  orderUrl: "https://order.ghlanimationstudios.com",
  notAffiliated: "Not affiliated with GoHighLevel Inc.",
  // TODO: real data — confirm support email with Extendly.
  supportEmail: "support@ghlanimationstudios.com",
} as const;

import type { LucideIcon } from "lucide-react";
import { PlaySquare, Sparkles, Scissors } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};
export type NavGroup = { label: string; children: NavLink[] };
export type NavEntry = NavLink | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return "children" in entry;
}

/** Shared CTAs (internal routes, not the order subdomain). */
export const ctas = {
  browse: { label: "Browse videos", href: "/premade-videos" },
  book: { label: "Book a call", href: "/book-a-call" },
} as const;

export const primaryNav: NavEntry[] = [
  {
    label: "Services",
    children: [
      {
        label: "Premade Videos",
        href: "/premade-videos",
        description: "Ready-made white-label videos, branded to you.",
        icon: PlaySquare,
      },
      {
        label: "Custom Production",
        href: "/custom-video-production",
        description: "Bespoke explainers and demos, built from scratch.",
        icon: Sparkles,
      },
      {
        label: "Video Editing",
        href: "/video-editing",
        description: "Ongoing editing for HighLevel creators.",
        icon: Scissors,
      },
    ],
  },
  { label: "Our Work", href: "/our-work" },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Premade Videos", href: "/premade-videos" },
      { label: "Custom Production", href: "/custom-video-production" },
      { label: "Video Editing", href: "/video-editing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Work", href: "/our-work" },
      { label: "Book a Call", href: "/book-a-call" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
