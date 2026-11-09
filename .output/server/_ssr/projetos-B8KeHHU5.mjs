import { n as SiteHeader, t as SiteFooter } from "./SiteHeader-CmzfigfP.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/projetos-B8KeHHU5.js
var import_jsx_runtime = require_jsx_runtime();
var projetos = [
	{
		img: "/assets/proj-1-BmSZ2Sfm.jpg",
		autor: "Marina Coelho",
		titulo: "Casa Pátio em Olinda",
		tipo: "Residencial",
		alt: "Planta baixa em linhas douradas sobre fundo escuro"
	},
	{
		img: "/assets/proj-2-_bpVt2OR.jpg",
		autor: "João Vasconcelos",
		titulo: "Centro Cultural na Lapa",
		tipo: "Institucional",
		alt: "Maquete física de edifício institucional"
	},
	{
		img: "/assets/proj-3-DhOdqhNN.jpg",
		autor: "Beatriz Almeida",
		titulo: "Refúgio na Serra",
		tipo: "Habitação isolada",
		alt: "Perspectiva aquarelada de residência contemporânea"
	}
];
function ProjetosPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-6 py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.4em] text-primary mb-6",
						children: "Mostra 2026.1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl",
						children: [
							"Trabalhos da ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "turma"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground max-w-2xl leading-relaxed",
						children: "Uma seleção dos projetos em desenvolvimento neste semestre."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10",
						children: projetos.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-square overflow-hidden bg-card",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.img,
									alt: p.alt,
									width: 800,
									height: 800,
									loading: "lazy",
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs uppercase tracking-[0.25em] text-primary",
										children: p.tipo
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-serif text-2xl mt-2 group-hover:text-primary transition-colors",
										children: p.titulo
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground mt-1",
										children: p.autor
									})
								]
							})]
						}, p.titulo))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
export { ProjetosPage as component };
