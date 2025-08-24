import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, f as addAttribute, e as renderSlot } from './astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import { Image as $$Image } from './_astro_assets_Y108qhd3.mjs';
import { $ as $$Container } from './Container_BuhFX6Np.mjs';
import { $ as $$Link } from './Link_Ca2XuK28.mjs';
import { $ as $$Prose, a as $$Share } from './Share_uLfZjW79.mjs';
import { $ as $$Title } from './Title_hz0FThKY.mjs';
import { l as loadVideo } from './asset-helpers_DT22bNm6.mjs';
import { $ as $$Icon } from './Icon_g4TGa3ZF.mjs';
import { d as defaultLocale } from './site.config_DEdmCH04.mjs';
import { $ as $$BaseLayout } from './BaseLayout_DjMopDes.mjs';

const $$Astro = createAstro("https://uppsydigital.com");
const $$WorkLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WorkLayout;
  const currentLocale = Astro2.currentLocale;
  const componentLocales = {
    it: {
      visitProject: "Visita progetto"
    },
    en: {
      visitProject: "Visit project"
    }
  };
  const l = componentLocales[currentLocale ?? defaultLocale];
  const { frontmatter } = Astro2.props;
  const videoSrc = frontmatter.data?.video ? await loadVideo(frontmatter.data.video) : null;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-32 md:py-56"> ${renderComponent($$result2, "Container", $$Container, {}, { "default": async ($$result3) => renderTemplate` <div class="text-center"> ${renderComponent($$result3, "Title", $$Title, { "level": 1 }, { "default": async ($$result4) => renderTemplate`${frontmatter.data.title}` })} <p class="mx-auto max-w-2xl pt-8 text-base text-slate-500"> <em>${frontmatter.data?.description}</em> </p> ${frontmatter.data.link && renderTemplate`${renderComponent($$result3, "Link", $$Link, { "href": frontmatter.data.link, "target": "_blank", "class": "mt-10", "style": "outline" }, { "default": async ($$result4) => renderTemplate`${l.visitProject}${renderComponent($$result4, "Icon", $$Icon, { "name": "iconamoon:arrow-top-right-1-thin", "class": "inline-block w-6 h-6 ml-2" })} ` })}`} </div> <div class="flex w-full flex-col items-center justify-center pt-10"> ${"video" in frontmatter.data && frontmatter.data?.video && videoSrc ? renderTemplate`<video autoplay loop muted playsinline> <source${addAttribute(videoSrc, "src")}>
Your browser does not support the video tag.
</video>` : "cover" in frontmatter.data && frontmatter.data?.cover && renderTemplate`${renderComponent($$result3, "Image", $$Image, { "class": "w-full rounded-4xl lg:w-auto lg:min-w-[50rem] lg:rounded-5xl", "src": frontmatter.data?.cover, "alt": `Cover image for ${frontmatter.data?.title}` })}`} ${renderComponent($$result3, "Prose", $$Prose, {}, { "default": async ($$result4) => renderTemplate`${renderSlot($$result4, $$slots["default"])}` })} <div class="mx-auto w-full max-w-3xl pt-20"> ${renderComponent($$result3, "Share", $$Share, {})} </div> </div> ` })} </section> ` })}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/layouts/WorkLayout.astro", void 0);

export { $$WorkLayout as $ };
