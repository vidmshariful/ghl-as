import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  Target,
  Rocket,
  Plug,
  Fingerprint,
  ShieldCheck,
} from "lucide-react";
import type { FeatureAccent } from "@/components/cards/feature-card";
import { ctas } from "./site";

interface Feature {
  icon?: LucideIcon;
  title: string;
  body: string;
}
interface Qa {
  question: string;
  answer: string;
}

export const customHero = {
  eyebrow: "Custom video",
  headline: { lead: "Bespoke video, built from ", highlight: "scratch" },
  subhead:
    "When premade is not enough, we produce fully custom video for your SaaS, scripted and animated around your brand.",
  ctas: [
    { label: "Get a quote", href: "#quote", variant: "blue" as const },
    { ...ctas.browse, variant: "ghost" as const },
  ],
  micro: "Custom scope, custom quote.",
};

export const customWhoFor = {
  eyebrow: "Who it is for",
  heading: "When you need **more**",
  description:
    "Custom is for brands with a specific story the library cannot tell.",
  cards: [
    {
      icon: Boxes,
      title: "Unique products",
      body: "Your platform has features that need their own dedicated explanation.",
    },
    {
      icon: Target,
      title: "Specific vision",
      body: "You have an exact look, message, or story in mind.",
    },
    {
      icon: Rocket,
      title: "Bigger launches",
      body: "A product launch or campaign that deserves something made for it.",
    },
  ] satisfies Feature[],
};

// TODO: real data — drop art at the `image` path; until then the hint shows.
export const customPillars = {
  eyebrow: "The craft",
  heading: "What goes into every **video**",
  description: "Three things we bring to every custom project.",
  items: [
    {
      title: "Hook",
      body: "The first seconds decide if they keep watching. We open with a hook that holds attention.",
      imageHint: "Hook — spotlight on a single focal element",
    },
    {
      title: "Story",
      body: "A clear, interesting narrative from start to finish, so people watch the whole thing.",
      imageHint: "Story — brand and audience meeting in the middle",
    },
    {
      title: "Conversion",
      body: "Every video ends with a clear next step, so viewers know exactly what to do.",
      imageHint: "Conversion — a path leading to one clear action",
    },
  ],
};

export const customProcess = {
  eyebrow: "Our process",
  heading: "How we make your **video**",
  description: "Six phases, from the first questions to final delivery.",
  steps: [
    {
      title: "Questionnaire",
      body: "We learn your product, audience, goals, and brand in a short intake.",
    },
    {
      title: "Scripting",
      body: "We write a tight, on-message script, and you approve every word.",
    },
    {
      title: "Concept and design",
      body: "We design the visual style, characters, and scenes around your brand.",
    },
    {
      title: "Animation",
      body: "We bring the storyboard to life with smooth, on-brand animation.",
    },
    {
      title: "Sound design",
      body: "Voiceover, music, and effects mixed for a polished, professional feel.",
    },
    {
      title: "Delivery",
      body: "You get the final HD files, ready to publish everywhere.",
    },
  ],
};

export const customPricing = {
  eyebrow: "Pricing",
  heading: "Custom video **pricing**",
  description:
    "Every project is scoped to you. Here is where each type starts.",
  tiers: [
    {
      type: "Promotional / Ad",
      scope: "Up to 45 seconds",
      price: "$2,500",
      accent: "coral" as FeatureAccent,
    },
    {
      type: "Explainer",
      scope: "90 to 120 seconds",
      price: "$3,000",
      accent: "blue" as FeatureAccent,
    },
    {
      type: "Demo",
      scope: "3 to 7 minutes",
      price: "$5,000",
      accent: "green" as FeatureAccent,
    },
    {
      type: "Onboarding series",
      scope: "3 to 10 videos",
      price: "$5,000",
      accent: "gold" as FeatureAccent,
    },
  ],
  cta: { label: "Get a quote", href: "#quote" },
  micro: "Final price depends on scope. Get a tailored quote below.",
};

// TODO: real data — real custom sample projects (posters / embeds).
export const customSamples = {
  eyebrow: "Sample work",
  heading: "Custom work in **action**",
  description: "A look at bespoke video built for HighLevel brands.",
  items: [
    { tag: "Custom", title: "Sample project" },
    { tag: "Custom", title: "Sample project" },
    { tag: "Custom", title: "Sample project" },
  ],
};

export const customDifference = {
  eyebrow: "The difference",
  heading: "Made for HighLevel **brands**",
  description: "A team that knows the platform and the buyer.",
  cards: [
    {
      icon: Plug,
      title: "Ecosystem fluency",
      body: "We know HighLevel, so you skip the long explanations.",
    },
    {
      icon: Fingerprint,
      title: "Built around you",
      body: "Every frame is shaped to your brand and message.",
    },
    {
      icon: ShieldCheck,
      title: "Backed by Extendly",
      body: "The trusted white-label partner across the HighLevel ecosystem.",
    },
  ] satisfies Feature[],
};

export const customQuote = {
  eyebrow: "Get started",
  heading: "Request a **quote**",
  description:
    "Tell us about your project and we will send a tailored quote and timeline within one business day.",
};

export const customFaqs = {
  eyebrow: "Questions",
  heading: "Your questions, **answered**",
  items: [
    {
      question: "How much does custom cost?",
      answer:
        "It depends on scope. The pricing above shows where each type starts, and you get a clear quote after you share your project. No surprises.",
    },
    {
      question: "How long does it take?",
      answer:
        "Custom timelines depend on the work. We set clear delivery dates once we scope your project.",
    },
    {
      question: "Can you match my brand exactly?",
      answer:
        "Yes. Custom video is built entirely around your brand, voice, and style from the first frame.",
    },
    {
      question: "What if I just need a simple video?",
      answer:
        "Then premade is likely faster and cheaper. Browse the library first, and request a quote only if you need bespoke work.",
    },
  ] satisfies Qa[],
};

export const customFinalCta = {
  eyebrow: "Get started",
  headline: { lead: "Ready for video built for ", highlight: "you?" },
  subhead: "Tell us about your project and get a tailored quote and timeline.",
  ctas: [
    { label: "Get a quote", href: "#quote", variant: "blue" as const },
    { ...ctas.book, variant: "ghost" as const },
  ],
  checks: [
    "Custom scope and quote",
    "Built around your brand",
    "Made for HighLevel",
  ],
  steps: [
    {
      title: "Request a quote",
      body: "Tell us your project, goals, and budget.",
    },
    {
      title: "We scope and plan",
      body: "A clear plan, timeline, and price.",
    },
    {
      title: "We produce and deliver",
      body: "Scripted, animated, and delivered to you.",
    },
  ],
};
