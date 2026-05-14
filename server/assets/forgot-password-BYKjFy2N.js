import { N as reactExports, G as jsxRuntimeExports } from "./server-BZBOQ4cu.js";
import { b as useNavigate, L as Link, s as supabase } from "./router-Dvb5RR_f.js";
import { Z as Zap } from "./zap-CFPG9K-a.js";
import { c as createLucideIcon } from "./createLucideIcon-BjWIYHQ9.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode);
function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [email, setEmail] = reactExports.useState("");
  const [busy, setBusy] = reactExports.useState(false);
  const [sent, setSent] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      const {
        error: err
      } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`
      });
      if (err) throw err;
      setSent(true);
    } catch (e2) {
      setError(e2 instanceof Error ? e2.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm bg-card rounded-2xl p-8 glow-ring", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-7 h-7 text-primary", fill: "currentColor" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Forgot password?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Enter your email and we'll send you a reset link." })
    ] }),
    sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary p-4 text-sm text-center", children: [
        "Check ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: email }),
        " for a password reset link."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigate({
        to: "/login"
      }), className: "w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold", children: "Back to Sign In" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full bg-background border border-border rounded-xl px-3.5 py-3 text-[15px] focus:outline-none focus:border-primary transition", placeholder: "you@example.com", required: true, autoComplete: "email" })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-sm", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: busy, className: "w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-60 flex items-center justify-center", children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" }) : "Send Reset Link" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", className: "mt-5 flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" }),
      "Back to Sign In"
    ] })
  ] }) });
}
export {
  ForgotPasswordPage as component
};
