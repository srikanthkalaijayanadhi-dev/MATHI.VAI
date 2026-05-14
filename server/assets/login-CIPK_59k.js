import { N as reactExports, G as jsxRuntimeExports } from "./server-BZBOQ4cu.js";
import { s as supabase, b as useNavigate, u as useAuth, L as Link } from "./router-Dvb5RR_f.js";
import { Z as Zap } from "./zap-CFPG9K-a.js";
import { a as EyeOff, E as Eye } from "./eye-ityNIpBD.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-BjWIYHQ9.js";
var package_default = {
  version: "1.1.2"
};
var EXPECTED_MESSAGE_TYPE = "authorization_response";
var DEFAULT_OAUTH_BROKER_URL = "/~oauth/initiate";
var DEFAULT_SUPPORTED_OAUTH_ORIGINS = ["https://oauth.lovable.app", "https://lovable.dev"];
var DEFAULT_MOBILE_DEEP_LINK_REDIRECT_URI = "lovable://oauth-callback";
var DEFAULT_DESKTOP_LOCALHOST_REDIRECT_URI = "http://127.0.0.1/iframe-oauth/callback";
var POPUP_CHECK_INTERVAL_MS = 500;
var IFRAME_FALLBACK_TIMEOUT_MS = 12e4;
function startWebMessageListener(supportedOrigins) {
  let resolvePromise;
  const promise = new Promise((resolve) => {
    resolvePromise = resolve;
  });
  const callback = (e) => {
    const isValidOrigin = supportedOrigins.some((origin) => e.origin === origin);
    if (!isValidOrigin) {
      return;
    }
    const data = e.data;
    if (!data || typeof data !== "object") {
      return;
    }
    if (data.type !== EXPECTED_MESSAGE_TYPE) {
      return;
    }
    resolvePromise(data.response);
  };
  const cleanup = () => {
    window.removeEventListener("message", callback);
  };
  window.addEventListener("message", callback);
  return {
    cleanup,
    messagePromise: promise
  };
}
function getPopupDimensions(isInIframe) {
  const hasBrowserPosition = window.screenX !== 0 || window.screenY !== 0 || !isInIframe;
  const width = hasBrowserPosition ? window.outerWidth * 0.5 : window.screen.width * 0.5;
  const height = hasBrowserPosition ? window.outerHeight * 0.5 : window.screen.height * 0.5;
  const left = hasBrowserPosition ? window.screenX + (window.outerWidth - width) / 2 : (window.screen.width - width) / 2;
  const top = hasBrowserPosition ? window.screenY + (window.outerHeight - height) / 2 : (window.screen.height - height) / 2;
  return { width, height, left, top };
}
function processOAuthResponse(data, expectedState) {
  if (data.state !== expectedState) {
    return { error: new Error("State is invalid") };
  }
  if (data.error) {
    if (data.error === "legacy_flow") {
      return {
        error: new Error("This flow is not supported in Preview mode. Please open the app in a new tab to sign in.")
      };
    }
    return { error: new Error(data.error_description ?? "Sign in failed") };
  }
  if (!data.access_token || !data.refresh_token) {
    return { error: new Error("No tokens received") };
  }
  return {
    tokens: { access_token: data.access_token, refresh_token: data.refresh_token },
    error: null
  };
}
function isDevice() {
  const ua = navigator.userAgent;
  if (/iPhone|iPad|iPod|Android/i.test(ua))
    return true;
  if (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1)
    return true;
  return false;
}
function generateState() {
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    return [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}
function createAuth(config = {}) {
  const oauthBrokerUrl = config.oauthBrokerUrl ?? DEFAULT_OAUTH_BROKER_URL;
  const supportedOAuthOrigins = config.supportedOAuthOrigins ?? DEFAULT_SUPPORTED_OAUTH_ORIGINS;
  async function signInWithOAuth(provider, opts = {}) {
    let isInIframe = false;
    try {
      isInIframe = window.self !== window.top;
    } catch {
      isInIframe = true;
    }
    const ua = navigator.userAgent;
    const isMobileApp = /LovableApp\//.test(ua);
    const isDesktopApp = !isMobileApp && /lovable/i.test(ua);
    const state = generateState();
    let redirectUri = opts.redirect_uri ?? window.location.origin;
    if (isMobileApp && isInIframe) {
      redirectUri = DEFAULT_MOBILE_DEEP_LINK_REDIRECT_URI;
    } else if (isDesktopApp && isInIframe) {
      redirectUri = DEFAULT_DESKTOP_LOCALHOST_REDIRECT_URI;
    }
    const params = new URLSearchParams({
      ...opts.extraParams,
      provider,
      redirect_uri: redirectUri,
      state
    });
    if (!isInIframe) {
      window.location.href = `${oauthBrokerUrl}?${params.toString()}`;
      return { error: null, redirected: true };
    }
    if (!isMobileApp && !isDesktopApp) {
      params.set("response_mode", "web_message");
    }
    const url = `${oauthBrokerUrl}?${params.toString()}`;
    const effectiveOrigins = isDesktopApp ? [...supportedOAuthOrigins, window.location.origin] : supportedOAuthOrigins;
    const { messagePromise, cleanup } = startWebMessageListener(effectiveOrigins);
    let popup;
    if (isDevice()) {
      popup = window.open(url, "_blank");
    } else {
      const { width, height, left, top } = getPopupDimensions(isInIframe);
      popup = window.open(url, "oauth", `width=${width},height=${height},left=${left},top=${top}`);
    }
    if (!popup && (isMobileApp || isDesktopApp)) {
      let webViewTimeoutId;
      const webViewTimeoutPromise = new Promise((_, reject) => {
        webViewTimeoutId = setTimeout(() => {
          reject(new Error("OAuth timed out waiting for response"));
        }, IFRAME_FALLBACK_TIMEOUT_MS);
      });
      try {
        const data = await Promise.race([messagePromise, webViewTimeoutPromise]);
        return processOAuthResponse(data, state);
      } catch (error) {
        return { error: error instanceof Error ? error : new Error(String(error)) };
      } finally {
        if (webViewTimeoutId)
          clearTimeout(webViewTimeoutId);
        cleanup();
      }
    }
    if (!popup) {
      cleanup();
      return { error: new Error("Popup was blocked") };
    }
    let popupCheckInterval;
    const popupClosedPromise = new Promise((_, reject) => {
      popupCheckInterval = setInterval(() => {
        if (popup.closed) {
          clearInterval(popupCheckInterval);
          reject(new Error("Sign in was cancelled"));
        }
      }, POPUP_CHECK_INTERVAL_MS);
    });
    try {
      const data = await Promise.race([messagePromise, popupClosedPromise]);
      return processOAuthResponse(data, state);
    } catch (error) {
      return {
        error: error instanceof Error ? error : new Error(String(error))
      };
    } finally {
      clearInterval(popupCheckInterval);
      cleanup();
      popup?.close();
    }
  }
  return {
    signInWithOAuth
  };
}
if (typeof window !== "undefined") {
  window.__lovable_cloud_auth_js_version = package_default.version;
}
function createLovableAuth(config = {}) {
  return createAuth(config);
}
const lovableAuth = createLovableAuth();
const lovable = {
  auth: {
    signInWithOAuth: async (provider, opts) => {
      const result = await lovableAuth.signInWithOAuth(provider, {
        redirect_uri: opts?.redirect_uri,
        extraParams: {
          ...opts?.extraParams
        }
      });
      if (result.redirected) {
        return result;
      }
      if (result.error) {
        return result;
      }
      try {
        await supabase.auth.setSession(result.tokens);
      } catch (e) {
        return { error: e instanceof Error ? e : new Error(String(e)) };
      }
      return result;
    }
  }
};
function LoginPage() {
  const navigate = useNavigate();
  const {
    user,
    loading
  } = useAuth();
  const [tab, setTab] = reactExports.useState("signin");
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [busy, setBusy] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if (loading || !user) return;
    (async () => {
      const {
        data,
        error: err
      } = await supabase.from("meta_accounts").select("id").eq("user_id", user.id).limit(1);
      if (err || !data || data.length === 0) {
        navigate({
          to: "/onboarding",
          replace: true
        });
      } else {
        navigate({
          to: "/dashboard",
          replace: true
        });
      }
    })();
  }, [loading, user, navigate]);
  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    setBusy(true);
    try {
      if (tab === "signin") {
        const {
          error: err
        } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (err) throw err;
      } else {
        const {
          error: err
        } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/login`,
            data: {
              full_name: name
            }
          }
        });
        if (err) throw err;
      }
    } catch (e2) {
      setError(e2 instanceof Error ? e2.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center px-4 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-sm bg-card rounded-2xl p-8 glow-ring", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center text-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-7 h-7 text-primary", fill: "currentColor" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight", children: "LeadFlow" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Turn messages into customers" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 p-1 bg-secondary rounded-full mb-6 text-sm font-medium", children: ["signin", "signup"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
      setTab(t);
      setError(null);
    }, className: `py-2 rounded-full transition ${tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`, children: t === "signin" ? "Sign In" : "Sign Up" }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-3", children: [
      tab === "signup" && /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), className: inputCls, placeholder: "Jane Doe", required: true }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: inputCls, placeholder: "you@example.com", required: true, autoComplete: "email" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Password", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPw ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), className: inputCls + " pr-10", placeholder: "••••••••", required: true, minLength: 6, autoComplete: tab === "signin" ? "current-password" : "new-password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw((v) => !v), className: "absolute right-2 top-1/2 -translate-y-1/2 p-2 text-muted-foreground", "aria-label": "Toggle password", children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
      ] }) }),
      tab === "signin" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end -mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", className: "text-xs text-primary hover:underline", children: "Forgot password?" }) }),
      error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-destructive text-sm", children: error }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: busy, className: "w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold disabled:opacity-60 flex items-center justify-center", children: busy ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" }) : tab === "signin" ? "Sign In" : "Create Account" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-5 flex items-center gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "or" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: async () => {
      setError(null);
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: `${window.location.origin}/login`
      });
      if (result.error) {
        setError(result.error.message ?? "Google sign-in failed");
        return;
      }
      if (result.redirected) return;
    }, className: "w-full h-12 rounded-xl border border-border bg-background hover:bg-secondary font-semibold flex items-center justify-center gap-2 transition", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FBBC05", d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" })
      ] }),
      "Continue with Google"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] text-center text-muted-foreground mt-5", children: [
      "By continuing you agree to our ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "underline", children: "Terms" }),
      " & Privacy Policy"
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
  LoginPage as component
};
