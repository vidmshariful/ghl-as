"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const fieldClass =
  "w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-primary placeholder:text-tertiary transition-colors focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/40";

const VIDEO_TYPES = [
  "Promotional / Ad",
  "Explainer",
  "Demo",
  "Onboarding series",
  "Not sure yet",
];

/**
 * Request-a-quote form (name, email, company, video type, details).
 * TODO: wire submission to a backend / email service. Shows a confirmation
 * state on submit for now.
 */
export function QuoteForm() {
  const [sent, setSent] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-line bg-surface-2 p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-soft text-blue">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-bold text-primary">
          Thanks, request received
        </h3>
        <p className="text-sm text-secondary">
          We will send a tailored quote and timeline within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="q-name" className="text-sm font-medium text-primary">
            Name
          </label>
          <input
            id="q-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="q-email" className="text-sm font-medium text-primary">
            Email
          </label>
          <input
            id="q-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label
            htmlFor="q-company"
            className="text-sm font-medium text-primary"
          >
            Company or website
          </label>
          <input
            id="q-company"
            name="company"
            type="text"
            placeholder="yourbrand.com"
            className={fieldClass}
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="q-type" className="text-sm font-medium text-primary">
            Video type
          </label>
          <select id="q-type" name="type" required className={fieldClass}>
            {VIDEO_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <label htmlFor="q-details" className="text-sm font-medium text-primary">
          Project details
        </label>
        <textarea
          id="q-details"
          name="details"
          required
          rows={5}
          placeholder="What is the video for, who is it for, and any timeline or budget in mind?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div>
        <Button type="submit" variant="blue" arrow>
          Get a quote
        </Button>
      </div>
    </form>
  );
}
