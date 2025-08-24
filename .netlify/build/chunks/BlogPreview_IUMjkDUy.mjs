import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, f as addAttribute, a as renderTemplate } from './astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import { Image as $$Image } from './_astro_assets_Y108qhd3.mjs';
import { $ as $$Link } from './Link_Ca2XuK28.mjs';
import { u as unlocalizedUrl, t as translatePath } from './localization-helpers_TFb_TSQM.mjs';
import { $ as $$Icon } from './Icon_g4TGa3ZF.mjs';
import { d as defaultLocale } from './site.config_DEdmCH04.mjs';
/* empty css                                                                   */

const $$Astro = createAstro("https://uppsydigital.com");
const $$BlogPreview = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPreview;
  const currentLocale = Astro2.currentLocale;
  const { post } = Astro2.props;
  const unlocalizedPath = unlocalizedUrl(post.slug);
  const localizedPath = translatePath(
    currentLocale ?? defaultLocale,
    `/post${unlocalizedPath}`
  );
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-65veb55m> ${renderComponent($$result, "Link", $$Link, { "href": localizedPath, "localized": false, "class": "blog-item text-blue-700 relative object-cover underline inline-block w-full max-w-full rounded-2xl group", "data-astro-cid-65veb55m": true }, { "default": ($$result2) => renderTemplate` <div class="play-button text-white items-center justify-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute z-10 flex max-w-full opacity-0 group-hover:opacity-100 transition-all duration-300" data-astro-cid-65veb55m> <div class="text-black bg-white/[0.75] items-center backdrop-blur-[5px] cursor-pointer justify-center flex w-full h-full rounded-full" data-astro-cid-65veb55m> ${renderComponent($$result2, "Icon", $$Icon, { "name": "iconamoon:arrow-top-right-1-thin", "class": "align-middle inline-block w-12 h-12 max-w-full", "data-astro-cid-65veb55m": true })} </div> </div> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.cover, "alt": post.data.title, "class": "cursor-pointer align-middle inline-block w-full max-w-full rounded-2xl object-cover h-64", "data-astro-cid-65veb55m": true })} ` })} <div class="items-start flex-col pt-8 flex" data-astro-cid-65veb55m> <span class="font-semibold pb-1.5 px-6 pt-2 uppercase inline-block border-2 border-black border-solid rounded-3xl" data-astro-cid-65veb55m> ${post.data.category} </span> <a${addAttribute(localizedPath, "href")} class="text-3xl font-semibold mt-5 mb-3" data-astro-cid-65veb55m> ${post.data.title} </a> <div class="mt-5 text-lg" data-astro-cid-65veb55m> <p class="mb-3" data-astro-cid-65veb55m> ${post.data.pubDate.toLocaleDateString("en-US", {
    month: "long",
    // full month name
    day: "numeric",
    // numeric day
    year: "numeric"
    // numeric year
  })} </p> </div> </div> </div> `;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/sections/BlogPreview.astro", void 0);

export { $$BlogPreview as $ };
