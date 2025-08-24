import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot } from './astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import { Image as $$Image } from './_astro_assets_Y108qhd3.mjs';
import { $ as $$Container } from './Container_BuhFX6Np.mjs';
import { $ as $$Link } from './Link_Ca2XuK28.mjs';
import { $ as $$Prose, a as $$Share } from './Share_uLfZjW79.mjs';
import { $ as $$Title } from './Title_hz0FThKY.mjs';
import { d as defaultLocale } from './site.config_DEdmCH04.mjs';
import { $ as $$BaseLayout } from './BaseLayout_DjMopDes.mjs';

const $$Astro = createAstro("https://uppsydigital.com");
const $$PostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const currentLocale = Astro2.currentLocale;
  const componentLocales = {
    it: {
      writtenBy: "Scritto da: ",
      writtenAt: "nel"
    },
    en: {
      writtenBy: "Written by: ",
      writtenAt: "on"
    }
  };
  const l = componentLocales[currentLocale ?? defaultLocale];
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-32 md:py-56"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="text-center"> ${"author" in frontmatter.data && frontmatter?.data?.author && "pubDate" in frontmatter.data && frontmatter?.data?.pubDate && renderTemplate`<div class="inline-flex items-center gap-4 pb-4 lg:pb-6"> <span class="text-xs font-semibold uppercase tracking-wide text-black"> <span> ${l.writtenBy} ${frontmatter.data?.author} ${l.writtenAt} </span> ${frontmatter.data?.pubDate?.toString().slice(0, 10)} </span> </div>`} ${renderComponent($$result3, "Title", $$Title, { "level": 1 }, { "default": ($$result4) => renderTemplate`${frontmatter.data.title}` })} <p class="mx-auto max-w-2xl pt-8 text-base text-slate-500"> <em>${frontmatter.data?.description}</em> </p> </div> <div class="flex w-full flex-col items-center justify-center pt-12"> <div class="flex flex-wrap justify-center gap-3"> ${"tags" in frontmatter.data && frontmatter.data?.tags?.map((tag) => renderTemplate`<li class="list-none"> ${renderComponent($$result3, "Link", $$Link, { "href": `/tags/${tag}`, "size": "md", "style": "outline" }, { "default": ($$result4) => renderTemplate`${tag}` })} </li>`)} </div> ${"cover" in frontmatter.data && frontmatter.data?.cover && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "class": "mt-12 w-full rounded-4xl lg:w-auto lg:min-w-[50rem] lg:rounded-5xl", "src": frontmatter.data?.cover, "alt": `Cover image for ${frontmatter.data?.title}` })}`} ${renderComponent($$result3, "Prose", $$Prose, {}, { "default": ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["default"])}` })} <div class="mx-auto w-full max-w-3xl pt-20"> ${renderComponent($$result3, "Share", $$Share, {})} </div> </div> ` })} </section> ` })}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/layouts/PostLayout.astro", void 0);

export { $$PostLayout as $ };
