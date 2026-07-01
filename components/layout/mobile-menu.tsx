"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { primaryNav, isNavGroup, ctas, siteConfig } from "@/content/site";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  onOpenSearch?: () => void;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Slide-in drawer for small screens. Controlled by Nav. */
export function MobileMenu({ open, onClose, onOpenSearch }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const closeRef = React.useRef<HTMLButtonElement>(null);

  // Lock body scroll, close on Escape, focus the close button while open.
  React.useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          {/* Panel */}
          <motion.div
            className="absolute right-0 top-0 flex h-full w-[88%] max-w-[360px] flex-col border-l border-line bg-surface-1 p-6"
            initial={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
            transition={{ duration: 0.3, ease: EASE }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                ref={closeRef}
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-line text-secondary transition-colors hover:border-line-strong hover:text-primary"
              >
                <X className="h-[18px] w-[18px]" />
              </button>
            </div>

            {onOpenSearch && (
              <button
                type="button"
                onClick={onOpenSearch}
                className="mt-6 flex w-full items-center gap-3 rounded-lg border border-line bg-surface-2 px-4 py-3 text-sm text-secondary transition-colors hover:text-primary"
              >
                <Search className="h-4 w-4" />
                Search pages and videos
              </button>
            )}

            <nav className="mt-6 flex-1 overflow-y-auto">
              <ul className="flex flex-col gap-1">
                {primaryNav.map((entry) =>
                  isNavGroup(entry) ? (
                    <li key={entry.label} className="mt-2">
                      <div className="px-1 pb-1 font-mono text-[11px] uppercase tracking-[1.5px] text-tertiary">
                        {entry.label}
                      </div>
                      <ul className="flex flex-col">
                        {entry.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={onClose}
                              className="block rounded-lg px-3 py-2.5 text-[15px] text-secondary transition-colors hover:bg-surface-2 hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li key={entry.href}>
                      <Link
                        href={entry.href}
                        onClick={onClose}
                        className="block rounded-lg px-3 py-2.5 text-[15px] font-semibold text-primary transition-colors hover:bg-surface-2"
                      >
                        {entry.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
              <Button variant="blue" arrow href={ctas.browse.href} onClick={onClose}>
                {ctas.browse.label}
              </Button>
              <Button variant="ghost" size="sm" href={ctas.book.href} onClick={onClose}>
                {ctas.book.label}
              </Button>
              <p className="mt-1 text-xs text-tertiary">
                {siteConfig.notAffiliated}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
