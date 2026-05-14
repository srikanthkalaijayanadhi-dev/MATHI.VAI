import { G as jsxRuntimeExports, N as reactExports } from "./server-BZBOQ4cu.js";
import { i as initials, u as useAuth, s as supabase, L as Link, t as timeAgo } from "./router-Dvb5RR_f.js";
import { A as AppShell, T as TopBar } from "./TopBar-BzSdxsgE.js";
import { B as BottomNav } from "./BottomNav-DUWMT1NA.js";
import { B as Bell } from "./bell-CBu3Jgn2.js";
import { Z as Zap } from "./zap-CFPG9K-a.js";
import { c as createLucideIcon } from "./createLucideIcon-BjWIYHQ9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./users-Pg_qrBX8.js";
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
function Dashboard() {
  const {
    user
  } = useAuth();
  const [leads, setLeads] = reactExports.useState([]);
  const [auto, setAuto] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (!user) return;
    let mounted = true;
    const load = async () => {
      const [{
        data: ls
      }, {
        data: a
      }] = await Promise.all([supabase.from("leads").select("*").order("last_message_at", {
        ascending: false
      }), supabase.from("automation_settings").select("*").eq("user_id", user.id).maybeSingle()]);
      if (!mounted) return;
      setLeads(ls ?? []);
      setAuto(a);
    };
    load();
    const ch = supabase.channel("dashboard-leads").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "leads"
    }, () => load()).subscribe();
    return () => {
      mounted = false;
      supabase.removeChannel(ch);
    };
  }, [user]);
  const stats = reactExports.useMemo(() => {
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const month = /* @__PURE__ */ new Date();
    month.setDate(1);
    month.setHours(0, 0, 0, 0);
    return {
      total: leads.length,
      newToday: leads.filter((l) => new Date(l.created_at) >= today && l.status === "new").length,
      converted: leads.filter((l) => l.status === "converted" && new Date(l.created_at) >= month).length,
      whatsapp: leads.filter((l) => l.source === "whatsapp").length,
      instagram: leads.filter((l) => l.source === "instagram").length
    };
  }, [leads]);
  const greeting = reactExports.useMemo(() => {
    const h = (/* @__PURE__ */ new Date()).getHours();
    if (h < 12) return "Good morning";
    if (h < 18) return "Good afternoon";
    return "Good evening";
  }, []);
  const firstName = user?.user_metadata?.full_name?.split(" ")[0] ?? user?.email?.split("@")[0] ?? "there";
  const max = Math.max(stats.whatsapp, stats.instagram, 1);
  const recent = leads.slice(0, 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: "LeadFlow", showLogout: true, right: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Notifications", className: "w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "w-5 h-5" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          greeting,
          ","
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-xl font-semibold mt-0.5", children: [
          firstName,
          " 👋"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 mt-4 flex gap-3 overflow-x-auto no-scrollbar -mx-1 pb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Total Leads", value: stats.total, sub: "📊 All time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "New Today", value: stats.newToday, sub: "🟢 Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { label: "Converted", value: stats.converted, sub: "✅ This month" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-xl p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm text-muted-foreground font-medium mb-3", children: "Lead Sources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SourceRow, { label: "WhatsApp", count: stats.whatsapp, pct: stats.whatsapp / max * 100, color: "bg-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(SourceRow, { label: "Instagram", count: stats.instagram, pct: stats.instagram / max * 100, color: "bg-instagram" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/automation", className: `flex items-center gap-3 p-4 rounded-xl border transition ${auto?.auto_reply_enabled ? "bg-primary/10 border-primary/30" : "bg-card border-border"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: `w-5 h-5 ${auto?.auto_reply_enabled ? "text-primary" : "text-muted-foreground"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-medium", children: [
            "Auto-reply is ",
            auto?.auto_reply_enabled ? "ON" : "OFF"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: auto?.auto_reply_enabled ? "New messages get an instant reply" : "Enable in Automation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-4 h-4 text-muted-foreground" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold", children: "Recent Leads" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/leads", className: "text-xs text-primary font-medium", children: "See all →" })
        ] }),
        recent.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl p-6 text-center text-sm text-muted-foreground", children: "No leads yet. Tap + to add one." }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: recent.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat/$id", params: {
          id: l.id
        }, className: `flex items-center gap-3 p-3 hover:bg-secondary transition ${i > 0 ? "border-t border-border" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: l.name, source: l.source }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium truncate", children: l.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground shrink-0", children: timeAgo(l.last_message_at ?? l.created_at) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground truncate", children: l.last_message ?? "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusDot, { status: l.status })
        ] }, l.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, {})
  ] });
}
function StatCard({
  label,
  value,
  sub
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[140px] flex-1 bg-card border border-border rounded-xl p-4 border-l-[3px] border-l-primary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold mt-1", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1", children: sub })
  ] });
}
function SourceRow({
  label,
  count,
  pct,
  color
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs mb-1.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        count,
        " leads"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full ${color} transition-all`, style: {
      width: `${pct}%`
    } }) })
  ] });
}
function Avatar({
  name,
  source
}) {
  const bg = source === "instagram" ? "bg-instagram" : "bg-primary";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-10 h-10 rounded-full ${bg} text-white flex items-center justify-center text-sm font-semibold shrink-0`, children: initials(name) });
}
function StatusDot({
  status
}) {
  const map = {
    new: "bg-primary",
    contacted: "bg-warning",
    converted: "bg-blue-400",
    lost: "bg-muted-foreground"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2.5 h-2.5 rounded-full shrink-0 ${map[status] ?? "bg-muted-foreground"}` });
}
export {
  Avatar,
  StatusDot,
  Dashboard as component
};
