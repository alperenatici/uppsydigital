import { b as createAstro, c as createComponent, m as maybeRenderHead, f as addAttribute, r as renderComponent, e as renderSlot, g as renderScript, a as renderTemplate, u as unescapeHTML } from './astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import { $ as $$Container } from './Container_BuhFX6Np.mjs';
import { $ as $$Link } from './Link_Ca2XuK28.mjs';
import { $ as $$Icon } from './Icon_g4TGa3ZF.mjs';
/* empty css                                                            */
/* empty css                                                            */
import { Image as $$Image } from './_astro_assets_Y108qhd3.mjs';
import { g as getCollection } from './_astro_content_CC7KtNwO.mjs';
import { $ as $$WorkPreview } from './WorkPreview_BDVb8zIi.mjs';
import { $ as $$BlogPreview } from './BlogPreview_IUMjkDUy.mjs';

const promoVideo = "/_astro/promo.8ev6z6da.webm";

const $$Astro$5 = createAstro("https://uppsydigital.com");
const $$Blob = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Blob;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-zxqwhg62> <canvas id="blob"${addAttribute(["touch:pointer-events-none", className], "class:list")} data-astro-cid-zxqwhg62></canvas> <video id="video-blob" autoplay loop muted controls data-astro-cid-zxqwhg62> <source${addAttribute(promoVideo, "src")} data-astro-cid-zxqwhg62>
Your browser does not support the video tag.
</video> <div id="blob-cursor-follower" class="follower" data-astro-cid-zxqwhg62> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:play-circle", "size": 100, "data-astro-cid-zxqwhg62": true })} </div> ${renderSlot($$result, $$slots["default"])} </div>  ${renderScript($$result, "/Users/alialperenatici/Desktop/uppsydigital/src/components/sections/Blob.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/sections/Blob.astro", void 0);

const $$Astro$4 = createAstro("https://uppsydigital.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const defaultButtons = [
    {
      title: "Contattaci",
      href: "/contact",
      style: "button",
      icon: "iconamoon:arrow-top-right-1-thin"
    }
  ];
  const { title, subtitle, buttons = defaultButtons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="hero" class="items-center text-sm font-medium justify-center pb-48 lg:px-20 pt-32 lg:pt-44 relative flex min-h-[100svh]" data-astro-cid-anhloy43> ${renderComponent($$result, "Container", $$Container, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` <div class="items-center flex-col w-full m-auto" data-astro-cid-anhloy43> <div class="items-center auto-cols-fr grid-cols-1 lg:grid-cols-2 grid-rows-[auto] grid gap-[3.13rem]" data-astro-cid-anhloy43> <div class="items-start flex-col justify-start flex gap-2 row-start-1" data-astro-cid-anhloy43> <h1 data-hero-reveal class="text-4xl md:text-7xl leading-tight my-3 mx-0" data-astro-cid-anhloy43>${unescapeHTML(title)}</h1> <div class="lg:mt-20" data-astro-cid-anhloy43> <div data-astro-cid-anhloy43> <p data-hero-reveal class="text-3xl font-semibold mb-3" data-astro-cid-anhloy43>${unescapeHTML(subtitle)}</p> <div class="mt-10 text-white" data-astro-cid-anhloy43> ${buttons.map(
    ({ title: title2, href, style, icon }) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "data-hero-reveal": true, "href": href, "style": style, "icon": icon, "data-astro-cid-anhloy43": true }, { "default": ($$result3) => renderTemplate`${title2}` })}`
  )} </div> </div> </div> </div> <div class="justify-self-center col-span-1 row-span-1" data-astro-cid-anhloy43> ${renderComponent($$result2, "Blob", $$Blob, { "class": "xl:pl-32", "data-astro-cid-anhloy43": true })} </div> </div> </div> <div class="items-center bottom-[3.13rem] justify-center left-0 absolute right-0 z-10 flex max-w-[80%] overflow-hidden m-auto text-blue-700" data-astro-cid-anhloy43> <div class="items-center flex" data-astro-cid-anhloy43> <button id="scroll-down-button" class="scroll-down-button items-start justify-center underline flex w-5 h-7 max-w-full border-2 border-black border-solid rounded-xl m-auto" data-astro-cid-anhloy43><div class="bg-black cursor-pointer w-0.5 h-1 mt-1.5" data-astro-cid-anhloy43></div> </button> </div> </div> ` })} </div>  ${renderScript($$result, "/Users/alialperenatici/Desktop/uppsydigital/src/components/sections/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/sections/Hero.astro", void 0);

const $$Astro$3 = createAstro("https://uppsydigital.com");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Services;
  const { title, services } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/pages/about/about.png": () => import('./about_BXi3tHO0.mjs'),"/src/assets/pages/blog/cover.svg": () => import('./cover_BoxP5Gnn.mjs'),"/src/assets/pages/homepage/cactus.svg": () => import('./cactus__HAKqflQ.mjs'),"/src/assets/pages/homepage/clean-teeth.svg": () => import('./clean-teeth_B2wnmCTG.mjs'),"/src/assets/pages/homepage/dental-check-up-schedule.svg": () => import('./dental-check-up-schedule_B53sBUKQ.mjs'),"/src/assets/pages/homepage/dental-filling.svg": () => import('./dental-filling_BQxSQho3.mjs'),"/src/assets/pages/homepage/dental-implant.svg": () => import('./dental-implant_JIOT7pBM.mjs'),"/src/assets/pages/homepage/dental.svg": () => import('./dental_DWcrc53R.mjs'),"/src/assets/pages/homepage/google-white.png": () => Promise.resolve().then(() => googleWhite$1),"/src/assets/pages/homepage/hitech.svg": () => import('./hitech_EGZ86hSW.mjs'),"/src/assets/pages/homepage/marketing-service.png": () => import('./marketing-service_MBEKZ0Xr.mjs'),"/src/assets/pages/homepage/orthodontics.svg": () => import('./orthodontics_C3fbek0f.mjs'),"/src/assets/pages/homepage/paidmedia-service.png": () => import('./paidmedia-service_D1k2-gPB.mjs'),"/src/assets/pages/homepage/plaque.svg": () => import('./plaque_C3Gdi6b_.mjs'),"/src/assets/pages/homepage/play.svg": () => import('./play_Tb4B6uiu.mjs'),"/src/assets/pages/homepage/rise.svg": () => import('./rise_B2sGS97Q.mjs'),"/src/assets/pages/homepage/socialmedia-service.png": () => import('./socialmedia-service_DSf6_5dB.mjs'),"/src/assets/pages/homepage/teeth-whitening.svg": () => import('./teeth-whitening_xrI0etxM.mjs'),"/src/assets/pages/homepage/terra.svg": () => import('./terra_B9giNtx9.mjs'),"/src/assets/pages/homepage/vision.svg": () => import('./vision_CKBsixk1.mjs')

});
  return renderTemplate`${maybeRenderHead()}<div class="pt-36" id="services"> <p class="text-[2.13rem] leading-9 font-semibold lg:max-w-[64%] mb-3">${unescapeHTML(title)}</p> <div class="mt-16"> <div class="auto-cols-fr grid-cols-1 md:grid-cols-3 grid-rows-[auto] grid gap-10"> ${services.map(({ title: title2, description, icon }) => renderTemplate`<div class="items-stretch flex-col flex h-full max-w-[90%] m-auto col-span-1 row-span-1"> ${renderComponent($$result, "Image", $$Image, { "src": images[icon](), "alt": `Service ${title2}`, "class": "align-middle inline-block w-12 h-12 max-w-full" })} <div class="mt-16 text-[1.38rem] leading-7 font-semibold"> <h3 class="mb-3">${title2}</h3> </div> <div class="mt-3.5 text-lg"> <p class="mb-3">${description}</p> </div> </div>`)} </div> </div> </div>`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/sections/Services.astro", void 0);

const $$Astro$2 = createAstro("https://uppsydigital.com");
const $$RecentWork = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RecentWork;
  const currentLocale = Astro2.currentLocale;
  const works = await getCollection("works");
  const recentWorks = works.map((work) => {
    const [lang, ...slug] = work.slug.split("/");
    return {
      ...work,
      lang,
      slug: work.slug.startsWith("/") ? work.slug : `/${work.slug}`
    };
  }).filter((page) => page.lang === currentLocale).sort(
    (a, b) => a.data.lastUpdateDate.getTime() - b.data.lastUpdateDate.getTime()
  ).slice(0, 4);
  const { title, buttons } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="items-center text-sm font-medium justify-center flex pt-20 pb-16"> <h2 class="text-[3.13rem] leading-none font-semibold my-1">${title}</h2> </div> <div class="text-sm font-medium auto-cols-fr grid-cols-1 md:grid-cols-2 grid-rows-[auto_auto] grid gap-[3.13rem]"> ${recentWorks.map((work) => renderTemplate`${renderComponent($$result, "WorkPreview", $$WorkPreview, { "work": work })}`)} </div> <div class="items-center flex-col text-sm font-medium flex text-white pt-16 pb-20"> ${buttons.map(({ title: title2, href, style, icon }) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": href, "style": style, "icon": icon }, { "default": async ($$result2) => renderTemplate`${title2}` })}`)} </div>`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/sections/RecentWork.astro", void 0);

const googleWhite = new Proxy({"src":"/_astro/google-white.Jo_8AMLF.png","width":2400,"height":2449,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alialperenatici/Desktop/uppsydigital/src/assets/pages/homepage/google-white.png";
							}
							
							return target[name];
						}
					});

const googleWhite$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: googleWhite
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://uppsydigital.com");
const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Testimonial;
  const { testimonial, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-sm font-medium pt-20 pb-14"> <div class="bg-black flex-grow py-20 px-16 rounded-3xl"> <div class="items-center flex-col justify-center text-center flex"> ${renderComponent($$result, "Image", $$Image, { "src": googleWhite, "alt": "Google logo", "class": "object-contain align-middle inline-block w-full h-10 max-w-[8.13rem] mb-8" })} <h2 class="text-white text-[2.13rem] leading-9 lg:max-w-[60%] mb-1">
"${testimonial}"
</h2> <div class="bg-white/[0.9] w-12 h-0 my-8 m-auto mx-auto"></div> <h3 class="text-white text-lg">${name}</h3> </div> </div> </div>`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/sections/Testimonial.astro", void 0);

const $$Astro = createAstro("https://uppsydigital.com");
const $$BlogLatest = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogLatest;
  const currentLocale = Astro2.currentLocale;
  const posts = await getCollection("posts");
  const recentPosts = posts.map((post) => {
    const [lang, ...slug] = post.slug.split("/");
    return {
      ...post,
      lang,
      slug: post.slug.startsWith("/") ? post.slug : `/${post.slug}`
    };
  }).filter((post) => post.lang === currentLocale).sort(
    (a, b) => a.data.lastUpdateDate.getTime() - b.data.lastUpdateDate.getTime()
  ).slice(0, 4);
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-sm font-medium pt-20 pb-32"> <div class="items-center justify-center flex text-[3.13rem] leading-none font-semibold"> <h2 class="my-1">${title}</h2> </div> <div class="mt-16"> <div class="gap-x-[1.88rem] auto-cols-fr grid-cols-1 lg:grid-cols-3 grid-rows-[auto] gap-y-10 grid"> ${recentPosts.map((post) => renderTemplate`${renderComponent($$result, "BlogPreview", $$BlogPreview, { "post": post })}`)} </div> </div> </div>`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/sections/BlogLatest.astro", void 0);

export { $$BlogLatest as $, $$Testimonial as a, $$RecentWork as b, $$Services as c, $$Hero as d };
