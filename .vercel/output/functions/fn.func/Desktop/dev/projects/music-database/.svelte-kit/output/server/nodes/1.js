

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.922b252e.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.fb9b0121.js","_app/immutable/chunks/singletons.e85888d9.js"];
export const stylesheets = [];
export const fonts = [];
