import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Backpack,
  Calendar,
  Clock,
  Compass,
  FileText,
  Gamepad2,
  Gift,
  GraduationCap,
  LayoutDashboard,
  LifeBuoy,
  Megaphone,
  Play,
  Rocket,
  ShoppingBag,
  Sparkles,
  Star,
  Trophy,
  Vote,
} from "lucide-react";

import heroAurora from "@/assets/hero-aurora-light.jpg";
import logoDark from "@/assets/logo-dark.png.asset.json";
import futureOfMoneyThumb from "@/assets/future-of-money-thumb.jpg.asset.json";
import aiForBusinessThumb from "@/assets/ai-for-business-thumb.jpg.asset.json";
import buildYourFirstAIAgentThumb from "@/assets/build-your-first-ai-agent-thumb.jpg.asset.json";
import blockchainBasicsThumb from "@/assets/blockchain-basics-thumb.png.asset.json";
import businessWeb3Thumb from "@/assets/business-web3-thumb.png.asset.json";
import futureInternetThumb from "@/assets/future-internet-thumb.png.asset.json";
import uCenterSpeaker from "@/assets/u-center-speaker-v2.png.asset.json";
import youEvent from "@/assets/you-event.jpg.asset.json";
import stakeholderGathering from "@/assets/stakeholder-gathering.jpg.asset.json";
import daoAudience from "@/assets/dao-audience.jpg.asset.json";

export const Route = createFileRoute("/kids")({
  head: () => ({
    meta: [
      { title: "U CENTER Kids — Upcoming Adventures & Fun Events" },
      {
        name: "description",
        content:
          "A kid-friendly space to explore what's coming next on U CENTER: new lessons, events, games, and adventures.",
      },
      { property: "og:title", content: "U CENTER Kids — Upcoming Adventures & Fun Events" },
      {
        property: "og:description",
        content: "Discover what's coming next on U CENTER: new lessons, events, and adventures made for kids.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Kids,
});

const SIDEBAR_MAIN = [
  { label: "Explore", icon: Compass, href: "/explore" },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Purchase", icon: ShoppingBag },
  { label: "Academy", icon: GraduationCap, href: "/academy" },
  { label: "Kids Zone", icon: Gamepad2, active: true },
  { label: "Support", icon: LifeBuoy },
  { label: "DAO Vote", icon: Vote, badge: "New" },
];

const SIDEBAR_CHANNELS = [
  { label: "Announcement", icon: Megaphone },
  { label: "U-Topia Materials", icon: FileText },
  { label: "Events Calendar", icon: Calendar },
];

const UPCOMING_EVENTS = [
  {
    title: "The Future of Money",
    caption: "Live lesson · Saturday 10 AM",
    date: "Sep 5, 2026",
    image: futureOfMoneyThumb.url,
    badge: "Live Soon",
    badgeColor: "bg-orange-100 text-orange-600",
  },
  {
    title: "AI for Business: Build Your AI Workforce",
    caption: "Special workshop for young creators",
    date: "Sep 12, 2026",
    image: aiForBusinessThumb.url,
    badge: "Workshop",
    badgeColor: "bg-purple-100 text-purple-600",
  },
  {
    title: "Build Your First AI Agent",
    caption: "Hands-on coding adventure",
    date: "Sep 19, 2026",
    image: buildYourFirstAIAgentThumb.url,
    badge: "Coding",
    badgeColor: "bg-blue-100 text-blue-600",
  },
  {
    title: "Community Fun Day",
    caption: "Games, quizzes & prizes",
    date: "Sep 26, 2026",
    image: stakeholderGathering.url,
    badge: "Event",
    badgeColor: "bg-green-100 text-green-600",
  },
];

const NEW_LESSONS = [
  {
    title: "Blockchain Basics",
    caption: "Learn how blocks connect like digital LEGO",
    image: blockchainBasicsThumb.url,
    icon: Star,
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    title: "Business in Web 3.0",
    caption: "How kids can build online businesses",
    image: businessWeb3Thumb.url,
    icon: Rocket,
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    title: "The Future of the Internet",
    caption: "Own your stuff online",
    image: futureInternetThumb.url,
    icon: Sparkles,
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

const FUN_ACTIVITIES = [
  {
    title: "Treasure Hunt",
    body: "Solve puzzles and find hidden U-TOPIA coins across the platform.",
    icon: Gift,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Vote on a Mascot",
    body: "Help us pick the official U CENTER kids mascot. Your vote counts!",
    icon: Vote,
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    title: "Build a Wallet",
    body: "Create your own digital piggy bank and learn how money moves.",
    icon: Backpack,
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
];

function Kids() {
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
            <img src={logoDark.url} alt="u.center Beta" className="h-7 w-auto dark:invert" />
          </Link>

          <div className="hidden flex-1 items-center md:flex">
            <label className="relative w-full max-w-md">
              <span className="sr-only">Search kids adventures</span>
              <input
                type="search"
                placeholder="Search upcoming adventures, lessons, events…"
                className="w-full rounded-full border border-border bg-background/70 px-4 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/50"
              />
            </label>
          </div>

          <div className="flex items-center gap-3">
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
                {SIDEBAR_MAIN.map((item) => {
                  const className = `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-brand-gradient text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`;
                  return (
                    <li key={item.label}>
                      {"href" in item ? (
                        <Link to={item.href as string} className={className}>
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </Link>
                      ) : (
                        <a href="#" className={className}>
                          <item.icon className="h-4 w-4" />
                          {item.label}
                          {item.badge ? (
                            <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-secondary-foreground">
                              {item.badge}
                            </span>
                          ) : null}
                        </a>
                      )}
                    </li>
                  );
                })}
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

            <div className="rounded-2xl border border-border bg-gradient-to-br from-violet-50 to-purple-50 p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-purple-700">
                <Trophy className="h-4 w-4 text-purple-600" /> Level Up!
              </p>
              <p className="mt-1 text-xs leading-relaxed text-purple-600/80">
                Complete lessons and earn points to unlock cool rewards.
              </p>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1 space-y-10">
          {/* Hero */}
          <section className="animate-rise overflow-hidden rounded-[2.5rem] border border-border bg-card/80 p-8 backdrop-blur-xl md:p-12">
            <div className="flex flex-col items-center text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-purple-600">
                <Gamepad2 className="h-4 w-4" /> Kids Zone
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-balance md:text-6xl">
                Your Next <span className="text-brand-gradient">Adventure</span> Awaits
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Discover new lessons, join fun events, and see what's coming next on U CENTER — made just for young explorers like you.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                  <Rocket className="h-4 w-4" /> 4 Upcoming Events
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                  <GraduationCap className="h-4 w-4" /> 3 New Lessons
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                  <Gift className="h-4 w-4" /> 3 Fun Activities
                </span>
              </div>
            </div>
          </section>

          {/* Upcoming Events */}
          <section>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
                  <Calendar className="h-5 w-5 text-primary" /> Coming Up Next
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Mark your calendar — these events are on the way.
                </p>
              </div>
              <a
                href="#"
                className="hidden items-center gap-1.5 text-sm font-medium text-primary hover:underline sm:inline-flex"
              >
                View all <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {UPCOMING_EVENTS.map((event) => (
                <article
                  key={event.title}
                  className="group overflow-hidden rounded-3xl border border-border bg-card/75 backdrop-blur-xl transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${event.badgeColor}`}>
                      {event.badge}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" /> {event.date}
                    </div>
                    <h3 className="mt-2 font-display text-base font-semibold leading-tight">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {event.caption}
                    </p>
                    <button className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80">
                      Remind me <Calendar className="h-3 w-3" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* New Lessons */}
          <section className="rounded-[2.5rem] border border-border bg-gradient-to-br from-violet-50/70 to-purple-50/70 p-6 backdrop-blur-xl md:p-10">
            <div className="flex flex-col items-center text-center">
              <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                Fresh Lessons <span className="text-brand-gradient">Coming Soon</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                New ways to learn about money, tech, and the future — built for curious minds.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {NEW_LESSONS.map((lesson) => {
                const Icon = lesson.icon;
                return (
                  <article
                    key={lesson.title}
                    className="group overflow-hidden rounded-3xl border border-border bg-card/90 p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                      <img
                        src={lesson.image}
                        alt={lesson.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className={`absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full ${lesson.bg}`}>
                        <Icon className={`h-4 w-4 ${lesson.color}`} />
                      </span>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-display text-lg font-semibold leading-tight">{lesson.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{lesson.caption}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                        <span className="rounded-full bg-secondary px-2.5 py-1">Coming Sep 2026</span>
                        <span className="rounded-full bg-secondary px-2.5 py-1">~15 min</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Fun Activities */}
          <section>
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight md:text-2xl">
                  <Sparkles className="h-5 w-5 text-primary" /> Fun Activities
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Play, vote, and explore while you learn.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {FUN_ACTIVITIES.map((activity) => {
                const Icon = activity.icon;
                return (
                  <article
                    key={activity.title}
                    className="flex flex-col rounded-3xl border border-border bg-card/75 p-6 backdrop-blur-xl transition-transform hover:-translate-y-1"
                  >
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl ${activity.bg}`}>
                      <Icon className={`h-6 w-6 ${activity.color}`} />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold">{activity.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{activity.body}</p>
                    <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
                      Join in <ArrowRight className="h-4 w-4" />
                    </button>
                  </article>
                );
              })}
            </div>
          </section>

          {/* Featured trailer */}
          <section className="overflow-hidden rounded-[2.5rem] border border-border bg-card/80 backdrop-blur-xl">
            <div className="relative aspect-[16/7] w-full">
              <img
                src={uCenterSpeaker.url}
                alt="Upcoming kids event preview"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              <div className="absolute inset-0 grid place-items-center">
                <button className="grid h-16 w-16 place-items-center rounded-full bg-brand-gradient text-primary-foreground shadow-lg transition-transform hover:scale-105">
                  <Play className="h-6 w-6" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  Watch the Kids Zone Trailer
                </h3>
                <p className="mt-2 max-w-xl text-sm text-muted-foreground">
                  A sneak peek at all the fun stuff heading your way.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
