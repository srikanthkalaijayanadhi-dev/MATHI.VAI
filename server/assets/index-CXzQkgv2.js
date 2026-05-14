import { G as jsxRuntimeExports } from "./server-BZBOQ4cu.js";
import { u as useAuth, L as Link } from "./router-Dvb5RR_f.js";
import { c as createLucideIcon } from "./createLucideIcon-BjWIYHQ9.js";
import { A as ArrowRight } from "./arrow-right-DHxPEBMn.js";
import { M as MessageCircle, I as Instagram } from "./message-circle-B5fklJt0.js";
import { Z as Zap } from "./zap-CFPG9K-a.js";
import { B as Bell } from "./bell-CBu3Jgn2.js";
import { U as Users } from "./users-Pg_qrBX8.js";
import { C as Check } from "./check-DtQasmlI.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16", key: "c24i48" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }]
];
const ChartColumn = createLucideIcon("chart-column", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
function HomePage() {
  const {
    user
  } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, { signedIn: !!user }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, { signedIn: !!user }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Features, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCta, { signedIn: !!user }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function SiteHeader({
  signedIn
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold", children: "L" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold tracking-tight", children: "LeadFlow" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground transition", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "hover:text-foreground transition", children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-foreground transition", children: "Pricing" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: signedIn ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition", children: "Open app" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "hidden sm:inline px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition", children: "Log in" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition", children: "Get started" })
    ] }) })
  ] }) });
}
function Hero({
  signedIn
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 -z-10 opacity-60", style: {
      background: "radial-gradient(60% 50% at 50% 0%, rgba(34,197,94,0.18), transparent 70%), radial-gradient(40% 40% at 80% 30%, rgba(225,48,108,0.10), transparent 70%)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-20 md:pt-24 md:pb-28 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-primary" }),
        "Built for small businesses"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]", children: [
        "Turn messages into ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "customers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground", children: "— automatically." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground", children: "LeadFlow captures every WhatsApp & Instagram message, organises them into one tidy inbox, and replies for you while you sleep." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: signedIn ? "/dashboard" : "/login", className: "w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition shadow-lg shadow-primary/20", children: [
          signedIn ? "Open dashboard" : "Start free",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#how", className: "w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-border bg-card text-foreground font-semibold hover:bg-secondary transition", children: "See how it works" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "No credit card required · 5-minute setup" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 md:mt-20 mx-auto max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PreviewMock, {}) })
    ] })
  ] });
}
function PreviewMock() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card glow-ring overflow-hidden text-left", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-4 py-2.5 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-destructive/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-warning/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2.5 h-2.5 rounded-full bg-primary/70" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-xs text-muted-foreground", children: "leadflow.app · Inbox" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 grid sm:grid-cols-3 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MockStat, { label: "Total", value: "248" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MockStat, { label: "New today", value: "12", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MockStat, { label: "Converted", value: "34" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-3 mt-2 space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MockLead, { name: "Priya Sharma", msg: "Is the silk saree available?", source: "whatsapp", time: "2m" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MockLead, { name: "@arjun.k", msg: "DM about your portfolio", source: "instagram", time: "14m" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MockLead, { name: "Rahul Mehta", msg: "Auto reply: Thanks for reaching out!", source: "whatsapp", time: "1h", auto: true })
      ] })
    ] })
  ] });
}
function MockStat({
  label,
  value,
  accent
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border ${accent ? "border-primary/40 bg-primary/5" : "border-border bg-background/40"} p-3`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold mt-0.5", children: value })
  ] });
}
function MockLead({
  name,
  msg,
  source,
  time,
  auto
}) {
  const Icon = source === "whatsapp" ? MessageCircle : Instagram;
  const color = source === "whatsapp" ? "bg-primary" : "bg-instagram";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-3 rounded-xl bg-background/40 border border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-9 h-9 rounded-full ${color} text-white flex items-center justify-center`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground", children: time })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground truncate", children: [
        auto && "⚡ ",
        msg
      ] })
    ] })
  ] });
}
function Stats() {
  const items = [{
    v: "3×",
    l: "faster reply time"
  }, {
    v: "24/7",
    l: "auto-replies"
  }, {
    v: "1",
    l: "unified inbox"
  }, {
    v: "0",
    l: "missed leads"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-primary", children: i.v }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-muted-foreground mt-1", children: i.l })
  ] }, i.l)) }) });
}
function Features() {
  const list = [{
    icon: MessageCircle,
    title: "WhatsApp inbox",
    text: "Every WhatsApp message becomes a tracked lead with status and history."
  }, {
    icon: Instagram,
    title: "Instagram DMs",
    text: "Pull Instagram conversations into the same place as your WhatsApp leads."
  }, {
    icon: Zap,
    title: "Smart auto-reply",
    text: "Greet new leads instantly with the message you choose. Toggle on/off in one tap."
  }, {
    icon: Bell,
    title: "Follow-ups",
    text: "Cold leads get a polite nudge after the delay you set. No more chasing."
  }, {
    icon: Users,
    title: "One unified list",
    text: "Search, filter and tag leads as new, contacted, converted or lost."
  }, {
    icon: ChartColumn,
    title: "Conversion stats",
    text: "See what's working at a glance — daily, weekly and monthly."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "features", className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold tracking-tight", children: "Everything you need to close more deals" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Designed for non-technical founders. Set it up in five minutes, never lose a lead again." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: list.map(({
      icon: Icon,
      title,
      text
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground leading-relaxed", children: text })
    ] }, title)) })
  ] }) });
}
function HowItWorks() {
  const steps = [{
    n: "1",
    title: "Connect channels",
    text: "Link WhatsApp Business and Instagram in a couple of taps."
  }, {
    n: "2",
    title: "Capture leads",
    text: "Every new message becomes a lead in your inbox automatically."
  }, {
    n: "3",
    title: "Reply & convert",
    text: "Use auto-reply, follow-ups and quick replies to turn chats into sales."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "how", className: "py-20 md:py-28 bg-card/40 border-y border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: "How it works" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold tracking-tight", children: "From message to customer in 3 steps" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-4", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-background p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex w-9 h-9 rounded-full bg-primary text-primary-foreground items-center justify-center font-bold", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold text-lg", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground leading-relaxed", children: s.text })
    ] }, s.n)) })
  ] }) });
}
function Pricing() {
  const tiers = [{
    name: "Starter",
    price: "Free",
    perks: ["Up to 100 leads/month", "WhatsApp inbox", "Manual replies", "Basic stats"]
  }, {
    name: "Pro",
    price: "₹499",
    per: "/mo",
    featured: true,
    perks: ["Unlimited leads", "WhatsApp + Instagram", "Auto-reply & follow-ups", "Priority support"]
  }, {
    name: "Business",
    price: "Talk to us",
    perks: ["Multiple users", "Team workflows", "API access", "Onboarding"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pricing", className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wider", children: "Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl md:text-4xl font-bold tracking-tight", children: "Simple plans that grow with you" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid md:grid-cols-3 gap-4", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border p-6 flex flex-col ${t.featured ? "border-primary bg-primary/5 glow-ring" : "border-border bg-card"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-3xl font-bold", children: [
        t.price,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-muted-foreground", children: t.per ?? "" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 text-sm flex-1", children: t.perks.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-primary mt-0.5 shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: p })
      ] }, p)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: `mt-6 inline-flex items-center justify-center px-4 py-2.5 rounded-full font-semibold text-sm transition ${t.featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-border"}`, children: [
        "Get ",
        t.name
      ] })
    ] }, t.name)) })
  ] }) });
}
function FinalCta({
  signedIn
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-4xl mx-auto px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 to-card p-10 md:p-14 text-center glow-ring", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Stop losing leads in your DMs" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-xl mx-auto", children: "Try LeadFlow free. Setup takes five minutes — no card needed." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: signedIn ? "/dashboard" : "/login", className: "mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition", children: [
      signedIn ? "Open dashboard" : "Get started free",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
    ] })
  ] }) }) });
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-6 rounded-md bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold", children: "L" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "LeadFlow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear()
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#features", className: "hover:text-foreground transition", children: "Features" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#pricing", className: "hover:text-foreground transition", children: "Pricing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "hover:text-foreground transition", children: "Log in" })
    ] })
  ] }) });
}
export {
  HomePage as component
};
