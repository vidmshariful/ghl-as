"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Dark/light toggle. Both icons always render; the `.dark` class drives which
 * one shows via CSS, so there is no hydration mismatch and no mount guard.
 * Icon-button styling matches the nav icon buttons (38px square, 8px radius).
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-line text-secondary transition-colors hover:border-line-strong hover:text-primary",
        className,
      )}
    >
      <Sun className="h-[15px] w-[15px] dark:hidden" />
      <Moon className="hidden h-[15px] w-[15px] dark:block" />
    </button>
  );
}
