import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  Gem,
  Landmark,
  Link2,
  Medal,
  ScrollText,
  Sparkles,
  Trophy,
  Users,
  Vote,
  Waves,
} from "lucide-react";

import heroAurora from "@/assets/hero-aurora-light.jpg";
import peopleCollab from "@/assets/people-collab.jpg";
import peopleVote from "@/assets/people-vote.jpg";
import peopleLearn from "@/assets/people-learn.jpg";
import peopleRules from "@/assets/people-rules.jpg";

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

const ECOSYSTEM = [
  {
    eyebrow: "The Headwater",
    title: "U-TOPIA",
    body: "The family of companies built on one belief: business should serve everyone it touches.",
    icon: Waves,
    image: peopleRules,
    alt: "Two colleagues shaking hands in a bright office",
  },
  {
    eyebrow: "The Learning Home",
    title: "U CENTER",
    body: "Governance, education, and community infrastructure. Where understanding comes first and everyone learns to shape what gets built.",
    icon: BookOpen,
    featured: true,
    image: peopleCollab,
    alt: "A diverse group of members collaborating around a laptop",
  },
  {
    eyebrow: "The Stakeholder",
    title: "YOU",
    body: "A member, a voter, an owner — not a customer to extract value from.",
    icon: Users,
    image: peopleLearn,
    alt: "A member learning on a tablet by a sunlit window",
  },
];

const DAO_CARDS = [
  {
    title: "Open Rules",
    body: "Transparent rules, encoded and shared — no hidden terms, no closed-door changes.",
    icon: ScrollText,
    image: peopleRules,
    alt: "Members agreeing on shared rules",
  },
  {
    title: "Community Votes",
    body: "Decisions are made by members, not executives. One community, one voice.",
    icon: Vote,
    image: peopleVote,
    alt: "A community raising hands to vote in a bright hall",
  },
  {
    title: "Permanent Record",
    body: "Every transaction lives on a public ledger, so the record can be checked by anyone.",
    icon: Link2,
    image: peopleCollab,
    alt: "Members reviewing records together on a laptop",
  },
];


const TIERS = [
  {
    name: "Starter",
    price: "$25",
    icon: Medal,
    features: ["Community Platform Access (Lifetime)", "U Academy (1 Month)"],
  },
  {
    name: "Bronze",
    price: "$100",
    icon: Medal,
    features: [
      "Community Platform Access (Lifetime)",
      "U Academy (4 Months)",
      "Earn Dividends",
      "1,000 Points",
      "U Academy Pre-Sale Bonus (1 Month)",
    ],
  },
  {
    name: "Silver",
    price: "$250",
    icon: Award,
    features: [
      "Community Platform Access (Lifetime)",
      "U Academy (12 Months)",
      "Earn Dividends",
      "3,000 Points",
      "U Academy Pre-Sale Bonus (3 Months)",
    ],
  },
  {
    name: "Gold",
    price: "$500",
    icon: Trophy,
    popular: true,
    features: [
      "Community Platform Access (Lifetime)",
      "U Career Access (12 Months)",
      "U Academy (24 Months)",
      "3 Referrals — 40 Users (12 Months)",
      "Earn Dividends",
      "5,000 Points",
      "U Academy Pre-Sale Bonus (6 Months)",
    ],
  },
  {
    name: "Platinum",
    price: "$1,000",
    icon: Trophy,
    features: [
      "Community Platform Access (Lifetime)",
      "U Career Access (24 Months)",
      "U Academy (36 Months)",
      "5 Referrals — Unlimited (24 Months)",
      "Unlimited U-CENTER Access",
      "U-AI (12 Months)",
      "Earn Dividends",
      "15,000 Points",
      "U Academy Pre-Sale Bonus (12 Months)",
    ],
  },
  {
    name: "Diamond",
    price: "$2,500",
    icon: Gem,
    features: [
      "Community Platform Access (Lifetime)",
      "U Career Access (Lifetime)",
      "U Academy (60 Months)",
      "10 Referrals — Unlimited (60 Months)",
      "Unlimited U-CENTER Access (VIP)",
      "U-AI (24 Months)",
      "Earn Dividends",
      "30,000 Points",
      "U Academy Pre-Sale Bonus (24 Months)",
    ],
  },
];

const LEARNING = [
  {
    title: "How Wealth Flows",
    body: "How value moves through companies, markets, and communities.",
    icon: Waves,
  },
  {
    title: "Governance & DAOs",
    body: "What decentralised governance means — and how communities hold power.",
    icon: Landmark,
  },
  {
    title: "Stakeholder Thinking",
    body: "Why business is accountable to everyone it touches, not only shareholders.",
    icon: Users,
  },
  {
    title: "Blockchain Basics",
    body: "The open ledger, explained in plain language.",
    icon: Link2,
  },
];

function SectionBadge({ children }: { children: string }) {
  return (
    <span className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
      <Sparkles className="size-3 text-primary" />
      {children}
    </span>
  );
}

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
        {/* Hero */}
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

        {/* Meet U-TOPIA */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>The Ecosystem</SectionBadge>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Meet <span className="text-brand-gradient">U-TOPIA</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              A family of companies built on one belief: business should serve everyone it touches.
              Each is its own tributary, all flowing into the same shared home —{" "}
              <span className="font-semibold text-foreground">U CENTER</span>.
            </p>
            <blockquote className="glass-panel mt-10 max-w-2xl rounded-2xl px-8 py-6 font-display text-base font-medium italic md:text-lg">
              Built to flow value toward people — not extract it from them.
            </blockquote>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-center">
            {ECOSYSTEM.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`glass-panel relative overflow-hidden rounded-3xl ${
                    item.featured ? "md:-my-6" : ""
                  }`}
                  style={item.featured ? { boxShadow: "var(--shadow-glow)" } : undefined}
                >
                  {item.featured && (
                    <div
                      aria-hidden="true"
                      className="bg-brand-gradient absolute inset-x-0 top-0 z-10 h-1"
                    />
                  )}
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.alt}
                      loading="lazy"
                      width={1200}
                      height={912}
                      className={`w-full object-cover ${item.featured ? "h-56" : "h-44"}`}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/10 to-transparent"
                    />
                  </div>
                  <div className={`relative ${item.featured ? "p-9 pt-5" : "p-7 pt-5"}`}>
                    <span className="bg-brand-gradient grid size-10 place-items-center rounded-xl text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </article>

              );
            })}
          </div>
        </section>

        {/* What is a DAO */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex flex-col items-center text-center">
              <SectionBadge>Understanding the Foundation</SectionBadge>
              <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
                What Is a <span className="text-brand-gradient">DAO?</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
                A Decentralized Autonomous Organization — a community that runs itself by shared,
                transparent rules.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {DAO_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="glass-panel group rounded-3xl p-7 transition-transform hover:-translate-y-1"
                  >
                    <span className="bg-brand-gradient grid size-11 place-items-center rounded-xl text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-6 font-display text-xl font-bold tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {card.body}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Choose Your Path */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Membership Packages</SectionBadge>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Choose Your <span className="text-brand-gradient">Path</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              Select the package that fits your goals. Earn dividends, get rewarded for invites, and
              unlock exclusive benefits.
            </p>
            <p
              className="bg-brand-gradient mt-8 rounded-full px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Starting in October 2026
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TIERS.map((tier) => {
              const Icon = tier.icon;
              return (
                <article
                  key={tier.name}
                  className={`relative flex flex-col overflow-hidden rounded-3xl border bg-card ${
                    tier.popular ? "border-primary/50" : "border-border"
                  }`}
                  style={tier.popular ? { boxShadow: "var(--shadow-glow)" } : undefined}
                >
                  {tier.popular && (
                    <span className="bg-brand-gradient absolute right-5 top-5 z-10 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground">
                      Most Popular
                    </span>
                  )}
                  <div className="bg-brand-gradient p-7 text-primary-foreground">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]">
                        {tier.name}
                      </span>
                      {!tier.popular && <Icon className="size-5 opacity-90" />}
                    </div>
                    <p className="mt-6 flex items-end gap-2">
                      <span className="font-display text-4xl font-bold tracking-tight">
                        {tier.price}
                      </span>
                      <span className="pb-1 text-xs font-medium uppercase tracking-[0.16em] opacity-85">
                        Package Price
                      </span>
                    </p>
                  </div>
                  <ul className="flex flex-1 flex-col gap-3 p-7">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        {/* Stakeholder Capitalism */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex flex-col items-center text-center">
              <SectionBadge>The Big Idea</SectionBadge>
              <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
                Stakeholder Capitalism:
                <br />
                <span className="text-brand-gradient">An Economy That Works for Everyone</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-2 md:items-center">
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  For decades, business served only its shareholders. Stakeholder capitalism is the
                  alternative — a business responsible to everyone it affects.
                </p>
                <p>
                  But statements aren't systems.{" "}
                  <span className="font-semibold text-foreground">U CENTER</span> is the mechanism —
                  transparent, community-governed, automatic.
                </p>
              </div>

              <div className="glass-panel rounded-3xl p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  DAO Growth by 2030
                </p>
                <div className="mt-8 space-y-7">
                  <div>
                    <div className="flex items-end justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        2019
                      </span>
                      <span className="font-display text-2xl font-bold">
                        21<span className="text-primary">x</span>
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-muted">
                      <div className="bg-brand-gradient h-full w-[12%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-end justify-between">
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        2030
                      </span>
                      <span className="font-display text-3xl font-bold">
                        350<span className="text-primary">x</span>
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-muted">
                      <div className="bg-brand-gradient h-full w-full rounded-full" />
                    </div>
                  </div>
                </div>
                <p className="mt-7 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Projected global growth in DAO participation
                </p>
              </div>
            </div>

            <blockquote className="mx-auto mt-14 max-w-3xl text-center font-display text-lg font-medium italic text-balance md:text-xl">
              “Not whether business{" "}
              <span className="text-brand-gradient not-italic font-semibold">should</span> serve
              communities — but how we make sure it does.”
            </blockquote>
          </div>
        </section>

        {/* Learning is the foundation */}
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex flex-col items-center text-center">
            <SectionBadge>Education First</SectionBadge>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-5xl">
              Learning Is the <span className="text-brand-gradient">Foundation.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty">
              “I don't really understand how money works.” That's the starting line — and where U
              CENTER meets you.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEARNING.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="glass-panel rounded-3xl p-6 transition-transform hover:-translate-y-1"
                >
                  <span className="bg-brand-gradient grid size-10 place-items-center rounded-xl text-primary-foreground">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-6 font-display text-base font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative overflow-hidden border-t border-border">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{ backgroundImage: "var(--gradient-brand)", filter: "blur(120px)" }}
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-28 text-center">
            <a
              href="/"
              className="glass-panel rounded-full px-6 py-2 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
            >
              The Ecosystem
            </a>
            <h2 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              Come <span className="text-brand-gradient">Learn.</span>
              <br />
              The River Will Do the Rest.
            </h2>
            <p className="mt-5 text-base text-muted-foreground text-pretty">
              Join a community actively learning, building, and governing together.
            </p>
            <a
              href="/"
              className="bg-brand-gradient group mt-10 inline-flex items-center gap-3 rounded-full px-8 py-4 font-display text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              Sign In
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-8 max-w-xl text-xs leading-relaxed text-muted-foreground">
              Early access to U CENTER is opening in stages. Membership packages launch October
              2026.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="bg-brand-gradient grid size-8 place-items-center rounded-full font-display text-sm font-bold text-primary-foreground">
                u
              </span>
              <span className="font-display text-lg font-bold tracking-tight">u.center</span>
              <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Beta
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              The learning home of the U-TOPIA ecosystem, where understanding comes first, and
              governing is a shared responsibility.
            </p>
          </div>
          <div>
            <p className="font-display text-sm font-bold tracking-tight">Legal</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="/" className="transition-colors hover:text-foreground">
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a href="/" className="transition-colors hover:text-foreground">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border py-7 text-center text-xs text-muted-foreground">
          U CENTER — The Learning Home of the U-TOPIA Ecosystem. 2026
        </div>
      </footer>
    </div>
  );
}
