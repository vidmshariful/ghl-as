"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface Faq {
  question: string;
  answer: string;
}

/** Click to expand, rotating blue chevron, animated height. */
export function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: Faq & { defaultOpen?: boolean }) {
  const reduce = useReducedMotion();
  const [open, setOpen] = React.useState(defaultOpen);

  const body = (
    <p className="pt-2.5 text-sm leading-relaxed text-secondary">{answer}</p>
  );

  return (
    <div className="card-surface rounded-2xl border border-line px-5 py-4">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 text-left text-[15px] font-semibold text-primary"
      >
        {question}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-blue transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      {reduce ? (
        open && body
      ) : (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="overflow-hidden"
            >
              {body}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
