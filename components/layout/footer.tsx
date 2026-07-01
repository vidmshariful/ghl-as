import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { RevealText } from "@/components/ui/reveal-text";
import { footerNav, siteConfig } from "@/content/site";

/**
 * Site footer. Sits beneath the final CTA, which overlaps its top edge (the CTA
 * carries a negative bottom margin and the footer a generous top padding). Brand
 * + link columns, a legal bar, then a large brand wordmark that reveals on
 * scroll as the closing flourish. Authority attributes to Extendly only.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-0 overflow-hidden bg-surface-1 pt-24 md:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[360px]"
        style={{
          background:
            "radial-gradient(55% 100% at 50% 0%, var(--blue-glow), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 max-w-[300px] text-sm leading-relaxed text-secondary">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Backed by Extendly
            </p>
          </div>

          {/* Link columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[1.5px] text-tertiary">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-secondary transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal bar */}
        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-xs text-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.notAffiliated}</p>
        </div>
      </div>

      {/* Closing brand wordmark — one line, tri-color logo gradient, reveals
          on scroll like a logo lockup */}
      <div className="relative mt-14 px-6 md:mt-20 md:px-8">
        <div className="mx-auto max-w-[1320px]">
          <RevealText
            as="span"
            stagger={0.09}
            amount={0.25}
            className="wordmark-loop block whitespace-nowrap text-center font-display font-extrabold leading-[0.95] tracking-[-2px] text-[clamp(20px,7vw,116px)]"
            segments={[{ text: "GHL Animation Studios" }]}
          />
        </div>
      </div>
      <div className="h-12 md:h-16" />
    </footer>
  );
}
