import { N as reactExports, G as jsxRuntimeExports } from "./server-BZBOQ4cu.js";
import { A as AppShell, T as TopBar } from "./TopBar-BzSdxsgE.js";
import { R as Route, u as useAuth, s as supabase, S as SourceBadge } from "./router-Dvb5RR_f.js";
import { c as createLucideIcon } from "./createLucideIcon-BjWIYHQ9.js";
import { I as Instagram, M as MessageCircle } from "./message-circle-B5fklJt0.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode);
const STATUSES = ["new", "contacted", "converted", "lost"];
const QUICK = ["Thanks for reaching out!", "Can I know more details?", "We'll call you shortly", "Please share your budget"];
function ChatPage() {
  const {
    id
  } = Route.useParams();
  const {
    user
  } = useAuth();
  const [lead, setLead] = reactExports.useState(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [text, setText] = reactExports.useState("");
  const [sending, setSending] = reactExports.useState(false);
  const endRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!user) return;
    let mounted = true;
    const load = async () => {
      const [{
        data: l
      }, {
        data: ms
      }] = await Promise.all([supabase.from("leads").select("*").eq("id", id).maybeSingle(), supabase.from("messages").select("*").eq("lead_id", id).order("sent_at", {
        ascending: true
      })]);
      if (!mounted) return;
      setLead(l);
      setMessages(ms ?? []);
    };
    load();
    const ch = supabase.channel(`chat-${id}`).on("postgres_changes", {
      event: "INSERT",
      schema: "public",
      table: "messages",
      filter: `lead_id=eq.${id}`
    }, (payload) => setMessages((m) => [...m, payload.new])).subscribe();
    return () => {
      mounted = false;
      supabase.removeChannel(ch);
    };
  }, [id, user]);
  reactExports.useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages.length]);
  const send = async () => {
    const content = text.trim();
    if (!content || !user || !lead) return;
    setSending(true);
    setText("");
    const optimistic = {
      id: `tmp-${Date.now()}`,
      lead_id: id,
      user_id: user.id,
      content,
      direction: "outbound",
      is_auto: false,
      sent_at: (/* @__PURE__ */ new Date()).toISOString(),
      external_message_id: null
    };
    setMessages((m) => [...m, optimistic]);
    const {
      error
    } = await supabase.from("messages").insert({
      lead_id: id,
      user_id: user.id,
      content,
      direction: "outbound"
    });
    await supabase.from("leads").update({
      last_message: content,
      last_message_at: (/* @__PURE__ */ new Date()).toISOString(),
      status: lead.status === "new" ? "contacted" : lead.status
    }).eq("id", id);
    if (error) setMessages((m) => m.filter((x) => x.id !== optimistic.id));
    setSending(false);
  };
  const updateStatus = async (status) => {
    if (!lead) return;
    setLead({
      ...lead,
      status
    });
    await supabase.from("leads").update({
      status
    }).eq("id", id);
  };
  if (!lead) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: "Loading…", back: true }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex flex-col bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto w-full flex-1 flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: lead.name, back: true, right: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SourceBadge, { source: lead.source }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 px-4 py-2 border-b border-border bg-card text-xs", children: [
      lead.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => navigator.clipboard?.writeText(lead.phone), className: "flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3.5 h-3.5" }),
        " ",
        lead.phone
      ] }),
      lead.instagram_handle && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-3.5 h-3.5" }),
        " ",
        lead.instagram_handle
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: lead.status, onChange: (e) => updateStatus(e.target.value), className: "bg-secondary border border-border text-foreground rounded-full px-2.5 py-1 text-xs capitalize focus:outline-none", children: STATUSES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: s, children: s }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-3 py-4 space-y-2", children: [
      messages.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center text-muted-foreground text-sm mt-12 flex flex-col items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-8 h-8 opacity-40" }),
        "No messages yet. Start the conversation below."
      ] }),
      messages.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${m.direction === "outbound" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-[78%] ${m.direction === "outbound" ? "items-end" : "items-start"} flex flex-col`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `px-3.5 py-2 rounded-2xl text-[15px] leading-snug ${m.direction === "outbound" ? "bg-primary text-primary-foreground rounded-br-md" : "bg-card text-foreground border border-border rounded-bl-md"}`, children: m.content }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground mt-1 px-1", children: [
          new Date(m.sent_at).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          }),
          m.is_auto && " · ⚡ Auto"
        ] })
      ] }) }, m.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: endRef })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 pb-2 flex gap-2 overflow-x-auto no-scrollbar", children: QUICK.map((q) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setText(q), className: "px-3 py-1.5 rounded-full bg-secondary text-foreground text-xs whitespace-nowrap hover:bg-border transition", children: q }, q)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border bg-card px-3 py-2 pb-safe flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: text, onChange: (e) => setText(e.target.value), onKeyDown: (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          send();
        }
      }, placeholder: "Type your reply…", className: "flex-1 bg-background border border-border rounded-full px-4 py-3 text-[15px] focus:outline-none focus:border-primary transition" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: send, disabled: sending || !text.trim(), className: "h-11 px-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm flex items-center gap-1.5 disabled:opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
        " Send"
      ] })
    ] })
  ] }) });
}
export {
  ChatPage as component
};
