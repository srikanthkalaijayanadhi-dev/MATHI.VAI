import { N as reactExports, G as jsxRuntimeExports, O as Outlet } from "./server-BZBOQ4cu.js";
import { u as useAuth, b as useNavigate } from "./router-Dvb5RR_f.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function AuthenticatedLayout() {
  const {
    user,
    loading
  } = useAuth();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!loading && !user) {
      navigate({
        to: "/login",
        replace: true
      });
    }
  }, [loading, user, navigate]);
  if (loading || !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
export {
  AuthenticatedLayout as component
};
