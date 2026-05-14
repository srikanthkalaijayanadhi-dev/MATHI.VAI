import { a1 as useRouter, N as reactExports, G as jsxRuntimeExports } from "./server-BZBOQ4cu.js";
import { u as useAuth, s as supabase, b as useNavigate, L as Link } from "./router-Dvb5RR_f.js";
import { c as createLucideIcon } from "./createLucideIcon-BjWIYHQ9.js";
import { U as Users } from "./users-Pg_qrBX8.js";
import { Z as Zap } from "./zap-CFPG9K-a.js";
function useLocation(opts) {
  const router = useRouter();
  {
    const location = router.stores.location.get();
    return location;
  }
}
const __iconNode$2 = [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "r6nss1"
    }
  ]
];
const House = createLucideIcon("house", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
function AddLeadSheet({ open, onOpenChange, onCreated }) {
  const { user } = useAuth();
  const [name, setName] = reactExports.useState("");
  const [phone, setPhone] = reactExports.useState("");
  const [handle, setHandle] = reactExports.useState("");
  const [source, setSource] = reactExports.useState("whatsapp");
  const [firstMessage, setFirstMessage] = reactExports.useState("");
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  if (!open) return null;
  const reset = () => {
    setName("");
    setPhone("");
    setHandle("");
    setSource("whatsapp");
    setFirstMessage("");
    setError(null);
  };
  const submit = async (e) => {
    e.preventDefault();
    if (!user) return;
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    setSubmitting(true);
    setError(null);
    const { data, error: err } = await supabase.from("leads").insert({
      user_id: user.id,
      name: name.trim(),
      phone: phone.trim() || null,
      instagram_handle: handle.trim() || null,
      source,
      last_message: firstMessage.trim() || null,
      last_message_at: (/* @__PURE__ */ new Date()).toISOString()
    }).select("id").single();
    if (err || !data) {
      setError(err?.message ?? "Failed");
      setSubmitting(false);
      return;
    }
    if (firstMessage.trim()) {
      await supabase.from("messages").insert({
        lead_id: data.id,
        user_id: user.id,
        content: firstMessage.trim(),
        direction: "inbound"
      });
    }
    setSubmitting(false);
    reset();
    onCreated?.(data.id);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-end justify-center bg-black/60 animate-in fade-in",
      onClick: () => onOpenChange(false),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full max-w-md bg-card rounded-t-2xl border-t border-border p-5 pb-8 animate-in slide-in-from-bottom",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: "Add Lead" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => onOpenChange(false), "aria-label": "Close", className: "p-1 rounded-full hover:bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name *", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), className: inputCls, placeholder: "Jane Doe" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: phone, onChange: (e) => setPhone(e.target.value), className: inputCls, placeholder: "+91…" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Instagram", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: handle, onChange: (e) => setHandle(e.target.value), className: inputCls, placeholder: "@handle" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Source", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["whatsapp", "instagram"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSource(s),
                  className: `flex-1 py-2 rounded-lg text-sm font-medium border transition ${source === s ? s === "whatsapp" ? "bg-primary text-primary-foreground border-primary" : "bg-instagram text-white border-instagram" : "bg-secondary border-border text-muted-foreground"}`,
                  children: s === "whatsapp" ? "WhatsApp" : "Instagram"
                },
                s
              )) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First message (optional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "textarea",
                {
                  value: firstMessage,
                  onChange: (e) => setFirstMessage(e.target.value),
                  rows: 3,
                  className: inputCls,
                  placeholder: "What did they say?"
                }
              ) }),
              error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-sm", children: error }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "submit",
                  disabled: submitting,
                  className: "w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-60",
                  children: submitting ? "Adding…" : "Add Lead"
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
const inputCls = "w-full bg-background border border-border rounded-lg px-3 py-3 text-[15px] focus:outline-none focus:border-primary transition";
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: label }),
    children
  ] });
}
function BottomNav() {
  const location = useLocation();
  const path = location.pathname;
  const [openAdd, setOpenAdd] = reactExports.useState(false);
  const navigate = useNavigate();
  const item = (active) => `flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${active ? "text-primary" : "text-muted-foreground"}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-0 inset-x-0 z-40 bg-card border-t border-border pb-safe", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center h-16 max-w-md sm:max-w-lg mx-auto px-2 sm:px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", className: item(path === "/dashboard"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-5 h-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium", children: "Home" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/leads", className: item(path === "/leads"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-5 h-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium", children: "Leads" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpenAdd(true),
          "aria-label": "Add lead",
          className: "mx-2 -mt-8 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center active:scale-95 transition",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/automation", className: item(path === "/automation"), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-5 h-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium", children: "Automation" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      AddLeadSheet,
      {
        open: openAdd,
        onOpenChange: setOpenAdd,
        onCreated: (id) => {
          setOpenAdd(false);
          navigate({ to: "/chat/$id", params: { id } });
        }
      }
    )
  ] });
}
export {
  BottomNav as B
};
