import { n as __exportAll } from "../_runtime.mjs";
import { _ as createRootRouteWithContext, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
// node_modules/.nitro/vite/services/ssr/assets/router-ClbZRfNx.js
var router_ClbZRfNx_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CzopaCA8.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Atelier — Projetos de Arquitetura" },
			{
				name: "description",
				content: "Espaço de estudos para alunos de projetos de arquitetura: cronograma, projetos, recursos e referências."
			},
			{
				name: "author",
				content: "Atelier"
			},
			{
				property: "og:title",
				content: "Atelier — Projetos de Arquitetura"
			},
			{
				property: "og:description",
				content: "Espaço de estudos para alunos de projetos de arquitetura."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./routes-Iq1NQ5su.mjs");
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Atelier — Projetos de Arquitetura" },
		{
			name: "description",
			content: "Plataforma de estudos para alunos de projetos de arquitetura."
		},
		{
			property: "og:title",
			content: "Atelier — Projetos de Arquitetura"
		},
		{
			property: "og:description",
			content: "Plataforma de estudos para alunos de projetos de arquitetura."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./cronograma-0R4Br_FZ.mjs");
var Route$3 = createFileRoute("/cronograma")({
	head: () => ({ meta: [
		{ title: "Cronograma e Entregas — Atelier" },
		{
			name: "description",
			content: "Fases, prazos e materiais de cada entrega do semestre."
		},
		{
			property: "og:title",
			content: "Cronograma e Entregas — Atelier"
		},
		{
			property: "og:description",
			content: "Fases, prazos e materiais de cada entrega."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./projetos-B8KeHHU5.mjs");
var Route$2 = createFileRoute("/projetos")({
	head: () => ({ meta: [
		{ title: "Projetos da Turma — Atelier" },
		{
			name: "description",
			content: "Galeria de projetos desenvolvidos pelos alunos do ateliê."
		},
		{
			property: "og:title",
			content: "Projetos da Turma — Atelier"
		},
		{
			property: "og:description",
			content: "Galeria de projetos dos alunos."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./recursos-DiZqEF73.mjs");
var Route$1 = createFileRoute("/recursos")({
	head: () => ({ meta: [
		{ title: "Recursos e Referências — Atelier" },
		{
			name: "description",
			content: "Bibliografia, downloads e referências para o ateliê de projetos."
		},
		{
			property: "og:title",
			content: "Recursos e Referências — Atelier"
		},
		{
			property: "og:description",
			content: "Bibliografia e referências para o ateliê."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./sobre-Hd24HxZT.mjs");
var Route = createFileRoute("/sobre")({
	head: () => ({ meta: [
		{ title: "Sobre o Ateliê — Atelier" },
		{
			name: "description",
			content: "Proposta pedagógica do ateliê de Projetos de Arquitetura e apresentação do professor."
		},
		{
			property: "og:title",
			content: "Sobre o Ateliê — Atelier"
		},
		{
			property: "og:description",
			content: "Proposta pedagógica e apresentação do professor."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	CronogramaRoute: Route$3.update({
		id: "/cronograma",
		path: "/cronograma",
		getParentRoute: () => Route$5
	}),
	ProjetosRoute: Route$2.update({
		id: "/projetos",
		path: "/projetos",
		getParentRoute: () => Route$5
	}),
	RecursosRoute: Route$1.update({
		id: "/recursos",
		path: "/recursos",
		getParentRoute: () => Route$5
	}),
	SobreRoute: Route.update({
		id: "/sobre",
		path: "/sobre",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
export { getRouter, router_ClbZRfNx_exports as t };
