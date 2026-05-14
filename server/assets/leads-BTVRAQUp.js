import { G as jsxRuntimeExports, N as reactExports } from "./server-BZBOQ4cu.js";
import { u as useAuth, s as supabase, L as Link, A as Avatar, t as timeAgo, a as StatusDot } from "./router-Dvb5RR_f.js";
import { A as AppShell, T as TopBar } from "./TopBar-BzSdxsgE.js";
import { B as BottomNav } from "./BottomNav-DUWMT1NA.js";
import { c as createLucideIcon } from "./createLucideIcon-BjWIYHQ9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./users-Pg_qrBX8.js";
import "./zap-CFPG9K-a.js";
const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = createLucideIcon("search", __iconNode);
function LeadsPage() {
  const {
    user
  } = useAuth();
  const [leads, setLeads] = reactExports.useState([]);
  const [query, setQuery] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("all");
  reactExports.useEffect(() => {
    if (!user) return;
    let mounted = true;
    const load = async () => {
      const {
        data
      } = await supabase.from("leads").select("*").order("last_message_at", {
        ascending: false
      });
      if (mounted) setLeads(data ?? []);
    };
    load();
    const ch = supabase.channel("leads-page").on("postgres_changes", {
      event: "*",
      schema: "public",
      table: "leads"
    }, () => load()).subscribe();
    return () => {
      mounted = false;
      supabase.removeChannel(ch);
    };
  }, [user]);
  const filtered = reactExports.useMemo(() => {
    return leads.filter((l) => {
      if (filter === "new" && l.status !== "new") return false;
      if (filter === "converted" && l.status !== "converted") return false;
      if (filter === "whatsapp" && l.source !== "whatsapp") return false;
      if (filter === "instagram" && l.source !== "instagram") return false;
      if (query) {
        const q = query.toLowerCase();
        return l.name.toLowerCase().includes(q) || (l.phone ?? "").includes(q);
      }
      return true;
    });
  }, [leads, query, filter]);
  const tabs = [{
    key: "all",
    label: "All"
  }, {
    key: "new",
    label: "New"
  }, {
    key: "whatsapp",
    label: "WhatsApp"
  }, {
    key: "instagram",
    label: "Instagram"
  }, {
    key: "converted",
    label: "Converted"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: "Leads" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: query, onChange: (e) => setQuery(e.target.value), placeholder: "Search by name or phone…", className: "w-full bg-card border border-border rounded-xl pl-9 pr-3 py-3 text-[15px] focus:outline-none focus:border-primary transition" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 mt-3 flex gap-2 overflow-x-auto no-scrollbar -mx-1 pb-1", children: tabs.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFilter(t.key), className: `px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition ${filter === t.key ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`, children: t.label }, t.key)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 mt-4", children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-20 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-3", children: "📭" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: "No leads yet" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm mt-1", children: "When someone messages you, they'll appear here." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border border-border rounded-xl overflow-hidden", children: filtered.map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/chat/$id", params: {
        id: l.id
      }, className: `flex items-center gap-3 p-3 hover:bg-secondary transition ${i > 0 ? "border-t border-border" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { name: l.name, source: l.source }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold truncate", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-muted-foreground shrink-0", children: timeAgo(l.last_message_at ?? l.created_at) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-muted-foreground truncate", children: l.last_message ?? "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SourceBadge, { source: l.source }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-[11px] text-muted-foreground capitalize", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(StatusDot, { status: l.status }),
              l.status
            ] })
          ] })
        ] })
      ] }, l.id)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, {})
  ] });
}
function SourceBadge({
  source
}) {
  const isIg = source === "instagram";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] px-2 py-0.5 rounded-full font-medium ${isIg ? "bg-instagram/15 text-instagram" : "bg-primary/15 text-primary"}`, children: isIg ? "Instagram" : "WhatsApp" });
}
export {
  SourceBadge,
  LeadsPage as component
};
