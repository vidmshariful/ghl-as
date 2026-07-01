import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy · GHL Animation Studios",
};

// TODO: real data — final privacy policy copy.
export default function PrivacyPage() {
  return (
    <>
      <PageHero
        size="compact"
        glow={false}
        eyebrow="Legal"
        headline={{ lead: "Privacy Policy" }}
      />
      <section className="theme-light bg-bg">
        <div className="mx-auto w-full max-w-[760px] px-6 py-20 text-[15px] leading-relaxed text-secondary md:px-8 md:py-28">
          <p>
            This is placeholder privacy policy copy. The final policy will
            explain what we collect, how we use it, and your choices, in plain
            language.
          </p>
        </div>
      </section>
    </>
  );
}
