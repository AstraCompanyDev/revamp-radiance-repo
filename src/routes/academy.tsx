import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Compass,
  Download,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LifeBuoy,
  Megaphone,
  Play,
  ShoppingBag,
  Sparkles,
  Vote,
} from "lucide-react";

import heroAurora from "@/assets/hero-aurora-light.jpg";
import peopleCollab from "@/assets/people-collab.jpg";
import peopleVote from "@/assets/people-vote.jpg";
import peopleLearn from "@/assets/people-learn.jpg";
import peopleRules from "@/assets/people-rules.jpg";
import learningFoundation from "@/assets/learning-foundation.jpg.asset.json";
import uTopiaWallet from "@/assets/u-topia-wallet.png.asset.json";
import stakeholderGathering from "@/assets/stakeholder-gathering.jpg.asset.json";
import youEvent from "@/assets/you-event.jpg.asset.json";
import uCenterSpeaker from "@/assets/u-center-speaker-v2.png.asset.json";
import daoAudience from "@/assets/dao-audience.jpg.asset.json";
import logoDark from "@/assets/logo-dark.png.asset.json";
import futureOfMoneyThumb from "@/assets/future-of-money-thumb.jpg.asset.json";

export const Route = createFileRoute("/academy")({
  head: () => ({
    meta: [
      { title: "U CENTER Academy — Learning Modules & Live Sessions" },
      {
        name: "description",
        content:
          "The U CENTER Academy portal: learning modules on money, blockchain and AI, live session replays, downloadable material and community sessions.",
      },
      { property: "og:title", content: "U CENTER Academy — Learning Modules & Live Sessions" },
      {
        property: "og:description",
        content:
          "Master money, blockchain and AI at your own pace with the U CENTER Academy learning modules.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Academy,
});

const SIDEBAR_MAIN = [
  { label: "Explore", icon: Compass },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Purchase", icon: ShoppingBag },
  { label: "Academy", icon: GraduationCap, active: true },
  { label: "Support", icon: LifeBuoy },
  { label: "DAO Vote", icon: Vote, badge: "New" },
];

const SIDEBAR_CHANNELS = [
  { label: "Announcement", icon: Megaphone },
  { label: "U-Topia Materials", icon: FileText },
  { label: "Events Calendar", icon: BookOpen },
];

const MODULES = [
  {
    index: "Module 1",
    title: "Crypto & the Future of Finance",
    body:
      "The understanding path to modern money, digital assets and the new open economy. Start with the essentials of how the world of money works — one lesson at a time.",
    tags: ["Crypto", "Blockchain", "Digital Assets", "Financial Freedom"],
    lessons: 12,
    open: true,
  },
  {
    index: "Module 2",
    title: "Blockchain Fundamentals",
    body:
      "The rails beneath everything: consensus, wallets, distributed ledgers and why trustless systems change what is possible.",
    tags: ["Self-Custody", "Nodes", "Ledgers", "Smart Contracts"],
    lessons: 9,
  },
  {
    index: "Module 3",
    title: "AI for Business Owners",
    body:
      "Practical prompts, workflows and agents that give small teams the leverage that used to belong only to enterprises.",
    tags: ["Prompts", "Agents", "Automation", "Workflow"],
    lessons: 8,
  },
];

const MODULE_LESSONS = [
  {
    title: "The Origin and Purpose of Money",
    caption: "Foundations of Financial Freedom",
    image: uTopiaWallet.url,
  },
  {
    title: "Meet the Blueprint: Why Cornering Assets is the Ultimate Crypto Owner's Hack",
    caption: "The future belongs to the youth",
    image: uCenterSpeaker.url,
  },
  {
    title: "The Power of Hard Supply: Scarcity, Mining and Value",
    caption: "Understanding digital scarcity",
    image: peopleRules,
  },
];

const RAILS = [
  {
    title: "Upcoming Content",
    items: [
      { title: "The Future of Money", caption: "Banking Continues to Churn", image: futureOfMoneyThumb.url },
      { title: "AI for Business: Build Your AI Workforce", caption: "Support Teams and Trends", image: peopleCollab },
      { title: "Build Your First AI Agent", caption: "Managing Sessions in Scale Initiatives", image: peopleRules },
    ],
  },
  {
    title: "Previous Live Sessions",
    items: [
      { title: "Live Event — Saturday July 4th", caption: "Building Markets in Plain Language", image: stakeholderGathering.url },
      { title: "The Money App: The Banks Fear", caption: "Cornering DAO Capital Fundamentals", image: youEvent.url },
      { title: "The Future of Banking", caption: "Rethinking Rails, Trusting the Ledger", image: daoAudience.url },
    ],
  },
  {
    title: "More from U CENTER",
    items: [
      { title: "First Look — U-TOPIA", caption: "U-topia Platform Overview", image: uTopiaWallet.url },
      { title: "Community Session with Maya Nicks", caption: "Getting Started with U CENTER", image: learningFoundation.url },
      { title: "U CENTER Compensation Plan Explained", caption: "Governance Explained in Full", image: peopleVote },
    ],
  },
  {
    title: "Latest Content",
    items: [
      { title: "Blockchain Basics", caption: "The Fundamentals Course", image: peopleLearn },
      { title: "Business in Web 3.0", caption: "Commerce When the Rails Change", image: peopleCollab },
      { title: "The Future of the Internet", caption: "What Ownership Really Means Online", image: peopleRules },
    ],
  },
];

const DOWNLOADS = [
  { title: "30 AI Prompts for Business Owners", caption: "PDF · Prompt library" },
  { title: "The Future of Money Report", caption: "PDF · Research brief" },
  { title: "Real-World Asset Tokenization Guide", caption: "PDF · Playbook" },
];

function Academy() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <img
          src={heroAurora}
          alt=""
          aria-hidden
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-card/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoDark.url}
              alt="u.center"
              className="h-7 w-auto dark:invert"
            />
            <span className="text-xs font-medium text-muted-foreground">Beta</span>
          </Link>

          <div className="hidden flex-1 items-center md:flex">
            <label className="relative w-full max-w-md">
              <span className="sr-only">Search the academy</span>
              <input
                type="search"
                placeholder="Search modules, sessions, downloads…"
                className="w-full rounded-full border border-border bg-background/70 px-4 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
              />
            </label>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              Home
            </Link>
            <span className="rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-primary-foreground">
              Sign In
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1500px] gap-8 px-4 py-8 lg:px-8">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 lg:block">
          <div className="sticky top-24 space-y-8 rounded-3xl border border-border bg-card/70 p-4 backdrop-blur-xl">
            <nav>
              <ul className="space-y-1">
                {SIDEBAR_MAIN.map((item) => (
                  <li key={item.label}>
                    <a
                      href="#"
                      className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                        item.active
                          ? "bg-brand-gradient text-primary-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                      {item.badge ? (
                        <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-secondary-foreground">
                          {item.badge}
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Channels
              </p>
              <ul className="mt-2 space-y-1">
                {SIDEBAR_CHANNELS.map((item) => (
                  <li key={item.label}>
                    <a
                      href="#"
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-border bg-background/60 p-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-gradient text-xs font-bold text-primary-foreground">
                S
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Sagar</p>
                <p className="truncate text-xs text-muted-foreground">Academy member</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 space-y-14">
          {/* Featured player */}
          <section className="animate-rise overflow-hidden rounded-[2rem] border border-border bg-card/80 backdrop-blur-xl">
            <div className="relative aspect-[16/7] w-full">
              <img
                src={uCenterSpeaker.url}
                alt="Welcome session host introducing the U CENTER Academy portal"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6 md:p-8">
                <div className="max-w-xl">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                    <Sparkles className="h-3 w-3" /> Featured
                  </span>
                  <h1 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    Learn <span className="text-brand-gradient">U.Center</span> and manage your
                    portfolio like a professional
                  </h1>
                  <div className="mt-4 flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]">
                      <Play className="h-4 w-4" /> Watch Now
                    </button>
                    <span className="text-xs text-muted-foreground">Module 1 · 12 lessons</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Learning modules */}
          <section>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
                  <GraduationCap className="h-5 w-5 text-primary" /> Learning Modules
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Master money, blockchain & AI at your own pace.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {MODULES.map((mod) => (
                <article
                  key={mod.title}
                  className="rounded-3xl border border-border bg-card/75 p-6 backdrop-blur-xl md:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="max-w-2xl">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                        {mod.index}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-semibold tracking-tight md:text-xl">
                        {mod.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {mod.body}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {mod.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      {mod.lessons} lessons
                    </span>
                  </div>

                  {mod.open ? (
                    <>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {MODULE_LESSONS.map((lesson) => (
                          <a
                            key={lesson.title}
                            href="#"
                            className="group overflow-hidden rounded-2xl border border-border bg-background/70 transition-transform hover:-translate-y-1"
                          >
                            <div className="relative aspect-[16/10] overflow-hidden">
                              <img
                                src={lesson.image}
                                alt={lesson.caption}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <span className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded-full bg-brand-gradient text-primary-foreground">
                                <Play className="h-3.5 w-3.5" />
                              </span>
                            </div>
                            <div className="p-4">
                              <p className="text-sm font-semibold leading-snug">{lesson.title}</p>
                              <p className="mt-1 text-xs text-muted-foreground">{lesson.caption}</p>
                            </div>
                          </a>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                        <p className="text-xs text-muted-foreground">Showing 3 of 12 lessons</p>
                        <div className="flex gap-2">
                          <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                            <ChevronLeft className="h-3.5 w-3.5" /> Previous
                          </button>
                          <button className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground">
                            Next <ChevronRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          {/* Welcome */}
          <section className="grid items-stretch gap-6 rounded-[2rem] border border-border bg-card/75 p-6 backdrop-blur-xl md:grid-cols-2 md:p-8">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={learningFoundation.url}
                alt="Host presenting a welcome session for the U CENTER Academy"
                className="h-full w-full object-cover"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-xs font-semibold">
                00:22
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                For Members Only
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                Welcome to U CENTER Academy Portal
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Your gateway to markets, finance, blockchain and crypto currency. U-topia experts do
                courses and plainly guide you into the knowledge and disciplined mindset it takes to
                own the financial digital assets and wealth management path.
              </p>
              <a
                href="#"
                className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Explore Essentials <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* Content rails */}
          {RAILS.map((rail) => (
            <section key={rail.title}>
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display text-lg font-semibold tracking-tight md:text-xl">
                  {rail.title}
                </h2>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  View all <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {rail.items.map((item) => (
                  <a
                    key={item.title}
                    href="#"
                    className="group overflow-hidden rounded-2xl border border-border bg-card/75 backdrop-blur-xl transition-transform hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-background/85 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                        New
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-semibold leading-snug">{item.title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{item.caption}</p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}

          {/* Downloads */}
          <section>
            <h2 className="font-display text-lg font-semibold tracking-tight md:text-xl">
              Downloadable Material
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DOWNLOADS.map((doc) => (
                <a
                  key={doc.title}
                  href="#"
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-card/75 p-5 backdrop-blur-xl transition-transform hover:-translate-y-1"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-primary-foreground">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-snug">{doc.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{doc.caption}</p>
                  </div>
                  <Download className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </a>
              ))}
            </div>
          </section>

          <section className="overflow-hidden rounded-[2rem] border border-border bg-card/80 p-8 text-center backdrop-blur-xl md:p-12">
            <span className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              The Ecosystem
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Keep <span className="text-brand-gradient">Learning</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Understanding comes first — and everything else follows. New modules, live sessions and
              community calls drop every week.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Back to U CENTER <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
