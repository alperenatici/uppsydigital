import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate } from '../../../chunks/astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import { $ as $$WorkLayout } from '../../../chunks/WorkLayout_B47zT-vr.mjs';
import { g as getCollectionStaticPaths } from '../../../chunks/collection-helpers_BuqkOres.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://uppsydigital.com");
async function getStaticPaths() {
  return await getCollectionStaticPaths("works", "it");
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { data: work } = Astro2.props;
  const { Content } = await work.render();
  return renderTemplate`${renderComponent($$result, "WorkLayout", $$WorkLayout, { "frontmatter": work }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/pages/it/work/[...slug]/index.astro", void 0);

const $$file = "/Users/alialperenatici/Desktop/uppsydigital/src/pages/it/work/[...slug]/index.astro";
const $$url = "/it/work/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
