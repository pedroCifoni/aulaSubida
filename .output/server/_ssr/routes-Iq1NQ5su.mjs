import { n as SiteHeader, t as SiteFooter } from "./SiteHeader-CmzfigfP.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
// node_modules/.nitro/vite/services/ssr/assets/routes-Iq1NQ5su.js
var import_jsx_runtime = require_jsx_runtime();
var hero_architecture_default = "/assets/hero-architecture-Dd7ra-87.jpg";
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_architecture_default,
						alt: "",
						className: "h-full w-full object-cover opacity-40",
						width: 1600,
						height: 1200
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-6 pt-32 pb-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs uppercase tracking-[0.4em] text-primary mb-6",
							children: "Semestre 2026.1 · Turma A"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-serif text-6xl md:text-8xl leading-[0.95] text-foreground max-w-4xl",
							children: [
								"Pensar o espaço,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "italic text-primary",
									children: "desenhar"
								}),
								" a ideia."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed",
							children: "Um ateliê digital para alunos de Projetos de Arquitetura. Cronograma, entregas, galeria de trabalhos e referências reunidos em um só lugar."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/cronograma",
								className: "inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] hover:bg-accent transition-colors",
								children: "Ver cronograma →"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projetos",
								className: "inline-flex items-center gap-3 border border-border px-7 py-4 text-xs uppercase tracking-[0.25em] hover:border-primary hover:text-primary transition-colors",
								children: "Projetos da turma"
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-3 gap-px bg-border",
				children: [
					{
						n: "01",
						t: "Sobre",
						d: "Conheça a proposta pedagógica e o professor do ateliê.",
						to: "/sobre"
					},
					{
						n: "02",
						t: "Cronograma",
						d: "Fases do projeto, prazos e materiais de cada entrega.",
						to: "/cronograma"
					},
					{
						n: "03",
						t: "Recursos",
						d: "Bibliografia, downloads e referências de arquitetos.",
						to: "/recursos"
					}
				].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: c.to,
					className: "group bg-background p-10 hover:bg-card transition-colors",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-primary tracking-[0.3em]",
							children: c.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-3xl mt-4 group-hover:text-primary transition-colors",
							children: c.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: c.d
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block mt-8 text-xs uppercase tracking-[0.25em] text-primary",
							children: "Acessar →"
						})
					]
				}, c.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-t border-border/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "font-serif text-3xl md:text-4xl leading-snug italic text-foreground",
						children: ["\"A arquitetura é o jogo sábio, correto e magnífico dos volumes reunidos sob a luz.\"", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
							className: "mt-6 text-sm not-italic uppercase tracking-[0.3em] text-primary",
							children: "— Le Corbusier"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-muted-foreground space-y-4 leading-relaxed",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Cada semestre é uma oportunidade de transformar uma intuição em forma construída. Aqui você encontra tudo o que precisa para conduzir seu projeto do conceito à entrega final." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/sobre",
							className: "inline-block text-primary text-xs uppercase tracking-[0.25em] mt-4 border-b border-primary pb-1",
							children: "Sobre o ateliê"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
export { Index as component };
