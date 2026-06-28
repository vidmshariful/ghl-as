interface Feature {
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
  heading: "Worth your time",
  cards: [
    {
      title: "A clear recommendation",
      body: "We point you to the right video for your goal.",
    },
    {
      title: "Honest advice",
      body: "If premade fits, we will say so. No upsell.",
    },
    {
      title: "A simple next step",
      body: "Leave the call knowing exactly what to do next.",
    },
  ] satisfies Feature[],
};

export const bookWhoFor = {
  eyebrow: "Who it is for",
  heading: "Right for you if",
  cards: [
    {
      title: "Launching a SaaS",
      body: "You are launching or rebranding your HighLevel platform.",
    },
    {
      title: "Need custom work",
      body: "You want bespoke video the library does not cover.",
    },
    {
      title: "Not sure what fits",
      body: "You want a quick steer before you spend.",
    },
  ] satisfies Feature[],
};

export const bookBooking = {
  heading: "Book your call",
  description: "Pick a time that works. We will take it from there.",
  points: [
    "A clear video recommendation",
    "An honest, no-pressure conversation",
    "A simple next step",
  ],
  micro: "No pressure. No obligation.",
};

// TODO: real data — Extendly client quote, name, role, photo.
export const bookTestimonial = {
  quote: "Real Extendly client quote, up to 30 words.",
  name: "Placeholder Name",
  role: "Role, Company",
};
