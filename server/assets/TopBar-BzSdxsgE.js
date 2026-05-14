import { G as jsxRuntimeExports } from "./server-BZBOQ4cu.js";
import { b as useNavigate, u as useAuth } from "./router-Dvb5RR_f.js";
import { c as createLucideIcon } from "./createLucideIcon-BjWIYHQ9.js";
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
const __iconNode = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode);
function TopBar({ title, back, right, showLogout }) {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-30 h-14 bg-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto h-full flex items-center px-3 sm:px-6 gap-2", children: [
    back ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => navigate({ to: "/leads" }),
        "aria-label": "Back",
        className: "w-9 h-9 -ml-1 flex items-center justify-center rounded-full hover:bg-secondary transition",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 sm:hidden" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "flex-1 text-center sm:text-left text-base sm:text-lg font-semibold truncate", children: title }),
    right ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-auto min-w-9 h-9 flex items-center justify-end", children: right }) : showLogout ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: async () => {
          await signOut();
          navigate({ to: "/login" });
        },
        "aria-label": "Log out",
        className: "w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary transition text-muted-foreground",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "w-5 h-5" })
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9" })
  ] }) });
}
function AppShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto px-0 sm:px-4", children }) });
}
export {
  AppShell as A,
  TopBar as T
};
