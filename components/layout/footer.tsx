import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { footerNav, siteConfig } from "@/content/site";

/**
 * Site footer. Brand + link columns + legal bottom bar.
 * Authority attributes to Extendly only.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface-1">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[300px]"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 0%, var(--blue-glow), transparent 70%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-[280px] text-sm text-secondary">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-sm text-secondary">Backed by Extendly.</p>
          </div>

          {/* Link columns */}
          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-[1.5px] text-tertiary">
                {col.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
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

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-xs text-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>{siteConfig.notAffiliated}</p>
        </div>
      </div>
    </footer>
  );
}
