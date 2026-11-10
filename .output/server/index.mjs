globalThis.__nitro_main__ = import.meta.url;
import { t as HookableCore } from "./_libs/hookable.mjs";
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as FastResponse } from "./_libs/srvx.mjs";
// #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
// #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/cronograma-DbeB6ecu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"993-qCY+3ldcWZ7jWeRnqHzUWh/v4XE\"",
		"mtime": "2026-11-09T23:58:01.652Z",
		"size": 2451,
		"path": "../public/assets/cronograma-DbeB6ecu.js"
	},
	"/assets/hero-architecture-Dd7ra-87.jpg": {
		"type": "image/jpeg",
		"etag": "\"3098b-mXVR71Emyl+x1eiqaYMCMyS1HBk\"",
		"mtime": "2026-11-09T23:58:01.654Z",
		"size": 199051,
		"path": "../public/assets/hero-architecture-Dd7ra-87.jpg"
	},
	"/assets/proj-1-BmSZ2Sfm.jpg": {
		"type": "image/jpeg",
		"etag": "\"744c-mq2QCvCvfFjxjCeqQheARXraIOE\"",
		"mtime": "2026-11-09T23:58:01.654Z",
		"size": 29772,
		"path": "../public/assets/proj-1-BmSZ2Sfm.jpg"
	},
	"/assets/index-DVfND7qb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ac5f-4saDQCaG46loGYfwlxB2ccgK8eY\"",
		"mtime": "2026-11-09T23:58:01.637Z",
		"size": 371807,
		"path": "../public/assets/index-DVfND7qb.js"
	},
	"/assets/proj-2-_bpVt2OR.jpg": {
		"type": "image/jpeg",
		"etag": "\"8d6e-qlAPnzd7jMKjQv3IIe3sOVg6q2E\"",
		"mtime": "2026-11-09T23:58:01.654Z",
		"size": 36206,
		"path": "../public/assets/proj-2-_bpVt2OR.jpg"
	},
	"/assets/proj-3-DhOdqhNN.jpg": {
		"type": "image/jpeg",
		"etag": "\"125f8-0R9BjvdukUb+a/H5XckwmLBgC9c\"",
		"mtime": "2026-11-09T23:58:01.654Z",
		"size": 75256,
		"path": "../public/assets/proj-3-DhOdqhNN.jpg"
	},
	"/assets/recursos-D8VV2bM9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c4c-QlvJRDxGGFMxe+5b+UbCFrg1drE\"",
		"mtime": "2026-11-09T23:58:01.652Z",
		"size": 3148,
		"path": "../public/assets/recursos-D8VV2bM9.js"
	},
	"/assets/projetos-DuA9TVGH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"808-RAF2ZrhbKrjSLe+1ABWEq1N4bQA\"",
		"mtime": "2026-11-09T23:58:01.652Z",
		"size": 2056,
		"path": "../public/assets/projetos-DuA9TVGH.js"
	},
	"/assets/routes-nEYKNByk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"eaa-VPFWfUS7IBLOULO5G0KnkcU+sZ4\"",
		"mtime": "2026-11-09T23:58:01.654Z",
		"size": 3754,
		"path": "../public/assets/routes-nEYKNByk.js"
	},
	"/assets/SiteHeader-CfFqFR-P.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6e1-my53gFCYRjnzjIB0ZuNfhFeEgHg\"",
		"mtime": "2026-11-09T23:58:01.637Z",
		"size": 1761,
		"path": "../public/assets/SiteHeader-CfFqFR-P.js"
	},
	"/assets/sobre-CfdJUwxv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a89-YATFLt/6bsihAWCMHlA+hwsbsKM\"",
		"mtime": "2026-11-09T23:58:01.654Z",
		"size": 2697,
		"path": "../public/assets/sobre-CfdJUwxv.js"
	},
	"/assets/styles-CzopaCA8.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1362d-GrU/lDO5dik7aAcZbLM1ajjPD4s\"",
		"mtime": "2026-11-09T23:58:01.654Z",
		"size": 79405,
		"path": "../public/assets/styles-CzopaCA8.css"
	}
};
// #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
// node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
// #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_guQ7jn = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_guQ7jn
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
// node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
// #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
// #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
// node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
// node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
// node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
export { cloudflare_module_default as default };
