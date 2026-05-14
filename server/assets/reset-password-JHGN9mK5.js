import { N as reactExports, G as jsxRuntimeExports } from "./server-BZBOQ4cu.js";
import { b as useNavigate, s as supabase } from "./router-Dvb5RR_f.js";
import { Z as Zap } from "./zap-CFPG9K-a.js";
import { a as EyeOff, E as Eye } from "./eye-ityNIpBD.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-BjWIYHQ9.js";
function ResetPasswordPage() {
  const navigate = useNavigate();
  const [ready, setReady] = reactExports.useState(false);
  const [password, setPassword] = reactExports.useState("");
  const [confirm, setConfirm] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [busy, setBusy] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  const [done, setDone] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const {
      data: sub
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY" || event === "SIGNED_IN") setReady(true);
    });
    supabase.auth.getSession().then(({
      data
    }) => {
      if (data.session) setReady(true);
    });
    return () => sub.subscription.unsubscribe();
  }, []);
  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    if (password !== confirm) {
      setError("Passwords don't match");
      return;
    }
    setBusy(true);
    try {
      const {
        error: err
      } = await supabase.auth.updateUser({
        password
      });
      if (err) throw err;
      setDone(true);
      setTimeout(() => navigate({
        to: "/dashboard",
        replace: true
      }), 1200);
    } catch (e2) {
      setError(e2 instanceof Error ? e2.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm bg-card rounded-2xl p-8 glow-ring", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-7 h-7 text-primary", fill: "currentColor" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "Set new password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Choose a strong new password." })
    ] }),
    !ready ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-center text-muted-foreground", children: "Open the reset link from your email to continue." }) : done ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl bg-secondary p-4 text-sm text-center", children: "Password updated. Redirecting…" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "New password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPw ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), className: "w-full bg-background border border-border rounded-xl px-3.5 py-3 pr-10 text-[15px] focus:outline-none focus:border-primary transition", placeholder: "••••••••", required: true, minLength: 6, autoComplete: "new-password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw((v) => !v), className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground", "aria-label": "Toggle password", children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: "Confirm password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPw ? "text" : "password", value: confirm, onChange: (e) => setConfirm(e.target.value), className: "w-full bg-background border border-border rounded-xl px-3.5 py-3 text-[15px] focus:outline-none focus:border-primary transition", placeholder: "••••••••", required: true, minLength: 6, autoComplete: "new-password" })
      ] }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-sm", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: busy, className: "w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-60 flex items-center justify-center", children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" }) : "Update Password" })
    ] })
  ] }) });
}
export {
  ResetPasswordPage as component
};
