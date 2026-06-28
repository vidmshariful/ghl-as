"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Search, Menu, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { SearchDialog } from "@/components/layout/search-dialog";
import { primaryNav, isNavGroup, ctas, type NavEntry } from "@/content/site";
import { cn } from "@/lib/utils";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function useActive() {
  const pathname = usePathname();
  return React.useCallback(
    (href: string) =>
      pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)),
    [pathname],
  );
}

/**
 * Site header. Logo left, centered bordered menu pill (Services opens a visual
 * mega-menu), right cluster (search, theme, CTA), hamburger on mobile.
 * Transparent over the hero, glass on scroll. Search opens via the icon or ⌘K.
 */
export function Nav({
  embedded = false,
  forceGlass = false,
}: {
  embedded?: boolean;
  forceGlass?: boolean;
}) {
  const isActive = useActive();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = React.useState(embedded ? forceGlass : false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);
  const navRef = React.useRef<HTMLDivElement>(null);

  // Glass-on-scroll (skipped in embedded preview).
  React.useEffect(() => {
    if (embedded) return;
    const onScroll = () => setScrolled(window.scrollY > 8);
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [embedded]);

  // ⌘K / Ctrl+K opens search (not in embedded previews).
  React.useEffect(() => {
    if (embedded) return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [embedded]);

  // Close dropdown on outside click or Escape.
  React.useEffect(() => {
    if (!openMenu) return;
    const onDoc = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  const groupActive = (entry: NavEntry) =>
    isNavGroup(entry) && entry.children.some((c) => isActive(c.href));

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          embedded ? "relative" : "fixed inset-x-0 top-0 z-50",
          "transition-all duration-300",
          scrolled
            ? "border-b border-line bg-bg/80 shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "relative mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-6 transition-all duration-300 md:px-8",
            scrolled ? "py-2.5" : "py-4",
          )}
        >
          <Logo />

          {/* Centered menu pill */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <ul className="flex items-center rounded-lg border border-line-strong p-[3px]">
              {primaryNav.map((entry, i) => (
                <React.Fragment key={entry.label}>
                  {i > 0 && (
                    <li
                      aria-hidden
                      className="mx-px h-[15px] w-px bg-line-strong"
                    />
                  )}
                  <li className="relative">
                    {isNavGroup(entry) ? (
                      <>
                        <button
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded={openMenu === entry.label}
                          onClick={() =>
                            setOpenMenu((m) =>
                              m === entry.label ? null : entry.label,
                            )
                          }
                          className={cn(
                            "relative flex items-center gap-1.5 rounded-lg px-[15px] py-2 text-[15px] transition-colors",
                            groupActive(entry) || openMenu === entry.label
                              ? "text-primary"
                              : "text-secondary hover:text-primary",
                          )}
                        >
                          {entry.label}
                          <ChevronDown
                            className={cn(
                              "h-3 w-3 transition-transform duration-200",
                              openMenu === entry.label && "rotate-180",
                            )}
                          />
                          {groupActive(entry) && (
                            <span
                              aria-hidden
                              className="absolute bottom-1 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full"
                              style={{ background: "var(--grad-text)" }}
                            />
                          )}
                        </button>

                        <AnimatePresence>
                          {openMenu === entry.label && (
                            <motion.div
                              role="menu"
                              initial={{ opacity: 0, y: reduce ? 0 : 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: reduce ? 0 : 8 }}
                              transition={{ duration: 0.18, ease: EASE }}
                              className="absolute left-1/2 top-full mt-3 w-[420px] -translate-x-1/2 overflow-hidden rounded-2xl border border-line bg-surface-1 p-2 shadow-[0_24px_60px_rgba(0,0,0,0.4)]"
                            >
                              {entry.children.map((child) => {
                                const Icon = child.icon;
                                return (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    role="menuitem"
                                    onClick={() => setOpenMenu(null)}
                                    className="group/item flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-surface-2"
                                  >
                                    <span
                                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white"
                                      style={{ background: "var(--grad-btn)" }}
                                    >
                                      {Icon && <Icon className="h-[18px] w-[18px]" />}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span
                                        className={cn(
                                          "flex items-center gap-1 text-sm font-semibold",
                                          isActive(child.href)
                                            ? "text-blue"
                                            : "text-primary",
                                        )}
                                      >
                                        {child.label}
                                        <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 text-blue opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
                                      </span>
                                      {child.description && (
                                        <span className="mt-0.5 block text-[12.5px] text-secondary">
                                          {child.description}
                                        </span>
                                      )}
                                    </span>
                                  </Link>
                                );
                              })}

                              <div className="mt-1 border-t border-line p-3">
                                <Link
                                  href={ctas.book.href}
                                  onClick={() => setOpenMenu(null)}
                                  className="flex items-center justify-between text-[13px] text-secondary transition-colors hover:text-primary"
                                >
                                  <span>Not sure what fits?</span>
                                  <span className="font-semibold text-blue">
                                    {ctas.book.label} &rarr;
                                  </span>
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={entry.href}
                        className={cn(
                          "relative block rounded-lg px-[15px] py-2 text-[15px] transition-colors",
                          isActive(entry.href)
                            ? "text-primary"
                            : "text-secondary hover:text-primary",
                        )}
                      >
                        {entry.label}
                        {isActive(entry.href) && (
                          <span
                            aria-hidden
                            className="absolute bottom-1 left-1/2 h-[2px] w-5 -translate-x-1/2 rounded-full"
                            style={{ background: "var(--grad-text)" }}
                          />
                        )}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              title="Search (⌘K)"
              onClick={() => setSearchOpen(true)}
              className="hidden h-[38px] w-[38px] items-center justify-center rounded-lg border border-line text-secondary transition-colors hover:border-line-strong hover:text-primary sm:flex"
            >
              <Search className="h-[15px] w-[15px]" />
            </button>
            <ThemeToggle />
            <Button
              variant="blue"
              size="sm"
              arrow
              href={ctas.book.href}
              className="tier-glow hidden !text-[15px] lg:inline-flex"
            >
              {ctas.book.label}
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-line text-secondary transition-colors hover:border-line-strong hover:text-primary lg:hidden"
            >
              <Menu className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onOpenSearch={() => {
          setMobileOpen(false);
          setSearchOpen(true);
        }}
      />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
