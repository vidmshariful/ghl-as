import type { LucideIcon } from "lucide-react";
import { Palette, Megaphone, FileCheck, MonitorDown } from "lucide-react";
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
  heading: "Every video, fully yours",
  description:
    "No guesswork about whether it fits your brand. Each one is customized to you.",
  items: [
    {
      icon: Palette,
      title: "Your branding",
      body: "Your logo and brand colors applied throughout the video.",
    },
    {
      icon: Megaphone,
      title: "Your name",
      body: "The voiceover updated to announce your brand by name.",
    },
    {
      icon: FileCheck,
      title: "Commercial rights",
      body: "Full rights to use it on your site, ads, and onboarding.",
    },
    {
      icon: MonitorDown,
      title: "HD delivery",
      body: "A finished, high-definition file delivered in days.",
    },
  ] satisfies Feature[],
};

export const premadeLibrary = {
  eyebrow: "The library",
  heading: "Browse, preview, buy",
  description:
    "Every video is one flat price of $495, branded to you, delivered in days.",
};

export const premadeProcess = {
  eyebrow: "How it works",
  heading: "Yours in three steps",
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
  heading: "Faster and cheaper than custom",
  description:
    "Custom production is slow and costly. Premade gets you live this week.",
  cards: [
    {
      title: "Days, not weeks",
      body: "Skip the long production timeline. Your video is ready in days.",
    },
    {
      title: "One flat price",
      body: "Know the cost up front. Every video is $495, no surprises.",
    },
    {
      title: "See it first",
      body: "Preview the finished video before you pay. No risk, no waiting.",
    },
  ] satisfies Feature[],
};

// TODO: real data — Extendly client quotes, names, roles, photos.
export const premadeTestimonials = {
  eyebrow: "Proof",
  heading: "Trusted across the ecosystem",
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
  ],
};

export const premadeFaqs = {
  eyebrow: "Questions",
  heading: "Before you buy",
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
};

export const premadeMeta = {
  notAffiliated: siteConfig.notAffiliated,
};
