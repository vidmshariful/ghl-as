import type { LucideIcon } from "lucide-react";
import {
  Palette,
  Megaphone,
  FileCheck,
  MonitorDown,
  Zap,
  Tag,
  Eye,
  Users,
  CalendarClock,
} from "lucide-react";
import { ctas, siteConfig } from "./site";

interface Feature {
  icon?: LucideIcon;
  title: string;
  body: string;
}
interface Qa {
  question: string;
  answer: string;
}

export const premadeHero = {
  eyebrow: "Premade videos",
  headline: { lead: "Branded SaaS video, ready in ", highlight: "days" },
  subhead:
    "Explainer, demo, ad, and feature videos for your HighLevel SaaS. Preview the exact video, then make it yours.",
  ctas: [
    { ...ctas.browse, variant: "blue" as const },
    { ...ctas.book, variant: "ghost" as const },
  ],
  micro: "From $495 per video.",
};

export const premadeIncludes = {
  eyebrow: "What you get",
  heading: "Every video, **fully yours**",
  description:
    "No guesswork about whether it fits your brand. Each one is customized to you.",
  items: [
    {
      icon: Palette,
      title: "Your branding",
      body: "Your logo, dashboard theme, and brand colors throughout the video.",
    },
    {
      icon: Megaphone,
      title: "Your name",
      body: "The voiceover changed to announce your company by name.",
    },
    {
      icon: Users,
      title: "Niche personalization",
      body: "On-demand niche-based ICP tailoring for your exact audience.",
    },
    {
      icon: FileCheck,
      title: "Commercial rights",
      body: "Full rights to use it on your site, ads, and funnels.",
    },
    {
      icon: MonitorDown,
      title: "HD download",
      body: "A finished, high-definition file, ready to publish.",
    },
    {
      icon: CalendarClock,
      title: "Fast delivery",
      body: "Branded and delivered within 5 to 7 days.",
    },
  ] satisfies Feature[],
};

export const premadeLibrary = {
  eyebrow: "The library",
  heading: "Browse, preview, **buy**",
  description:
    "Every video is one flat price of $495, branded to you, delivered in days.",
};

export const premadeProcess = {
  eyebrow: "How it works",
  heading: "Yours in **three steps**",
  description: "Three steps. No friction.",
  steps: [
    {
      title: "Pick your video",
      body: "Browse the library and choose what fits your platform and pitch.",
    },
    {
      title: "We brand it",
      body: "We add your logo, colors, and a voiceover with your name.",
    },
    {
      title: "Download and launch",
      body: "Get your HD file in days, ready for your site and ads.",
    },
  ],
};

export const premadeVsCustom = {
  eyebrow: "Why premade",
  heading: "Faster and cheaper than **custom**",
  description:
    "Custom production is slow and costly. Premade gets you live this week.",
  cards: [
    {
      icon: Zap,
      title: "Days, not weeks",
      body: "Skip the long production timeline. Your video is ready in days.",
    },
    {
      icon: Tag,
      title: "One flat price",
      body: "Know the cost up front. Every video is $495, no surprises.",
    },
    {
      icon: Eye,
      title: "See it first",
      body: "Preview the finished video before you pay. No risk, no waiting.",
    },
  ] satisfies Feature[],
};

export const premadeFaqs = {
  eyebrow: "Questions",
  heading: "Before you **buy**",
  items: [
    {
      question: "Are these videos customized to my brand?",
      answer:
        "Yes. Each video is branded with your logo, colors, and a voiceover that announces your name. The version you download looks made for your SaaS.",
    },
    {
      question: "Do I get full commercial rights?",
      answer:
        "Yes. Use your video on your website, ads, funnels, and onboarding. It is yours to publish.",
    },
    {
      question: "How fast is delivery?",
      answer:
        "Most videos are branded and delivered within days of your order.",
    },
    {
      question: "Can I see a video before I buy?",
      answer:
        "Yes. Preview the exact video first. What you watch is what you receive, branded to you.",
    },
    {
      question: "What if I need something custom?",
      answer:
        "Book a call. Our custom team builds bespoke video from scratch when premade is not enough.",
    },
    {
      question: "Will the library cover new HighLevel features?",
      answer:
        "Yes. We add new videos as the platform evolves, so your library stays current.",
    },
  ] satisfies Qa[],
};

export const premadeFinalCta = {
  eyebrow: "Get started",
  headline: { lead: "Pick your video. Launch ", highlight: "this week." },
  subhead: "Browse the library, preview what fits, and make it yours.",
  ctas: [
    { ...ctas.browse, variant: "blue" as const },
    { ...ctas.book, variant: "ghost" as const },
  ],
  checks: ["Preview before you pay", "Full commercial rights", "From $495"],
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
      title: "Get it branded",
      body: "Your logo and colors throughout, delivered in days.",
    },
  ],
};

export const premadeMeta = {
  notAffiliated: siteConfig.notAffiliated,
};
