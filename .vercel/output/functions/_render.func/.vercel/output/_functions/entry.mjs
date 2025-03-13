import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_DDzUfxvf.mjs';
import { manifest } from './manifest_Ds0Qa-LC.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog/category/_category_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/blog/_---slug_.astro.mjs');
const _page5 = () => import('./pages/code-of-conduct.astro.mjs');
const _page6 = () => import('./pages/debug.astro.mjs');
const _page7 = () => import('./pages/docs/_---slug_.astro.mjs');
const _page8 = () => import('./pages/guides.astro.mjs');
const _page9 = () => import('./pages/guides/_---slug_.astro.mjs');
const _page10 = () => import('./pages/landing.astro.mjs');
const _page11 = () => import('./pages/releases/_slug_.astro.mjs');
const _page12 = () => import('./pages/releases.astro.mjs');
const _page13 = () => import('./pages/rss.xml.astro.mjs');
const _page14 = () => import('./pages/soon.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/category/[category].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/blog/[...slug].astro", _page4],
    ["src/pages/code-of-conduct.md", _page5],
    ["src/pages/debug.md", _page6],
    ["src/pages/docs/[...slug].astro", _page7],
    ["src/pages/guides/index.astro", _page8],
    ["src/pages/guides/[...slug].astro", _page9],
    ["src/pages/landing.astro", _page10],
    ["src/pages/releases/[slug].astro", _page11],
    ["src/pages/releases/index.astro", _page12],
    ["src/pages/rss.xml.js", _page13],
    ["src/pages/soon.md", _page14],
    ["src/pages/index.astro", _page15]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "739689c7-b941-45d1-9f54-b1d86f8316d3",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
