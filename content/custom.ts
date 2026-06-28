import type { LucideIcon } from "lucide-react";
import { MonitorPlay, PlayCircle, GraduationCap, Megaphone } from "lucide-react";
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
    { ...ctas.book, variant: "blue" as const },
    { ...ctas.browse, variant: "ghost" as const },
  ],
  micro: "Custom scope, custom quote.",
};

export const customWhoFor = {
  eyebrow: "Who it is for",
  heading: "When you need more",
  description:
    "Custom is for brands with a specific story the library cannot tell.",
  cards: [
    {
      title: "Unique products",
      body: "Your platform has features that need their own dedicated explanation.",
    },
    {
      title: "Specific vision",
      body: "You have an exact look, message, or story in mind.",
    },
    {
      title: "Bigger launches",
      body: "A product launch or campaign that deserves something made for it.",
    },
  ] satisfies Feature[],
};

export const customWhatWeProduce = {
  eyebrow: "What we produce",
  heading: "Any video you need",
  description: "Scripted, voiced, and animated to your exact brief.",
  items: [
    {
      icon: MonitorPlay,
      title: "Explainers",
      body: "Custom explainers that make your platform instantly clear.",
    },
    {
      icon: PlayCircle,
      title: "Demos",
      body: "Walkthroughs that show your product doing the work.",
    },
    {
      icon: GraduationCap,
      title: "Onboarding series",
      body: "Video series that reduce churn and speed up activation.",
    },
    {
      icon: Megaphone,
      title: "Promo and ads",
      body: "Scroll-stopping promos built for your campaigns.",
    },
  ] satisfies Feature[],
};

export const customProcess = {
  eyebrow: "The process",
  heading: "From brief to delivery",
  description: "A clear path, no guesswork.",
  steps: [
    {
      title: "Strategy call",
      body: "We learn your product, audience, and goal on a quick call.",
    },
    {
      title: "Script and storyboard",
      body: "We map the video, and you approve before production.",
    },
    {
      title: "Production",
      body: "We animate, voice, and edit, then refine until right.",
    },
    {
      title: "Delivery",
      body: "You get the final HD file, ready to publish.",
    },
  ],
};

// TODO: real data — real custom sample projects (posters / embeds).
export const customSamples = {
  eyebrow: "Sample work",
  heading: "Custom work in action",
  description: "A look at bespoke video built for HighLevel brands.",
  items: [
    { tag: "Custom", title: "Sample project" },
    { tag: "Custom", title: "Sample project" },
    { tag: "Custom", title: "Sample project" },
  ],
};

export const customDifference = {
  eyebrow: "The difference",
  heading: "Made for HighLevel brands",
  description: "A team that knows the platform and the buyer.",
  cards: [
    {
      title: "Ecosystem fluency",
      body: "We know HighLevel, so you skip the long explanations.",
    },
    {
      title: "Built around you",
      body: "Every frame is shaped to your brand and message.",
    },
    {
      title: "Backed by Extendly",
      body: "The trusted white-label partner across the HighLevel ecosystem.",
    },
  ] satisfies Feature[],
};

export const customFaqs = {
  eyebrow: "Questions",
  heading: "Your questions, answered",
  items: [
    {
      question: "How much does custom cost?",
      answer:
        "It depends on scope. We give you a clear quote after a quick call about your project. No surprises.",
    },
    {
      question: "How long does it take?",
      answer:
        "Custom timelines depend on the work. We set clear delivery dates during the strategy call.",
    },
    {
      question: "Can you match my brand exactly?",
      answer:
        "Yes. Custom video is built entirely around your brand, voice, and style from the first frame.",
    },
    {
      question: "What if I just need a simple video?",
      answer:
        "Then premade is likely faster and cheaper. Browse the library first, and book a call only if you need bespoke work.",
    },
  ] satisfies Qa[],
};

export const customFinalCta = {
  eyebrow: "Get started",
  headline: { lead: "Tell us what you ", highlight: "need" },
  subhead: "Book a quick call and get a clear plan and quote.",
  ctas: [
    { ...ctas.book, variant: "blue" as const },
    { ...ctas.browse, variant: "ghost" as const },
  ],
};
