import { N as reactExports, G as jsxRuntimeExports } from "./server-BZBOQ4cu.js";
import { A as AppShell, T as TopBar } from "./TopBar-BzSdxsgE.js";
import { B as BottomNav } from "./BottomNav-DUWMT1NA.js";
import { u as useAuth, s as supabase } from "./router-Dvb5RR_f.js";
import { Z as Zap } from "./zap-CFPG9K-a.js";
import { c as createLucideIcon } from "./createLucideIcon-BjWIYHQ9.js";
import { C as Check } from "./check-DtQasmlI.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./users-Pg_qrBX8.js";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$1);
const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode);
const DEFAULTS = {
  auto_reply_enabled: false,
  auto_reply_message: "Hi! Thanks for reaching out. We will get back to you shortly.",
  follow_up_enabled: false,
  follow_up_hours: 24,
  follow_up_message: "Hi again! Just checking in. Are you still interested?"
};
function AutomationPage() {
  const {
    user
  } = useAuth();
  const [s, setS] = reactExports.useState(null);
  const [loading, setLoading] = reactExports.useState(true);
  reactExports.useEffect(() => {
    if (!user) return;
    (async () => {
      const {
        data
      } = await supabase.from("automation_settings").select("*").eq("user_id", user.id).maybeSingle();
      if (data) setS(data);
      else setS({
        id: "",
        user_id: user.id,
        updated_at: "",
        ...DEFAULTS
      });
      setLoading(false);
    })();
  }, [user]);
  const save = async (patch) => {
    if (!user || !s) return;
    const next = {
      ...s,
      ...patch,
      user_id: user.id
    };
    setS(next);
    const {
      id,
      updated_at: _u,
      ...payload
    } = next;
    if (id) {
      await supabase.from("automation_settings").update(payload).eq("id", id);
    } else {
      const {
        data
      } = await supabase.from("automation_settings").insert(payload).select("*").single();
      if (data) setS(data);
    }
  };
  if (loading || !s) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: "Automation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-8 text-center text-muted-foreground text-sm", children: "Loading…" })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AppShell, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TopBar, { title: "Automation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-4 h-4 text-primary" }), title: "Auto Reply", description: "Automatically reply to new messages", enabled: s.auto_reply_enabled, onToggle: (v) => save({
          auto_reply_enabled: v
        }), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Editable, { value: s.auto_reply_message, max: 500, disabled: !s.auto_reply_enabled, onSave: (v) => save({
          auto_reply_message: v
        }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(SectionCard, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 text-primary" }), title: "Follow-Up Message", description: "Send a follow-up if lead doesn't reply", enabled: s.follow_up_enabled, onToggle: (v) => save({
          follow_up_enabled: v
        }), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Send after:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: 1, max: 168, value: s.follow_up_hours, disabled: !s.follow_up_enabled, onChange: (e) => save({
              follow_up_hours: Math.min(168, Math.max(1, Number(e.target.value) || 1))
            }), className: "w-20 text-center bg-background border border-border rounded-lg px-2 py-1.5 text-sm disabled:opacity-50" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "hours after last message" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Editable, { value: s.follow_up_message, max: 500, disabled: !s.follow_up_enabled, onSave: (v) => save({
            follow_up_message: v
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary/60 rounded-xl p-4 flex gap-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "How does this work?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-[13px] mt-1 leading-relaxed", children: "When someone messages you on WhatsApp or Instagram, LeadFlow captures it automatically. Auto-reply sends your message instantly. Follow-up reminds cold leads after your set time. No manual work needed." })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BottomNav, {})
  ] });
}
function SectionCard({
  icon,
  title,
  description,
  enabled,
  onToggle,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-card border border-border rounded-xl overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center gap-3 p-4 border-b border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center", children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-[15px]", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, { checked: enabled, onChange: onToggle })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children })
  ] });
}
function Toggle({
  checked,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", role: "switch", "aria-checked": checked, onClick: () => onChange(!checked), className: `relative w-12 h-7 rounded-full transition ${checked ? "bg-primary" : "bg-secondary border border-border"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform ${checked ? "translate-x-5" : ""}` }) });
}
function Editable({
  value,
  max,
  disabled,
  onSave
}) {
  const [local, setLocal] = reactExports.useState(value);
  const [savedAt, setSavedAt] = reactExports.useState(0);
  reactExports.useEffect(() => setLocal(value), [value]);
  const dirty = local !== value;
  const handleSave = () => {
    onSave(local);
    setSavedAt(Date.now());
    setTimeout(() => setSavedAt(0), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: disabled ? "opacity-50 pointer-events-none" : "", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground mb-1.5", children: "Message" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, value: local, maxLength: max, onChange: (e) => setLocal(e.target.value), className: "w-full bg-background border border-border rounded-lg px-3 py-2.5 text-[14px] resize-y focus:outline-none focus:border-primary transition" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] text-muted-foreground", children: [
        local.length,
        "/",
        max
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: handleSave, disabled: !dirty, className: "text-xs font-semibold px-3 py-1.5 rounded-lg bg-primary text-primary-foreground disabled:opacity-40 flex items-center gap-1", children: savedAt ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-3.5 h-3.5" }),
        " Saved"
      ] }) : "Save" })
    ] })
  ] });
}
export {
  AutomationPage as component
};
