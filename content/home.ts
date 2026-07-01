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
  VideoOff,
  Hourglass,
  Palette,
  Brush,
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
  videoSrc:
    "https://assets.cdn.filesafe.space/Ju4F0bHjSGPG09M3c5vt/media/6a450724dc5f2c22a27661e3.mp4",
  // "What next" CTAs shown in the video popup, one per service path.
  videoCtas: [
    {
      icon: "library" as const,
      accent: "blue" as const,
      text: "Need a video fast?",
      label: "Browse the library",
      href: "/premade-videos",
    },
    {
      icon: "phone" as const,
      accent: "gold" as const,
      text: "Want something custom?",
      label: "Book a call",
      href: "/book-a-call",
    },
    {
      icon: "scissors" as const,
      accent: "green" as const,
      text: "Need YouTube or course video editing?",
      label: "See editing plans",
      href: "/video-editing",
    },
  ],
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
  heading: "Three ways to get",
  headingHighlight: "video",
  description:
    "Premade, custom, or ongoing. Whatever your SaaS needs, there is a path.",
  items: [
    {
      icon: PlaySquare,
      accent: "blue" as const,
      gif: "/services/premade.png",
      title: "Premade Videos",
      body: "Ready-made white-label videos, branded to you and ready in days. From $495.",
      href: "/premade-videos",
      cta: "Browse the library",
    },
    {
      icon: Sparkles,
      accent: "gold" as const,
      gif: "/services/custom.png",
      title: "Custom Production",
      body: "Bespoke explainers, demos, and onboarding built from scratch for your brand.",
      href: "/custom-video-production",
      cta: "Start a project",
      urgency: "3 of 6 production slots left this month",
    },
    {
      icon: Scissors,
      accent: "green" as const,
      gif: "/services/editing.png",
      title: "Video Editing",
      body: "Ongoing editing for HighLevel creators who publish on a schedule.",
      href: "/video-editing",
      cta: "See the plans",
      urgency: "Only 4 new client spots this month",
    },
  ],
  combo: {
    title: "Need a mix of services?",
    body: "Want premade and custom, or custom plus ongoing editing? Tell us what you are after and we will put together a combined offer built around your goals.",
    cta: { label: "Schedule a call", href: "/book-a-call" },
  },
};

export const homeProblem = {
  eyebrow: "The video gap",
  heading: "Your video undersells",
  headingHighlight: "your software",
  intro:
    "Resellers pitch real platforms with Loom clips and stock demos. The product looks unfinished before the call ends.",
  cards: [
    {
      icon: VideoOff,
      title: "Weak demos",
      body: "A rough screen recording makes a powerful platform feel like a hobby. Prospects hesitate.",
    },
    {
      icon: Hourglass,
      title: "Slow and costly",
      body: "Custom production takes weeks and drains budget, so the video never gets made.",
    },
    {
      icon: Palette,
      title: "Off-brand look",
      body: "Generic videos do not match your brand, so your SaaS looks like everyone else.",
    },
  ] satisfies Feature[],
};

export const homeSolution = {
  eyebrow: "The fix",
  headline: { lead: "Professional video, ready ", highlight: "in days" },
  body: "Browse the library, pick what fits, and we brand it to you. You see the exact video before you pay.",
  // Mirrors the three problems above, in order.
  cards: [
    {
      icon: Eye,
      accent: "blue" as const,
      title: "See it before you buy",
      body: "Preview the exact video first. What you watch is what you publish.",
    },
    {
      icon: Zap,
      accent: "gold" as const,
      title: "Ready in days",
      body: "One flat price, branded and delivered fast. No long timelines.",
    },
    {
      icon: Brush,
      accent: "green" as const,
      title: "Branded to you",
      body: "Your logo, colors, and name throughout. It looks made for your SaaS.",
    },
  ],
  cta: ctas.browse,
};

export const homeLibrary = {
  eyebrow: "The library",
  headline: { lead: "See before you ", highlight: "buy" },
  description:
    "Real videos, not promises. Watch the exact result, then make it yours.",
  featuredIds: [
    "speed-to-lead",
    "answering-service-247",
    "ai-bos-explainer",
    "answering-service-home",
    "answering-service-healthcare",
  ],
  cta: { label: "Browse the full library", href: "/premade-videos" },
};

export const homeWhy = {
  eyebrow: "Why GHL Animation Studios",
  heading: "Built for the",
  headingHighlight: "ecosystem",
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

export const homeFaqs = {
  eyebrow: "Questions",
  heading: "Good questions,",
  headingHighlight: "answered",
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
  checks: ["No retainers", "Preview before you pay", "Ready in days"],
  steps: [
    {
      title: "Browse the library",
      body: "Find the explainer, demo, or ad that fits your platform.",
    },
    {
      title: "Preview the exact video",
      body: "Watch the real result before you spend a dollar.",
    },
    {
      title: "Launch this week",
      body: "We brand it to you and deliver in days, not months.",
    },
  ],
};
