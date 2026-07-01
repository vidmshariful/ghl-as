import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Handshake,
  ListChecks,
  Rocket,
  Wand2,
  HelpCircle,
} from "lucide-react";
import { ctas } from "./site";

interface Feature {
  icon?: LucideIcon;
  title: string;
  body: string;
}

export const bookHero = {
  eyebrow: "Book a call",
  headline: { lead: "Get a clear ", highlight: "plan" },
  subhead: "A quick call to find the right video for your SaaS. No pressure.",
};

export const bookWhatYouGet = {
  eyebrow: "What you get",
  heading: "Worth your **time**",
  cards: [
    {
      icon: Compass,
      title: "A clear recommendation",
      body: "We point you to the right video for your goal.",
    },
    {
      icon: Handshake,
      title: "Honest advice",
      body: "If premade fits, we will say so. No upsell.",
    },
    {
      icon: ListChecks,
      title: "A simple next step",
      body: "Leave the call knowing exactly what to do next.",
    },
  ] satisfies Feature[],
};

export const bookWhoFor = {
  eyebrow: "Who it is for",
  heading: "Right for **you** if",
  cards: [
    {
      icon: Rocket,
      title: "Launching a SaaS",
      body: "You are launching or rebranding your HighLevel platform.",
    },
    {
      icon: Wand2,
      title: "Need custom work",
      body: "You want bespoke video the library does not cover.",
    },
    {
      icon: HelpCircle,
      title: "Not sure what fits",
      body: "You want a quick steer before you spend.",
    },
  ] satisfies Feature[],
};

export const bookBooking = {
  heading: "Book your **call**",
  description: "Pick a time that works. We will take it from there.",
  points: [
    "A clear video recommendation",
    "An honest, no-pressure conversation",
    "A simple next step",
  ],
  micro: "No pressure. No obligation.",
};

export const bookFinalCta = {
  eyebrow: "No pressure",
  headline: { lead: "Rather browse ", highlight: "first?" },
  subhead:
    "Explore the library or our work, then book a call whenever you are ready.",
  ctas: [
    { ...ctas.browse, variant: "blue" as const },
    { label: "See our work", href: "/our-work", variant: "ghost" as const },
  ],
  checks: ["No pressure", "Honest advice", "A clear plan"],
  steps: [
    {
      title: "Pick a time",
      body: "Grab a slot that works for you.",
    },
    {
      title: "Quick call",
      body: "An honest, no-pressure conversation.",
    },
    {
      title: "Clear next step",
      body: "Leave knowing exactly what to do.",
    },
  ],
};
