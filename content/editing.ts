import type { LucideIcon } from "lucide-react";
import {
  Video,
  GraduationCap,
  Users,
  BadgePercent,
  MonitorPlay,
  RefreshCw,
  Zap,
  CalendarX,
} from "lucide-react";
import { ctas } from "./site";

interface Feature {
  icon?: LucideIcon;
  title: string;
  body: string;
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

export const editingHero = {
  eyebrow: "Video editing",
  headline: { lead: "Editing for HighLevel ", highlight: "creators" },
  subhead:
    "Stop being the bottleneck on your own content. Editors who know HighLevel, on a simple monthly subscription.",
  ctas: [
    { label: "See plans", href: "#plans", variant: "blue" as const },
    { ...ctas.book, variant: "ghost" as const },
  ],
  micro: "No contracts. Cancel anytime.",
};

export const editingWhoFor = {
  eyebrow: "Who it is for",
  heading: "Built for HighLevel creators",
  description: "If you make content about HighLevel, this is your editing team.",
  items: [
    {
      icon: Video,
      title: "YouTubers",
      body: "Long-form videos edited to keep viewers watching and subscribing.",
    },
    {
      icon: GraduationCap,
      title: "Course creators",
      body: "Tutorials and lessons edited clean, clear, and on-brand.",
    },
    {
      icon: Users,
      title: "Coaches and agencies",
      body: "Regular content edited fast, so you publish on schedule.",
    },
    {
      icon: BadgePercent,
      title: "Affiliates",
      body: "Reviews and walkthroughs that convert your audience.",
    },
  ] satisfies Feature[],
};

export const editingProblem = {
  eyebrow: "The bottleneck",
  heading: "Editing is eating your time",
  intro:
    "You record fast, then editing piles up. Worse, generic editors do not understand HighLevel.",
  cards: [
    {
      title: "You are stuck editing",
      body: "Hours in the timeline are hours you are not creating or selling.",
    },
    {
      title: "Endless explaining",
      body: "Generic editors do not know the platform, so you explain everything twice.",
    },
    {
      title: "Inconsistent output",
      body: "Quality swings between editors, so your channel never looks dialed in.",
    },
  ] satisfies Feature[],
};

export const editingProcess = {
  eyebrow: "How it works",
  heading: "Editing on tap",
  description: "Send footage, get edits back. Simple.",
  steps: [
    {
      title: "Send your footage",
      body: "Upload raw recordings whenever you finish filming.",
    },
    {
      title: "We edit",
      body: "Our HighLevel-fluent team edits to your style and brand.",
    },
    {
      title: "Review and publish",
      body: "Get your edit back fast, request changes, then ship it.",
    },
  ],
};

export const editingPlans = {
  eyebrow: "Plans",
  heading: "Pick your pace",
  description: "Month to month. Pause or cancel anytime.",
};

export const editingIncludes = {
  eyebrow: "Every plan includes",
  heading: "What every plan includes",
  items: [
    {
      icon: MonitorPlay,
      title: "HighLevel fluency",
      body: "Editors who know the platform and your audience.",
    },
    {
      icon: RefreshCw,
      title: "Unlimited revisions",
      body: "We refine until the edit is exactly right.",
    },
    {
      icon: Zap,
      title: "Fast turnaround",
      body: "Edits back in days, so you never miss a post.",
    },
    {
      icon: CalendarX,
      title: "No contracts",
      body: "Month to month. Pause or cancel anytime.",
    },
  ] satisfies Feature[],
};

export const editingStats: Stat[] = [
  { display: "2-3", label: "Day turnaround" },
  { display: "∞", label: "Revisions" },
  { display: "0", label: "Contracts" },
];

// TODO: real data — real sample edits (posters / embeds).
export const editingSamples = {
  eyebrow: "Sample edits",
  heading: "See the edits",
  description: "Real HighLevel content, long-form and short.",
  items: [
    { tag: "Long-form", title: "Sample edit" },
    { tag: "Short-form", title: "Sample edit" },
    { tag: "Tutorial", title: "Sample edit" },
  ],
};

export const editingFaqs = {
  eyebrow: "Questions",
  heading: "Your questions, answered",
  items: [
    {
      question: "What do I send you?",
      answer:
        "Your raw footage. Upload recordings whenever you finish filming and we handle the rest.",
    },
    {
      question: "How fast are edits returned?",
      answer:
        "Most edits come back within a few days, depending on your plan.",
    },
    {
      question: "Is there a contract?",
      answer: "No. Every plan is month to month. Pause or cancel anytime.",
    },
    {
      question: "Do you understand HighLevel?",
      answer:
        "Yes. Our editors work in the ecosystem daily, so you skip the explaining.",
    },
    {
      question: "What if I do not like an edit?",
      answer:
        "Revisions are unlimited. We refine until it is exactly what you wanted.",
    },
  ] satisfies Qa[],
};

export const editingFinalCta = {
  eyebrow: "Get started",
  headline: { lead: "Stop editing. Start ", highlight: "publishing." },
  subhead: "Hand off the timeline to a team that knows HighLevel.",
  ctas: [
    { label: "See plans", href: "#plans", variant: "blue" as const },
    { ...ctas.book, variant: "ghost" as const },
  ],
};
