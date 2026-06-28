"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, FileText, Play, CornerDownLeft } from "lucide-react";
import { videos } from "@/content/videos";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Result = {
  title: string;
  hint: string;
  href: string;
  kind: "page" | "video";
};

const PAGES: Result[] = [
  { title: "Home", hint: "Start here", href: "/", kind: "page" },
  { title: "Premade Videos", hint: "The library", href: "/premade-videos", kind: "page" },
  { title: "Custom Video Production", hint: "Bespoke video", href: "/custom-video-production", kind: "page" },
  { title: "Video Editing", hint: "Subscription editing", href: "/video-editing", kind: "page" },
  { title: "Our Work", hint: "Showcase", href: "/our-work", kind: "page" },
  { title: "Book a Call", hint: "Talk to us", href: "/book-a-call", kind: "page" },
  { title: "Contact", hint: "Get in touch", href: "/contact", kind: "page" },
];

const VIDEO_RESULTS: Result[] = videos.map((v) => ({
  title: v.title,
  hint: `${v.category} video`,
  href: "/premade-videos",
  kind: "video",
}));

const ALL: Result[] = [...PAGES, ...VIDEO_RESULTS];

export function SearchDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && <SearchPanel onClose={onClose} />}
    </AnimatePresence>
  );
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const reduce = useReducedMotion();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [q, setQ] = React.useState("");
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    inputRef.current?.focus();
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const query = q.trim().toLowerCase();
  const results = query
    ? ALL.filter(
        (r) =>
          r.title.toLowerCase().includes(query) ||
          r.hint.toLowerCase().includes(query),
      )
    : PAGES;

  const select = (r: Result) => {
    onClose();
    router.push(r.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const r = results[active];
      if (r) select(r);
    } else if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[14vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Search"
    >
      <motion.button
        type="button"
        aria-label="Close search"
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      />

      <motion.div
        className="relative w-full max-w-[560px] overflow-hidden rounded-2xl border border-line-strong bg-surface-1 shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
        transition={{ duration: 0.22, ease: EASE }}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="h-[18px] w-[18px] shrink-0 text-secondary" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setActive(0);
            }}
            onKeyDown={onKeyDown}
            placeholder="Search pages and videos"
            className="w-full bg-transparent py-4 text-[15px] text-primary placeholder:text-tertiary focus:outline-none"
          />
          <kbd className="hidden shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-tertiary sm:block">
            ESC
          </kbd>
        </div>

        <div className="max-h-[52vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="px-3 py-8 text-center text-sm text-tertiary">
              No results for &ldquo;{q}&rdquo;
            </p>
          ) : (
            <ul>
              {results.map((r, i) => (
                <li key={`${r.kind}-${r.title}`}>
                  <button
                    type="button"
                    onClick={() => select(r)}
                    onMouseEnter={() => setActive(i)}
                    className={cn(
                      "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
                      i === active ? "bg-surface-2" : "hover:bg-surface-2",
                    )}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line bg-surface-2 text-secondary">
                      {r.kind === "video" ? (
                        <Play className="h-4 w-4" />
                      ) : (
                        <FileText className="h-4 w-4" />
                      )}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-primary">
                        {r.title}
                      </span>
                      <span className="block truncate text-xs text-tertiary">
                        {r.hint}
                      </span>
                    </span>
                    {i === active && (
                      <CornerDownLeft className="h-4 w-4 shrink-0 text-tertiary" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
