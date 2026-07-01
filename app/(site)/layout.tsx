import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

/**
 * Chrome for all public marketing pages: sticky Nav over the page, then content,
 * then Footer. The internal /design-system route lives outside this group, so it
 * never gets this chrome.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-surface-2 focus:px-4 focus:py-2 focus:text-sm focus:text-primary focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" className="relative z-10 flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
