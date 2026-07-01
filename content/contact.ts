import { siteConfig, ctas } from "./site";

export const contactHero = {
  eyebrow: "Contact",
  headline: { lead: "Get in ", highlight: "touch" },
  subhead: "Questions, support, or anything else. We are here to help.",
};

export const contactBlock = {
  heading: "Send us a **message**",
  description: "Fill in the form and we will get back to you.",
  supportEmail: siteConfig.supportEmail,
  micro: "We reply within one business day.",
};

export const contactFinalCta = {
  eyebrow: "Prefer to talk?",
  headline: { lead: "Book a quick ", highlight: "call" },
  subhead:
    "We will help you find the right video for your SaaS. No pressure, no obligation.",
  ctas: [
    { ...ctas.book, variant: "blue" as const },
    { ...ctas.browse, variant: "ghost" as const },
  ],
  checks: ["Reply in one business day", "No pressure", "Real help"],
  steps: [
    {
      title: "Send a message",
      body: "Tell us what you are after.",
    },
    {
      title: "We reply fast",
      body: "Usually within one business day.",
    },
    {
      title: "Find your fit",
      body: "We point you to the right video.",
    },
  ],
};
