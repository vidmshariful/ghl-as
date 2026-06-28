import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Terms of Service · GHL Animation Studios",
};

// TODO: real data — final terms of service copy.
export default function TermsPage() {
  return (
    <>
      <PageHero
        size="compact"
        glow={false}
        eyebrow="Legal"
        headline={{ lead: "Terms of Service" }}
      />
      <div className="mx-auto w-full max-w-[760px] px-6 pb-24 text-[15px] leading-relaxed text-secondary md:px-8">
        <p>
          This is placeholder terms of service copy. The final terms will cover
          use of the site, purchases, licensing, and commercial rights, in plain
          language.
        </p>
      </div>
    </>
  );
}
