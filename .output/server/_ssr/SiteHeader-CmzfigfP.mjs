import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/SiteHeader-CmzfigfP.js
var import_jsx_runtime = require_jsx_runtime();
function SiteHeader() {
	const linkCls = "text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-border/60 bg-background/80 backdrop-blur sticky top-0 z-50",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-5 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "flex items-baseline gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-serif text-2xl text-primary leading-none",
					children: "Atelier"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
					children: "Projetos de Arquitetura"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "hidden md:flex items-center gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: linkCls,
						activeOptions: { exact: true },
						activeProps: { className: "text-primary" },
						children: "Início"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sobre",
						className: linkCls,
						activeProps: { className: "text-primary" },
						children: "Sobre"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cronograma",
						className: linkCls,
						activeProps: { className: "text-primary" },
						children: "Cronograma"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/projetos",
						className: linkCls,
						activeProps: { className: "text-primary" },
						children: "Projetos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/recursos",
						className: linkCls,
						activeProps: { className: "text-primary" },
						children: "Recursos"
					})
				]
			})]
		})
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border/60 mt-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row justify-between gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Atelier — Faculdade de Arquitetura"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-primary",
				children: "contato@atelier.edu"
			})]
		})
	});
}
export { SiteHeader as n, SiteFooter as t };
