export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.500ed7fa.js","app":"_app/immutable/entry/app.92d35e7c.js","imports":["_app/immutable/entry/start.500ed7fa.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.e85888d9.js","_app/immutable/entry/app.92d35e7c.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.fb9b0121.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
