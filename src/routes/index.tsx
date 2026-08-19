import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import heroAurora from "@/assets/hero-aurora-light.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "U CENTER — The Learning Home of the U-TOPIA Ecosystem" },
      {
        name: "description",
        content:
          "Where understanding comes first — and everything else follows. Open governance, DAO treasury and education-first learning in the U-TOPIA ecosystem.",
      },
      { property: "og:title", content: "U CENTER — The Learning Home of the U-TOPIA Ecosystem" },
      {
        property: "og:description",
        content: "Where understanding comes first — and everything else follows.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV_LINKS = ["Home", "Privacy & Policy", "Terms & Conditions"];

const PILLARS = [
  { title: "Open", label: "Governance" },
  { title: "DAO", label: "Treasury" },
  { title: "Education", label: "First" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <nav className="glass-panel mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3">
          <a href="/" className="flex items-center gap-3">
            <span className="bg-brand-gradient grid size-8 place-items-center rounded-full font-display text-sm font-bold text-primary-foreground">
              u
            </span>
            <span className="font-display text-lg font-bold tracking-tight">u.center</span>
            <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Beta
            </span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href="/"
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    i === 0 ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="/"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Sign In
          </a>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <img
            src={heroAurora}
            alt=""
            width={1920}
            height={1088}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full object-cover opacity-90"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background"
          />

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 pb-28 pt-44 text-center">
            <div className="animate-rise glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-wide text-muted-foreground">
                The Learning Home of the U-TOPIA Ecosystem
              </span>
            </div>

            <h1 className="animate-rise mt-9 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[5.5rem]">
              Welcome to <span className="text-brand-gradient">U CENTER</span>
            </h1>

            <p className="animate-rise mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
              Where understanding comes first —{" "}
              <span className="text-brand-gradient font-semibold">
                and everything else follows.
              </span>
            </p>

            <a
              href="/"
              className="animate-rise bg-brand-gradient group mt-12 inline-flex items-center gap-3 rounded-full px-8 py-4 font-display text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Sign In
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative border-y border-border">
            <div className="mx-auto grid max-w-5xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {PILLARS.map((pillar) => (
                <div key={pillar.title} className="px-8 py-10 text-center">
                  <p className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                    {pillar.title}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {pillar.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24">
          <a
            href="/"
            className="glass-panel rounded-full px-6 py-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
          >
            The Ecosystem
          </a>
        </section>
      </main>
    </div>
  );
}
