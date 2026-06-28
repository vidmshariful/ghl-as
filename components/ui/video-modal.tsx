"use client";

import * as React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  src: string;
  title?: string;
  /** When present, a buy line + Buy now button shows under the video. */
  buy?: { price: number; href: string };
}

/** Lightbox video player. Autoplays (user-initiated) with sound + controls. */
export function VideoModal({ open, onClose, src, title, buy }: VideoModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <VideoModalPanel
          onClose={onClose}
          src={src}
          title={title}
          buy={buy}
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
      </motion.div>
    </motion.div>
  );
}
