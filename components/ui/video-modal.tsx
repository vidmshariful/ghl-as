"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, ArrowUpRight, LibraryBig, PhoneCall, Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Icons resolved by key so the action data stays serializable (server→client). */
const ACTION_ICONS = {
  library: LibraryBig,
  phone: PhoneCall,
  scissors: Scissors,
} as const;

type ActionAccent = "blue" | "gold" | "green";

const ACTION_ACCENTS: Record<
  ActionAccent,
  { grad: string; soft: string; glow: string; fg: string }
> = {
  blue: {
    grad: "linear-gradient(155deg, #5a9bf7, #1f63d6)",
    soft: "rgba(45,127,240,0.16)",
    glow: "rgba(45,127,240,0.40)",
    fg: "#fff",
  },
  gold: {
    grad: "linear-gradient(155deg, #f7c83a, #e0980a)",
    soft: "rgba(242,184,22,0.18)",
    glow: "rgba(242,184,22,0.40)",
    fg: "#0b1020",
  },
  green: {
    grad: "linear-gradient(155deg, #5fd07b, #2c9a47)",
    soft: "rgba(67,185,91,0.16)",
    glow: "rgba(67,185,91,0.40)",
    fg: "#fff",
  },
};

export interface ModalAction {
  /** The prompt/question shown above the button. */
  text: string;
  label: string;
  href: string;
  icon?: keyof typeof ACTION_ICONS;
  accent?: ActionAccent;
}

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
  /** When present, a buy line + Buy now button shows under the video. */
  buy?: { price: number; href: string };
  /** When present, a gradient 3-up "what next" CTA row shows under the video. */
  actions?: ModalAction[];
}

/** Lightbox video player. Autoplays (user-initiated) with sound + controls. */
export function VideoModal({
  open,
  onClose,
  src,
  title,
  buy,
  actions,
}: VideoModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <VideoModalPanel
          onClose={onClose}
          src={src}
          title={title}
          buy={buy}
          actions={actions}
        />
      )}
    </AnimatePresence>
  );
}

function VideoModalPanel({
  onClose,
  src,
  title,
  buy,
  actions,
}: Omit<VideoModalProps, "open">) {
  const reduce = useReducedMotion();

  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-10"
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} video` : "Video"}
    >
      <motion.button
        type="button"
        aria-label="Close video"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="relative w-full max-w-[920px] overflow-hidden rounded-2xl border border-line-strong bg-surface-1 shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
        initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.24, ease: EASE }}
      >
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
        >
          <X className="h-[18px] w-[18px]" />
        </button>

        <video
          src={src}
          controls
          autoPlay
          playsInline
          className="aspect-video w-full bg-black"
        />

        {buy && (
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-5 py-4">
            <div>
              {title && (
                <div className="font-display text-lg font-bold text-primary">
                  {title}
                </div>
              )}
              <div className="mt-0.5 text-sm text-secondary">
                Make it yours, branded to you.{" "}
                <span className="font-semibold text-primary">
                  ${buy.price.toLocaleString()} one-time
                </span>
              </div>
            </div>
            <Button variant="blue" arrow href={buy.href}>
              Buy now
            </Button>
          </div>
        )}

        {actions && actions.length > 0 && (
          <div className="grid gap-3 border-t border-line bg-surface-2/40 p-4 sm:grid-cols-3">
            {actions.map((a) => {
              const ac = ACTION_ACCENTS[a.accent ?? "blue"];
              const Icon = a.icon ? ACTION_ICONS[a.icon] : null;
              return (
                <Link
                  key={a.label}
                  href={a.href}
                  className="group/cta relative flex h-full flex-col rounded-xl border border-line p-5 transition-all duration-300 hover:-translate-y-[3px]"
                  style={{
                    background: `linear-gradient(160deg, ${ac.soft}, transparent 72%)`,
                  }}
                >
                  {/* hover halo */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-1.5 -z-10 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover/cta:opacity-100"
                    style={{
                      background: `radial-gradient(60% 60% at 50% 40%, ${ac.glow}, transparent 70%)`,
                    }}
                  />
                  {Icon && (
                    <span
                      className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-white transition-transform duration-300 ease-out group-hover/cta:-rotate-6 group-hover/cta:scale-105"
                      style={{
                        background: ac.grad,
                        boxShadow: `0 10px 20px ${ac.glow}, inset 0 1.5px 0 rgba(255,255,255,0.5), inset 0 -3px 8px rgba(0,0,0,0.18)`,
                      }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                  )}
                  <p className="text-[15px] font-semibold leading-snug text-primary">
                    {a.text}
                  </p>
                  <span
                    className="mt-auto flex w-fit items-center gap-1.5 rounded-lg px-4 py-2.5 text-[13px] font-bold transition-transform duration-200 group-hover/cta:-translate-y-px"
                    style={{
                      background: ac.grad,
                      color: ac.fg,
                      boxShadow: `0 8px 18px ${ac.glow}`,
                    }}
                  >
                    {a.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
