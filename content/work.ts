import { ctas } from "./site";

interface Stat {
  value?: number;
  display?: string;
  prefix?: string;
  suffix?: string;
  label: string;
}

export const workHero = {
  eyebrow: "Our work",
  headline: { lead: "See the ", highlight: "work" },
  subhead: "Real videos, real brands. Watch what your SaaS could look like.",
  ctas: [{ ...ctas.browse, variant: "blue" as const }],
};

export const workShowcase = {
  eyebrow: "Showcase",
  heading: "Videos we have made",
  description: "Filter by type to see the range.",
};

// TODO: real data — selected results from Extendly.
export const workStats: Stat[] = [
  { display: "000", suffix: "+", label: "Videos delivered" },
  { display: "000", suffix: "+", label: "Agencies served" },
  { display: "00", suffix: "%", label: "Satisfaction score" },
];

export const workFinalCta = {
  eyebrow: "Get started",
  headline: { lead: "Make video this good ", highlight: "yours" },
  subhead: "Browse the library or book a call to start.",
  ctas: [
    { ...ctas.browse, variant: "blue" as const },
    { ...ctas.book, variant: "ghost" as const },
  ],
};
