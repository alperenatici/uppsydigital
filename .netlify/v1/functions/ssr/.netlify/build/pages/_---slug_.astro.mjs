import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot } from '../chunks/astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import { $ as $$Container } from '../chunks/Container_BuhFX6Np.mjs';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DjMopDes.mjs';
import { g as getCollectionStaticPaths } from '../chunks/collection-helpers_BuqkOres.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://uppsydigital.com");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "seo": frontmatter.data.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${frontmatter.data.hideTitle ? null : renderTemplate`<header class="py-32 lg:pt-40 lg:pb-36"> ${renderComponent($$result2, "Container", $$Container, { "tag": "div", "class": "mx-0 flex justify-center items-center gap-10" }, { "default": ($$result3) => renderTemplate` <div class="items-center text-sm font-medium justify-center flex min-h-[auto]"> <div class="items-center flex-col w-full m-auto text-6xl lg:text-[7.13rem] leading-none font-semibold"> <div class="items-center text-center flex-col justify-start flex gap-2 leading-[1.15]"> <h1 class="my-3 mx-0 max-w-screen-sm"> ${frontmatter.data.title} </h1> <h2 class="text-2xl lg:text-3xl max-w-screen-sm"> ${frontmatter.data.subtitle} </h2> </div> </div> </div> ` })} </header>`} ${renderSlot($$result2, $$slots["default"])} </main> ` })}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/layouts/PageLayout.astro", void 0);

const $$Astro = createAstro("https://uppsydigital.com");
async function getStaticPaths() {
  return getCollectionStaticPaths("pages");
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { data: page } = Astro2.props;
  const { Content } = await page.render();
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "frontmatter": page }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/pages/[...slug]/index.astro", void 0);

const $$file = "/Users/alialperenatici/Desktop/uppsydigital/src/pages/[...slug]/index.astro";
const $$url = "/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
