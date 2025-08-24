import { c as createComponent, a as renderTemplate, d as renderHead } from '../chunks/astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Keystatic = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Keystatic Admin</title>', `</head> <body> <div id="keystatic-app"></div> <script type="module">
        import { createRoot } from 'react-dom/client';
        import { createElement } from 'react';
        import { Keystatic } from '@keystatic/core/ui';
        import config from '../../keystatic.config.js';

        const container = document.getElementById('keystatic-app');
        const root = createRoot(container);
        
        root.render(createElement(Keystatic, { config }));
    <\/script> </body> </html>`])), renderHead());
}, "/Users/alialperenatici/Desktop/uppsydigital/src/pages/keystatic.astro", void 0);

const $$file = "/Users/alialperenatici/Desktop/uppsydigital/src/pages/keystatic.astro";
const $$url = "/keystatic";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Keystatic,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
