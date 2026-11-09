import { n as SiteHeader, t as SiteFooter } from "./SiteHeader-CmzfigfP.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/cronograma-0R4Br_FZ.js
var import_jsx_runtime = require_jsx_runtime();
var fases = [
	{
		n: "Fase 01",
		titulo: "Leitura do território",
		data: "12 Fev – 05 Mar",
		entrega: "Caderno de análise urbana",
		items: [
			"Mapas em escala 1:2000",
			"Diagnóstico fotográfico",
			"Texto crítico (3.000 palavras)"
		]
	},
	{
		n: "Fase 02",
		titulo: "Partido e conceito",
		data: "08 Mar – 02 Abr",
		entrega: "Estudo preliminar",
		items: [
			"Croquis conceituais",
			"Maquete de estudo (1:500)",
			"Memorial descritivo"
		]
	},
	{
		n: "Fase 03",
		titulo: "Anteprojeto",
		data: "05 Abr – 21 Mai",
		entrega: "Pranchas técnicas",
		items: [
			"Plantas, cortes e elevações 1:200",
			"Implantação 1:500",
			"Perspectivas internas"
		]
	},
	{
		n: "Fase 04",
		titulo: "Detalhamento e entrega final",
		data: "24 Mai – 28 Jun",
		entrega: "Projeto executivo",
		items: [
			"Pranchas 1:50 e detalhes 1:20",
			"Maquete final 1:200",
			"Apresentação pública 15 min"
		]
	}
];
function CronogramaPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-6 py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs uppercase tracking-[0.4em] text-primary mb-6",
						children: "Calendário 2026.1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-serif text-5xl md:text-7xl leading-[1.05] max-w-3xl",
						children: [
							"Quatro fases, um ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-primary",
								children: "projeto"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-muted-foreground max-w-2xl leading-relaxed",
						children: "O semestre é organizado em quatro fases sequenciais. Cada uma culmina em uma entrega avaliada coletivamente."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 space-y-px bg-border",
						children: fases.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-background grid md:grid-cols-[180px_1fr_1fr] gap-8 p-10 hover:bg-card transition-colors",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs uppercase tracking-[0.3em] text-primary",
									children: f.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: f.data
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-serif text-3xl",
									children: f.titulo
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm text-muted-foreground",
									children: ["Entrega: ", f.entrega]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "space-y-2 text-sm text-muted-foreground",
									children: f.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-primary mt-2 h-px w-3 bg-primary block shrink-0" }), i]
									}, i))
								})
							]
						}, f.n))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
export { CronogramaPage as component };
