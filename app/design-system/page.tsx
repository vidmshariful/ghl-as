import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Reveal } from "@/components/ui/reveal";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Footer } from "@/components/layout/footer";
import { DualCtaCard } from "@/components/cards/dual-cta-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { TierCard } from "@/components/cards/tier-card";
import { StatStrip } from "@/components/cards/stat-strip";
import { FaqItem } from "@/components/cards/faq-item";
import { Testimonial } from "@/components/cards/testimonial";
import { SampleCard } from "@/components/cards/sample-card";
import { ContactForm } from "@/components/sections/contact-form";
import { RevealText } from "@/components/ui/reveal-text";
import { Marquee } from "@/components/ui/marquee";
import { Parallax } from "@/components/ui/parallax";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { editingTiers } from "@/content/pricing";
import { Eye, ShieldCheck, Zap, MonitorPlay } from "lucide-react";
import {
  NavDemo,
  MobileMenuDemo,
  HeroDemo,
  VideoCardDemo,
  LibraryGridDemo,
} from "./_demos";

/**
 * INTERNAL living design system. Not public.
 * - Excluded from indexing (robots below), robots.ts, and the sitemap.
 * - Never linked from nav/footer.
 * - Gated: always on in dev; in production only when NEXT_PUBLIC_SHOW_STYLEGUIDE=true.
 *
 * THE RULE: this route imports and renders the REAL components from /components.
 * It never re-implements component markup or copies their styles. Local markup
 * here is page chrome only (headings, captions, swatches, layout frames).
 */
export const metadata: Metadata = {
  title: "Design System (internal)",
  robots: { index: false, follow: false },
};

const styleguideEnabled =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_SHOW_STYLEGUIDE === "true";

/* ---------- DS page chrome (not production components) ---------- */

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-3 max-w-[640px] border-l-2 border-line-strong pl-3 text-[13px] italic text-tertiary">
      {children}
    </p>
  );
}

function Block({
  title,
  children,
  caption,
}: {
  title: string;
  children: React.ReactNode;
  caption?: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h3 className="mb-3 font-mono text-[13px] uppercase tracking-[1px] text-primary">
        {title}
      </h3>
      <div className="rounded-2xl border border-line bg-surface-1 p-6">
        {children}
      </div>
      {caption && <Caption>{caption}</Caption>}
    </div>
  );
}

function GroupTitle({ id, label }: { id: string; label: string }) {
  return (
    <h2
      id={id}
      className="scroll-mt-20 font-display text-2xl font-extrabold tracking-[-0.8px]"
    >
      {label}
    </h2>
  );
}

const NAV = [
  { href: "#foundation", label: "Foundation" },
  { href: "#buttons", label: "Buttons" },
  { href: "#eyebrow", label: "Eyebrow" },
  { href: "#badge", label: "Badge" },
  { href: "#section", label: "Section" },
  { href: "#reveal", label: "Reveal" },
  { href: "#motion", label: "Motion" },
  { href: "#nav", label: "Nav" },
  { href: "#footer", label: "Footer" },
  { href: "#hero", label: "Hero" },
  { href: "#pagehero", label: "PageHero" },
  { href: "#process", label: "Process" },
  { href: "#ctaband", label: "CtaBand" },
  { href: "#library", label: "Library" },
  { href: "#videocard", label: "VideoCard" },
  { href: "#components", label: "Components" },
];

export default function DesignSystemPage() {
  if (!styleguideEnabled) notFound();

  const surfaces = [
    { name: "bg", cls: "bg-bg" },
    { name: "surface-1", cls: "bg-surface-1" },
    { name: "surface-2", cls: "bg-surface-2" },
    { name: "surface-3", cls: "bg-surface-3" },
  ];

  return (
    <div className="min-h-screen bg-bg text-primary">
      {/* Sticky in-page nav */}
      <div className="sticky top-0 z-30 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1040px] items-center gap-3 px-6 py-3">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-[1.5px] text-gold">
            Design system
          </span>
          <nav className="flex flex-wrap gap-2">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-full border border-line px-[11px] py-[5px] text-[12.5px] text-secondary transition-colors hover:border-line-strong hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <ThemeToggle className="ml-auto" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1040px] px-6 py-12">
        <span className="font-mono text-xs uppercase tracking-[2px] text-gold">
          « Internal · single source of truth »
        </span>
        <h1 className="mt-3 font-display text-4xl font-extrabold tracking-[-1.4px]">
          GHL Animation Studios design system
        </h1>
        <p className="mt-3 max-w-[620px] text-secondary">
          Every block renders the real production component. What ships is what
          you see here, in both light and dark. Toggle the theme top right.
        </p>

        {/* ============ FOUNDATION ============ */}
        <div className="mt-14">
          <GroupTitle id="foundation" label="Foundation" />

          <Block title="Surfaces">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {surfaces.map((s) => (
                <div
                  key={s.name}
                  className={`rounded-xl border border-line ${s.cls} p-4`}
                >
                  <div className="font-mono text-xs text-secondary">
                    {s.name}
                  </div>
                </div>
              ))}
            </div>
          </Block>

          <Block
            title="Brand color"
            caption="Blue gradient drives buttons and highlighted text. Gold is the rare accent. The was/struck color is muted gray, never red."
          >
            <div className="flex flex-wrap gap-3">
              <Token label="blue" className="bg-blue" />
              <Token label="grad-btn" style={{ background: "var(--grad-btn)" }} />
              <Token label="gold" className="bg-gold" />
              <Token label="ink" className="bg-ink" />
              <Token
                label="surface-2"
                className="border border-line bg-surface-2"
              />
            </div>
          </Block>

          <Block
            title="Type scale · art-directed"
            caption="Fluid display scale via tokens: text-display (hero, clamp 48→116px), text-h2 (sections, 34→68px), text-stat (numbers, 56→132px). Each bundles line-height, tracking, and weight. Resize the window to see the fluid clamp."
          >
            <div className="font-mono text-[11px] uppercase tracking-[1px] text-tertiary">
              text-display
            </div>
            <h2 className="mt-1 font-display text-display">
              Make your HighLevel look like{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--grad-text)" }}
              >
                real software
              </span>
            </h2>

            <div className="mt-8 font-mono text-[11px] uppercase tracking-[1px] text-tertiary">
              text-h2
            </div>
            <h3 className="mt-1 font-display text-h2">Every video, fully yours</h3>

            <div className="mt-8 font-mono text-[11px] uppercase tracking-[1px] text-tertiary">
              text-stat
            </div>
            <div className="mt-1 inline-flex items-baseline font-display text-stat">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "var(--grad-text)" }}
              >
                2500
              </span>
              <span className="text-gold">+</span>
            </div>

            <div className="mt-8 grid gap-2">
              <p className="font-display text-2xl font-bold tracking-[-0.5px]">
                H3 card title · Plus Jakarta Sans
              </p>
              <p className="max-w-[560px] text-secondary">
                Body · Inter. The version you download looks made for you,
                because it is.
              </p>
              <p className="text-sm text-tertiary">
                Tertiary · muted detail line.
              </p>
              <p className="font-mono text-xs uppercase tracking-[1.5px] text-gold">
                « mono eyebrow · JetBrains Mono »
              </p>
            </div>
          </Block>
        </div>

        {/* ============ PRIMITIVES ============ */}
        <div className="mt-20">
          <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-secondary">
            Primitives
          </span>

          {/* Buttons */}
          <div className="mt-3">
            <GroupTitle id="buttons" label="Button" />
            <Block
              title="Variants · size md"
              caption="6px radius, tall padding, Plus Jakarta Sans. Blue uses the --grad-btn gradient with a blue glow. Hover: a diagonal light sheen sweeps across (CSS-only, off under reduced motion), the card lifts slightly, and the arrow nudges up and right. Pressed scales to 0.98."
            >
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="blue" arrow>
                  Browse videos
                </Button>
                <Button variant="ghost">Book a call</Button>
                <Button variant="gold" arrow>
                  Get started
                </Button>
              </div>
            </Block>

            <Block title="Variants · size sm">
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="blue" size="sm" arrow>
                  Browse videos
                </Button>
                <Button variant="ghost" size="sm">
                  Book a call
                </Button>
                <Button variant="gold" size="sm" arrow>
                  Get started
                </Button>
              </div>
            </Block>

            <Block
              title="With / without arrow, link, disabled"
              caption="Renders a <button>, an internal Link, or an external <a>. Buy buttons pass an absolute href to the order subdomain and open as a normal anchor."
            >
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="blue">No arrow</Button>
                <Button variant="blue" arrow>
                  With arrow
                </Button>
                <Button
                  variant="blue"
                  arrow
                  href="https://order.ghlanimationstudios.com"
                >
                  Buy now
                </Button>
                <Button variant="ghost" href="/our-work">
                  Internal link
                </Button>
                <Button variant="blue" disabled>
                  Disabled
                </Button>
              </div>
            </Block>
          </div>

          {/* Eyebrow */}
          <div className="mt-12">
            <GroupTitle id="eyebrow" label="Eyebrow" />
            <Block
              title="Pill (section headers) and bare (hero)"
              caption="Mono, gold, auto-framed in guillemets. Pill carries the gold-soft background; bare is text only."
            >
              <div className="flex flex-wrap items-center gap-4">
                <Eyebrow>The library</Eyebrow>
                <Eyebrow variant="bare">Animated video library</Eyebrow>
              </div>
            </Block>
          </div>

          {/* Badge */}
          <div className="mt-12">
            <GroupTitle id="badge" label="Badge" />
            <Block
              title="Glass trust pills"
              caption="Gold star plus label. The Hero floats these; here they are static."
            >
              <div className="flex flex-wrap items-center gap-3">
                <Badge>See before you buy</Badge>
                <Badge>Fully white-label</Badge>
                <Badge>Ready in days</Badge>
                <Badge>Backed by Extendly</Badge>
              </div>
            </Block>
          </div>

          {/* SectionWrapper */}
          <div className="mt-12">
            <GroupTitle id="section" label="SectionWrapper" />
            <Block
              title="Header block + container"
              caption="Provides the 1200px container and vertical rhythm plus an optional Eyebrow / heading / description. Pure layout, no motion. Shown left-aligned; also supports align='center'."
            >
              <div className="overflow-hidden rounded-xl border border-dashed border-line-strong">
                <SectionWrapper
                  eyebrow="What we make"
                  heading="Three ways to get video"
                  description="Premade, custom, or ongoing. Whatever your SaaS needs, there is a path."
                  className="!py-10"
                >
                  <div className="rounded-lg border border-line bg-surface-2 p-5 text-sm text-secondary">
                    Section content goes here.
                  </div>
                </SectionWrapper>
              </div>
            </Block>
          </div>

          {/* Reveal */}
          <div className="mt-12">
            <GroupTitle id="reveal" label="Reveal" />
            <Block
              title="Scroll reveal with stagger"
              caption="opacity 0 to 1, y 24 to 0, once at ~15% in view, 500ms, cubic-bezier(0.22,1,0.36,1). Stagger via delay = i * 0.07. Disabled under prefers-reduced-motion. Scroll it into view to replay on reload."
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <Reveal key={i} delay={i * 0.07}>
                    <div className="rounded-xl border border-line bg-surface-2 p-5">
                      <div className="font-display font-bold">Item {i + 1}</div>
                      <p className="mt-1 text-sm text-secondary">
                        Reveals in sequence.
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Block>
          </div>

          {/* Motion primitives */}
          <div className="mt-12">
            <GroupTitle id="motion" label="Motion primitives" />
            <Block
              title="RevealText · masked word reveal"
              caption="Each word rises out of a clip, staggered, on scroll into view. Keeps the gradient on flagged segments. Used on the hero and every section H2. Static under reduced motion. Reload to replay."
            >
              <RevealText
                as="h3"
                className="font-display text-h2"
                segments={[
                  { text: "Make your HighLevel look like" },
                  { text: " real software", gradient: true },
                ]}
              />
            </Block>

            <Block
              title="Marquee · seamless loop"
              caption="Renders children twice and slides -50% for a gapless loop. Pauses on hover, fades at the edges, static under reduced motion. Used for the trust strip."
            >
              <Marquee>
                {["Agency", "Reseller", "SaaS", "Studio", "Partner", "Brand"].map(
                  (name) => (
                    <div
                      key={name}
                      className="flex h-9 w-32 items-center justify-center rounded-lg border border-line bg-surface-2 font-display text-sm font-bold text-tertiary"
                    >
                      {name}
                    </div>
                  ),
                )}
              </Marquee>
            </Block>

            <Block
              title="Parallax · scroll-linked drift"
              caption="Wraps a visual and translates it on scroll (transform only). Used for hero glows and key visuals. Static under reduced motion. Scroll the page to see it move."
            >
              <div className="relative h-40 overflow-hidden rounded-xl border border-line bg-surface-2">
                <Parallax
                  className="absolute inset-0 flex items-center justify-center"
                  distance={40}
                >
                  <span className="font-display text-2xl font-bold text-secondary">
                    I drift on scroll
                  </span>
                </Parallax>
              </div>
            </Block>
          </div>
        </div>

        {/* ============ LAYOUT (Nav + Footer) ============ */}
        <div className="mt-20">
          <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-secondary">
            Layout
          </span>

          {/* Nav */}
          <div className="mt-3">
            <GroupTitle id="nav" label="Nav" />
            <Block
              title="Header · embedded preview"
              caption="Logo left, centered bordered menu pill, right cluster (search, theme, CTA), hamburger under 1024px. Services opens a visual mega-menu (icon cards + a Book a call footer). The search icon opens a command palette (also ⌘K on real pages; disabled in these previews) that filters pages and videos with full keyboard nav. Transparent over the hero, glass on scroll."
            >
              <NavDemo />
            </Block>

            <Block
              title="Mobile drawer"
              caption="Slide-in panel via AnimatePresence. Locks body scroll, closes on overlay click, Escape, link tap. Honors prefers-reduced-motion. Trigger it here at any width."
            >
              <MobileMenuDemo />
            </Block>
          </div>

          {/* Footer */}
          <div className="mt-12">
            <GroupTitle id="footer" label="Footer" />
            <Block
              title="Site footer"
              caption="Brand column, link columns from content, legal bottom bar. Authority attributes to Extendly only."
            >
              <div className="overflow-hidden rounded-xl border border-line">
                <Footer />
              </div>
            </Block>
          </div>
        </div>

        {/* ============ SECTIONS ============ */}
        <div className="mt-20">
          <span className="font-mono text-[11px] uppercase tracking-[1.5px] text-secondary">
            Sections
          </span>
          <div className="mt-3">
            <GroupTitle id="hero" label="Hero · Structure C" />
            <Block
              title="Homepage opening"
              caption="Transparent Nav over a grid backdrop with a passing light beam and a blue gradient overlay. Masked word-reveal 92px headline, a subhead matching the headline box width, a text-plus-button CTA, and the reel below with a play button that opens a popup player. Respects prefers-reduced-motion."
            >
              <HeroDemo />
            </Block>
          </div>

          <div className="mt-12">
            <GroupTitle id="pagehero" label="PageHero · standard / compact" />
            <Block
              title="Standard and compact"
              caption="Eyebrow, headline with optional gradient highlight, subhead, CTA buttons, micro. Used on every page except Home (which uses the Structure C Hero). Compact is for utility pages."
            >
              <div className="space-y-4">
                <div className="overflow-hidden rounded-xl border border-line bg-bg">
                  <PageHero
                    eyebrow="Premade videos"
                    headline={{
                      lead: "Branded SaaS video, ready in ",
                      highlight: "days",
                    }}
                    subhead="Explainer, demo, ad, and feature videos for your HighLevel SaaS."
                    ctas={[
                      { label: "Browse videos", href: "/premade-videos" },
                      {
                        label: "Book a call",
                        href: "/book-a-call",
                        variant: "ghost",
                      },
                    ]}
                    micro="From $495 per video."
                  />
                </div>
                <div className="overflow-hidden rounded-xl border border-line bg-bg">
                  <PageHero
                    size="compact"
                    eyebrow="Our work"
                    headline={{ lead: "See the ", highlight: "work" }}
                    subhead="Real videos, real brands."
                  />
                </div>
              </div>
            </Block>
          </div>

          <div className="mt-12">
            <GroupTitle id="process" label="ProcessSteps" />
            <Block
              title="Numbered steps"
              caption="Numbered process steps that reveal in sequence on scroll. Supports 3 or 4 columns."
            >
              <ProcessSteps
                steps={[
                  {
                    title: "Pick your video",
                    body: "Browse the library and choose what fits your platform and pitch.",
                  },
                  {
                    title: "We brand it",
                    body: "We add your logo, colors, and a voiceover with your name.",
                  },
                  {
                    title: "Download and launch",
                    body: "Get your HD file in days, ready for your site and ads.",
                  },
                ]}
              />
            </Block>
          </div>

          <div className="mt-12">
            <GroupTitle id="ctaband" label="CtaBand" />
            <Block
              title="Final call-to-action band"
              caption="Glowing panel with eyebrow, headline (gradient highlight), subhead, and CTAs. Closes most pages."
            >
              <CtaBand
                eyebrow="Get started"
                headline={{ lead: "Your video, ready ", highlight: "this week" }}
                subhead="Browse the library, preview what fits, and launch with video that sells."
                ctas={[
                  { label: "Browse videos", href: "/premade-videos" },
                  {
                    label: "Book a call",
                    href: "/book-a-call",
                    variant: "ghost",
                  },
                ]}
              />
            </Block>
          </div>

          <div className="mt-12">
            <GroupTitle id="library" label="LibraryGrid" />
            <Block
              title="Filter tabs + card grid"
              caption="Tab row with a sliding layoutId indicator; the grid reflows with a layout animation on filter change. Used on Premade Videos (buy) and Our Work (showcase, no price/buy). Switch tabs to see the reflow."
            >
              <LibraryGridDemo />
            </Block>
          </div>
        </div>

        {/* ============ COMPONENTS ============ */}
        <div className="mt-20 mb-10">
          <GroupTitle id="components" label="Components" />

          <div className="mt-2">
            <h3
              id="videocard"
              className="scroll-mt-20 font-display text-xl font-bold tracking-[-0.5px]"
            >
              VideoCard · the revenue centerpiece
            </h3>
            <Block
              title="Grid · preview, play, toggle, buy"
              caption="Muted preview loop by default; the play button opens a popup player with sound (see before you buy). For these library cards the popup includes a Buy now line under the video. Gold category tag, price + one-time, animated What's included toggle, full-width Buy now to the order subdomain. Hover lifts with a blue glow and cursor-follow glow."
            >
              <VideoCardDemo />
            </Block>
          </div>

          <Block
            title="DualCtaCard · blue and ghost"
            caption="Two-up choice card used in the Hero. Glassy surface, hover lift. The blue (primary) variant carries the diagonal arrow."
          >
            <div className="grid max-w-[540px] grid-cols-1 gap-3 sm:grid-cols-2">
              <DualCtaCard
                title="Browse the library"
                body="Ready-made videos, branded to you. From $495."
                cta={{ label: "Browse videos", href: "/premade-videos" }}
                variant="blue"
              />
              <DualCtaCard
                title="Not sure what fits?"
                body="Get a quick recommendation, no pressure."
                cta={{ label: "Book a call", href: "/book-a-call" }}
                variant="ghost"
              />
            </div>
          </Block>

          <Block
            title="FeatureCard · with icon (bottom-anchored), without, and linked"
            caption="With an icon: blue-gradient tile up top, title and body anchored to the bottom for a generous gap. Without an icon: a compact card for problem / comparison grids. With an href the whole card is a link (home service cards), hovering blue."
          >
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <FeatureCard
                icon={Eye}
                title="Preview before you pay"
                body="Watch the exact video first. No guesswork, no surprises, no risk."
              />
              <FeatureCard
                icon={ShieldCheck}
                title="Fully white-label"
                body="Your brand front and center. Ours never appears anywhere."
              />
              <FeatureCard
                icon={Zap}
                title="Ready in days"
                body="Branded and delivered fast, so you can launch this week."
              />
            </div>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <FeatureCard
                title="Weak demos"
                body="A rough screen recording makes a powerful platform feel like a hobby."
              />
              <FeatureCard
                title="Slow and costly"
                body="Custom production takes weeks and drains budget, so the video never gets made."
              />
              <FeatureCard
                title="Off-brand look"
                body="Generic videos do not match your brand, so your SaaS looks like everyone else."
              />
            </div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3">
              <FeatureCard
                icon={MonitorPlay}
                href="/premade-videos"
                title="Linked card"
                body="Whole card is a link, hovering blue. Used for the home service cards."
              />
            </div>
          </Block>

          <Block
            title="StatStrip · count-up on scroll"
            caption="Big gradient numbers with gold plus/percent marks, divided into columns. Numbers count up from zero when scrolled into view. Supports raw placeholder strings too."
          >
            <StatStrip
              stats={[
                { value: 2500, suffix: "+", label: "Agencies served" },
                { value: 98, suffix: "%", label: "Satisfaction score" },
                { value: 400, suffix: "+", label: "Videos in the library" },
                { display: "3", suffix: " day", label: "Turnaround" },
              ]}
            />
          </Block>

          <Block
            title="TierCard · Video Editing pricing (locked)"
            caption="Gradient current price, bordered price box with the was price struck through in muted gray (never red), Includes list with gold ring bullets, CTA anchored at the bottom. All cards are equal height with hover lift. The popular tier has an animated rotating blue→gold border, a gold corner glow, a blue-tinted price box, and a floating badge that is absolutely positioned so it never changes the card height. The rotation stops under reduced motion."
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {editingTiers.map((tier) => (
                <TierCard key={tier.name} tier={tier} />
              ))}
            </div>
          </Block>

          <Block
            title="FaqItem · animated toggle"
            caption="Click to expand, rotating gold chevron, animated height. The first is shown open by default."
          >
            <div className="flex flex-col gap-2.5">
              <FaqItem
                question="Can I see a video before I buy?"
                answer="Always. You preview the exact video first. What you watch is what you get, branded to you."
                defaultOpen
              />
              <FaqItem
                question="Are the videos really branded to me?"
                answer="Yes. Your logo, your colors, and a voiceover that names your brand. It looks made for you, because it is."
              />
              <FaqItem
                question="How fast is delivery?"
                answer="Most videos are branded and delivered within days of your order."
              />
            </div>
          </Block>

          <Block
            title="Testimonial · placeholder data"
            caption="Gold stars, quote, author with avatar (initials fallback until photos land). Real quotes come from Extendly clients."
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Testimonial
                quote="Real Extendly client quote, up to 30 words."
                name="Placeholder Name"
                role="Role, Company"
              />
              <Testimonial
                quote="Real Extendly client quote, up to 30 words."
                name="Placeholder Name"
                role="Role, Company"
              />
            </div>
          </Block>

          <Block
            title="SampleCard · placeholder showcase"
            caption="Free-form tag + title over a gradient thumb. Used for custom sample work and editing sample edits until real media lands."
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <SampleCard tag="Custom" title="Sample project" />
              <SampleCard tag="Long-form" title="Sample edit" />
              <SampleCard tag="Tutorial" title="Sample edit" />
            </div>
          </Block>

          <Block
            title="ContactForm"
            caption="Accessible labelled fields (Name, Email, Message) with validation and a confirmation state on submit. TODO: wire to a backend/email service."
          >
            <ContactForm />
          </Block>
        </div>
      </div>
    </div>
  );
}

function Token({
  label,
  className,
  style,
}: {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="w-32">
      <div className={`h-14 rounded-xl ${className ?? ""}`} style={style} />
      <div className="mt-1.5 font-mono text-[10.5px] text-secondary">
        {label}
      </div>
    </div>
  );
}
