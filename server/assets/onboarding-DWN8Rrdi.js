import { N as reactExports, G as jsxRuntimeExports } from "./server-BZBOQ4cu.js";
import { u as useAuth, b as useNavigate, s as supabase, L as Link } from "./router-Dvb5RR_f.js";
import { C as Check } from "./check-DtQasmlI.js";
import { M as MessageCircle, I as Instagram } from "./message-circle-B5fklJt0.js";
import { A as ArrowRight } from "./arrow-right-DHxPEBMn.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-BjWIYHQ9.js";
function OnboardingPage() {
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const [channel, setChannel] = reactExports.useState("whatsapp");
  const [accountId, setAccountId] = reactExports.useState("");
  const [label, setLabel] = reactExports.useState("");
  const [accessToken, setAccessToken] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [connected, setConnected] = reactExports.useState([]);
  reactExports.useEffect(() => {
    if (!user) return;
    (async () => {
      const {
        data
      } = await supabase.from("meta_accounts").select("channel,label").eq("user_id", user.id);
      setConnected(data ?? []);
    })();
  }, [user]);
  const save = async (e) => {
    e.preventDefault();
    if (!user) return;
    setError(null);
    setBusy(true);
    try {
      const {
        error: err
      } = await supabase.from("meta_accounts").insert({
        user_id: user.id,
        channel,
        account_id: accountId.trim(),
        label: label.trim() || null,
        access_token: accessToken.trim()
      });
      if (err) throw err;
      setConnected((c) => [...c, {
        channel,
        label: label || null
      }]);
      setAccountId("");
      setLabel("");
      setAccessToken("");
    } catch (e2) {
      setError(e2 instanceof Error ? e2.message : "Could not save account");
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background px-4 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Connect your inboxes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 text-sm", children: "Link your WhatsApp Business and Instagram accounts so leads land in LeadFlow automatically." })
    ] }),
    connected.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card rounded-2xl p-4 mb-6 space-y-2", children: connected.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "capitalize font-medium", children: c.channel }),
      c.label && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
        "— ",
        c.label
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-2xl p-6 glow-ring", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 p-1 bg-secondary rounded-full mb-5 text-sm font-medium", children: ["whatsapp", "instagram"].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setChannel(c), className: `py-2 rounded-full transition flex items-center justify-center gap-2 ${channel === c ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: [
        c === "whatsapp" ? /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-4 h-4" }),
        c === "whatsapp" ? "WhatsApp" : "Instagram"
      ] }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: save, className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: channel === "whatsapp" ? "Phone Number ID" : "Instagram Account ID", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: accountId, onChange: (e) => setAccountId(e.target.value), className: inputCls, placeholder: channel === "whatsapp" ? "e.g. 1234567890" : "e.g. 17841400000000000", required: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Label (optional)", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: label, onChange: (e) => setLabel(e.target.value), className: inputCls, placeholder: channel === "whatsapp" ? "Sales WhatsApp" : "@yourbrand" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Access Token", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: accessToken, onChange: (e) => setAccessToken(e.target.value), className: inputCls, placeholder: "Meta Cloud API access token", required: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-muted-foreground", children: [
          "Get these from ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://business.facebook.com", target: "_blank", rel: "noreferrer", className: "underline", children: "Meta Business Manager" }),
          ". Tokens are stored securely."
        ] }),
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-sm", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: busy, className: "w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-60 flex items-center justify-center gap-2", children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Connect account ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-6 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/dashboard", className: "text-muted-foreground hover:text-foreground", children: "Skip for now" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => navigate({
        to: "/dashboard"
      }), disabled: connected.length === 0, className: "text-primary font-semibold disabled:opacity-50", children: "Continue to dashboard →" })
    ] })
  ] }) });
}
const inputCls = "w-full bg-background border border-border rounded-xl px-3.5 py-3 text-[15px] focus:outline-none focus:border-primary transition";
function Field({
  label,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: label }),
    children
  ] });
}
export {
  OnboardingPage as component
};
