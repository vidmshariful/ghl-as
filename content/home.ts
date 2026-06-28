import type { LucideIcon } from "lucide-react";
import {
  PlaySquare,
  Sparkles,
  Scissors,
  MonitorPlay,
  Eye,
  ShieldCheck,
  Zap,
  BadgeCheck,
  LibraryBig,
} from "lucide-react";
import { siteConfig, ctas } from "./site";

interface Feature {
  icon?: LucideIcon;
  title: string;
  body: string;
  href?: string;
}
interface Stat {
  value?: number;
  display?: string;
  prefix?: string;
  suffix?: string;
  label: string;
}
interface Quote {
  quote: string;
  name: string;
  role?: string;
}
interface Qa {
  question: string;
  answer: string;
}

/** Home page hero copy (centered composition). */
export const homeHero = {
  eyebrow: "Animated video library",
  headline: {
    lead: "Make your HighLevel look like ",
    highlight: "real software",
  },
  subhead:
    "Branded explainer, demo, and ad videos for your SaaS. Preview the exact video before you buy.",
  ctas: [
    { label: "Browse videos", href: siteConfig.orderUrl, variant: "blue" as const },
    { label: ctas.book.label, href: ctas.book.href, variant: "text" as const },
  ],
  // TODO: real data — replace with the final hero reel (+ poster frame).
  videoSrc:
    "https://assets.cdn.filesafe.space/s3JXyf9P6cTSxG7NfF1B/media/6a09af05dbe569a25d999f9f.mp4",
};

// TODO: real data — credibility figures from Extendly.
export const homeStats: Stat[] = [
  { display: "000", suffix: "+", label: "Agencies served" },
  { display: "00", suffix: "%", label: "Satisfaction score" },
  { display: "000", suffix: "+", label: "Videos in the library" },
  { display: "0", suffix: " day", label: "Turnaround" },
];

export const homeServices = {
  eyebrow: "What we make",
  heading: "Three ways to get video",
  description:
    "Premade, custom, or ongoing. Whatever your SaaS needs, there is a path.",
  items: [
    {
      icon: PlaySquare,
      title: "Premade Videos",
      body: "Ready-made white-label videos, branded to you and ready in days. From $495.",
      href: "/premade-videos",
    },
    {
      icon: Sparkles,
      title: "Custom Production",
      body: "Bespoke explainers, demos, and onboarding built from scratch for your brand.",
      href: "/custom-video-production",
    },
    {
      icon: Scissors,
      title: "Video Editing",
      body: "Ongoing editing for HighLevel creators who publish on a schedule.",
      href: "/video-editing",
    },
  ] satisfies Feature[],
};

export const homeProblem = {
  eyebrow: "The video gap",
  heading: "Your video undersells your software",
  intro:
    "Resellers pitch real platforms with Loom clips and stock demos. The product looks unfinished before the call ends.",
  cards: [
    {
      title: "Weak demos",
      body: "A rough screen recording makes a powerful platform feel like a hobby. Prospects hesitate.",
    },
    {
      title: "Slow and costly",
      body: "Custom production takes weeks and drains budget, so the video never gets made.",
    },
    {
      title: "Off-brand look",
      body: "Generic videos do not match your brand, so your SaaS looks like everyone else.",
    },
  ] satisfies Feature[],
};

export const homeSolution = {
  eyebrow: "The fix",
  headline: { lead: "Professional video, ready ", highlight: "in days" },
  body: "Browse the library, pick what fits, and we brand it to you. You see the exact video before you pay.",
  points: [
    "Branded to your logo, colors, and name",
    "Full commercial rights, ready to publish",
    "Preview every video before you buy",
  ],
  cta: ctas.browse,
};

export const homeLibrary = {
  eyebrow: "The library",
  headline: { lead: "See before you ", highlight: "buy" },
  description:
    "Real videos, not promises. Watch the exact result, then make it yours.",
  featuredIds: ["all-in-one-platform", "ai-capabilities-demo", "scroll-stopper-ad"],
  cta: { label: "Browse the full library", href: "/premade-videos" },
};

export const homeWhy = {
  eyebrow: "Why GHL Animation Studios",
  heading: "Built for the ecosystem",
  description:
    "Backed by Extendly, the white-label team thousands of HighLevel agencies already trust.",
  items: [
    {
      icon: MonitorPlay,
      title: "Made for HighLevel",
      body: "Every video speaks to the HighLevel buyer and fits the platform you sell.",
    },
    {
      icon: Eye,
      title: "Preview before you pay",
      body: "Watch the exact video first. No guesswork, no surprises, no risk.",
    },
    {
      icon: ShieldCheck,
      title: "Fully white-label",
      body: "Your brand front and center. Ours never appears anywhere.",
    },
    {
      icon: Zap,
      title: "Ready in days",
      body: "Branded and delivered fast, so you can launch this week.",
    },
    {
      icon: BadgeCheck,
      title: "Backed by Extendly",
      body: "Part of the toolkit trusted across the HighLevel ecosystem.",
    },
    {
      icon: LibraryBig,
      title: "A library that grows",
      body: "New videos added as the platform evolves, so you stay current.",
    },
  ] satisfies Feature[],
};

// TODO: real data — Extendly client quotes, names, roles, photos, and logos.
export const homeTestimonials = {
  eyebrow: "Proof",
  heading: "Agencies that trust the work",
  items: [
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

export const homeFaqs = {
  eyebrow: "Questions",
  heading: "Good questions, answered",
  items: [
    {
      question: "Are the videos really branded to me?",
      answer:
        "Yes. Every video gets your logo, your colors, and a voiceover that names your brand. It looks made for you, because it is.",
    },
    {
      question: "Can I see a video before I buy?",
      answer:
        "Always. You preview the exact video first. What you watch is what you get, branded to you.",
    },
    {
      question: "Do I get full commercial rights?",
      answer:
        "Yes. Use your videos on your site, ads, funnels, and onboarding. They are yours to publish anywhere.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "Most videos are branded and delivered within days of your order.",
    },
  ] satisfies Qa[],
};

export const homeFinalCta = {
  eyebrow: "Get started",
  headline: { lead: "Your video, ready ", highlight: "this week" },
  subhead:
    "Browse the library, preview what fits, and launch with video that sells.",
  ctas: [
    { ...ctas.browse, variant: "blue" as const },
    { ...ctas.book, variant: "ghost" as const },
  ],
};
