import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  BookOpen,
  Compass,
  FileText,
  GraduationCap,
  LayoutDashboard,
  LifeBuoy,
  Megaphone,
  Play,
  Radio,
  ShoppingBag,
  Vote,
} from "lucide-react";

import heroAurora from "@/assets/hero-aurora-light.jpg";
import logoDark from "@/assets/logo-dark.png.asset.json";
import uCenterSpeaker from "@/assets/u-center-speaker-v2.png.asset.json";
import youEvent from "@/assets/you-event.jpg.asset.json";
import stakeholderGathering from "@/assets/stakeholder-gathering.jpg.asset.json";
import learningFoundation from "@/assets/learning-foundation.jpg.asset.json";
import daoAudience from "@/assets/dao-audience.jpg.asset.json";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore — U CENTER Discovery Feed" },
      {
        name: "description",
        content:
          "The official U CENTER discovery feed: announcements, exclusive events, trailers and updates published by the U CENTER team.",
      },
      { property: "og:title", content: "Explore — U CENTER Discovery Feed" },
      {
        property: "og:description",
        content:
          "Announcements, exclusive events and updates published by the U CENTER team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Explore,
});

const SIDEBAR_MAIN = [
  { label: "Explore", icon: Compass, active: true },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Purchase", icon: ShoppingBag },
  { label: "Academy", icon: GraduationCap, to: "/academy" as const },
  { label: "Support", icon: LifeBuoy },
  { label: "DAO Vote", icon: Vote, badge: "New" },
];

const SIDEBAR_CHANNELS = [
  { label: "Announcement", icon: Megaphone },
  { label: "U-Topia Materials", icon: FileText },
  { label: "Events Calendar", icon: BookOpen },
];

const FILTERS = ["All updates", "Announcement", "Exclusive Event", "Featured"];

const POSTS = [
  {
    tag: "Exclusive Event",
    date: "May 9, 2026",
    title: "Exclusive U Center Event – Continuing This Saturday",
    body:
      "You're invited to a private session as we unveil the next phase of U Center. This Saturday, we'll be giving a full overview of the U Center Beta, a powerful opportunity now opening to those ready to position themselves at the forefront of the next era of finance. We're also excited to be joined by Kyle Kemper, renowned blockchain advocate and President of U-Topia, who will be sharing insights on where this movement is heading and why this moment matters. Limited access. High signal. Real opportunity.",
    image: uCenterSpeaker.url,
    media: "poster" as const,
  },
  {
    tag: "Exclusive Event",
    date: "May 2, 2026",
    title: "This isn't a webinar. This is a signal",
    body:
      "A shift is happening in how money is owned, controlled, and moved and you're being invited to see it first. Join Emmanuel Quezada, Founder & CEO of U-Topia, for an exclusive global presentation unveiling a new standard for intelligent banking and real wealth control. This is early. This is private. This is where positioning begins.",
    image: youEvent.url,
    media: "poster" as const,
  },
  {
    tag: "Featured",
    date: "Apr 30, 2026",
    title: "U.Center Trailer",
    body: "Get an exclusive look at U.Center and discover what's coming next.",
    image: daoAudience.url,
    media: "video" as const,
    duration: "00:43",
  },
  {
    tag: "Announcement",
    date: "Apr 29, 2026",
    title: "Welcome to U-topia",
    body: "Discover how we're building the bank of the future for our shareholders.",
    image: learningFoundation.url,
    media: "video" as const,
    duration: "01:31",
  },
  {
    tag: "Announcement",
    date: "Apr 22, 2026",
    title: "Stakeholder capitalism, in one room",
    body:
      "A look back at our latest community gathering — members, builders and partners meeting the people behind the movement.",
    image: stakeholderGathering.url,
    media: "poster" as const,
  },
];

function Explore() {
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
              <span className="sr-only">Search updates</span>
              <input
                type="search"
                placeholder="Search updates, events, announcements…"
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
                      {item.to ? (
                        <Link to={item.to} className={className}>
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

            <div className="rounded-2xl border border-border bg-background/60 p-3">
              <p className="flex items-center gap-2 text-sm font-semibold">
                <Radio className="h-4 w-4 text-primary" /> Official channel
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Only the U CENTER team publishes to this feed. Read-only for members.
              </p>
            </div>
          </div>
        </aside>

        {/* Feed */}
        <main className="mx-auto min-w-0 flex-1 space-y-6 lg:max-w-3xl">
          <section className="animate-rise rounded-[2rem] border border-border bg-card/75 p-6 backdrop-blur-xl md:p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <Compass className="h-3 w-3" /> Discovery Feed
            </span>
            <h1 className="mt-3 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Updates from <span className="text-brand-gradient">U CENTER</span>
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Announcements, exclusive events and releases — published by the U CENTER team. This
              feed is read-only: members follow along, the company posts.
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {FILTERS.map((filter, i) => (
                <li key={filter}>
                  <button
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                      i === 0
                        ? "bg-brand-gradient text-primary-foreground"
                        : "border border-border bg-background/70 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {filter}
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {POSTS.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[2rem] border border-border bg-card/75 backdrop-blur-xl transition-transform hover:-translate-y-0.5"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                {post.media === "video" ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
                    <button
                      aria-label={`Play ${post.title}`}
                      className="absolute inset-0 grid place-items-center"
                    >
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-gradient text-primary-foreground shadow-lg transition-transform hover:scale-105">
                        <Play className="h-5 w-5" />
                      </span>
                    </button>
                    <span className="absolute bottom-3 right-3 rounded-full bg-background/85 px-2.5 py-1 text-[11px] font-semibold text-foreground">
                      {post.duration}
                    </span>
                  </>
                ) : null}
              </div>

              <div className="p-6 md:p-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                    {post.tag}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                  <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <BadgeCheck className="h-4 w-4 text-primary" /> U CENTER
                  </span>
                </div>

                <h2 className="mt-3 font-display text-lg font-semibold tracking-tight md:text-xl">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.body}</p>
              </div>
            </article>
          ))}

          <p className="pb-6 text-center text-xs text-muted-foreground">
            You're all caught up — new updates are posted by the U CENTER team.
          </p>
        </main>
      </div>
    </div>
  );
}
