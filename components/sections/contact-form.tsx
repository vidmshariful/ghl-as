"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const fieldClass =
  "w-full rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-primary placeholder:text-tertiary transition-colors focus:border-blue focus:outline-none focus:ring-2 focus:ring-blue/40";

/**
 * Contact form (Name, Email, Message). Accessible labels + validation.
 * TODO: wire submission to a backend / email service. For now it shows a
 * confirmation state on submit.
 */
export function ContactForm() {
  const [sent, setSent] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex max-w-[560px] flex-col items-start gap-3 rounded-2xl border border-line bg-surface-2 p-8">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-soft text-blue">
          <Check className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-bold text-primary">
          Thanks, message received
        </h3>
        <p className="text-sm text-secondary">
          We reply within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid max-w-[560px] gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-primary">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium text-primary">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={fieldClass}
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help?"
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div>
        <Button type="submit" variant="blue" arrow>
          Send message
        </Button>
      </div>
    </form>
  );
}
