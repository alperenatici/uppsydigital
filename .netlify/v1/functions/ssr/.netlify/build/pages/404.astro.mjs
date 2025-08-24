import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../chunks/Container_BuhFX6Np.mjs';
import { $ as $$Link } from '../chunks/Link_Ca2XuK28.mjs';
import { $ as $$Title } from '../chunks/Title_hz0FThKY.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DjMopDes.mjs';
export { renderers } from '../renderers.mjs';

const $$NotFound = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "tag": "section", "class": "pt-52 pb-40 md:pb-48 md:pt-64" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto text-center flex flex-col max-w-xl gap-12"> <div class="flex flex-col gap-4"> ${renderComponent($$result2, "Title", $$Title, { "level": 4, "tag": 2 }, { "default": ($$result3) => renderTemplate`404` })} ${renderComponent($$result2, "Title", $$Title, { "level": 3, "tag": 1 }, { "default": ($$result3) => renderTemplate`Whoops! La pagina che stai cercando non è stata trovata.` })} </div> <div class="flex flex-col gap-2"> <p class="text-gray-500 dark:text-gray-400">
Ecco alcune pagine che potresti visitare:
</p> <ul class="flex flex-wrap justify-center items-center gap-x-4 text-gray-500 dark:text-gray-400"> <li> ${renderComponent($$result2, "Link", $$Link, { "href": "/" }, { "default": ($$result3) => renderTemplate`Home` })} </li> <li> ${renderComponent($$result2, "Link", $$Link, { "href": "/about" }, { "default": ($$result3) => renderTemplate`Chi siamo` })} </li> <li> ${renderComponent($$result2, "Link", $$Link, { "href": "/servizi" }, { "default": ($$result3) => renderTemplate`Servizi` })} </li> <li> ${renderComponent($$result2, "Link", $$Link, { "href": "/contatti" }, { "default": ($$result3) => renderTemplate`Contatti` })} </li> </ul> </div> </div> ` })}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/NotFound.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "NotFound", $$NotFound, {})} ` })}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/pages/404.astro", void 0);

const $$file = "/Users/alialperenatici/Desktop/uppsydigital/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
