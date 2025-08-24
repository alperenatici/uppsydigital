import { b as createAstro, c as createComponent, f as addAttribute, g as renderScript, a as renderTemplate, s as spreadAttributes, u as unescapeHTML, r as renderComponent, d as renderHead, e as renderSlot, F as Fragment, m as maybeRenderHead, h as createTransitionScope } from './astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { g as getLocalizedSettings, t as translatePath, u as unlocalizedUrl } from './localization-helpers_TFb_TSQM.mjs';
import { g as getCollection } from './_astro_content_CC7KtNwO.mjs';
import { $ as $$Container } from './Container_BuhFX6Np.mjs';
import { $ as $$Link } from './Link_Ca2XuK28.mjs';
import { l as locales, d as defaultLocale } from './site.config_DEdmCH04.mjs';
import { $ as $$Icon } from './Icon_g4TGa3ZF.mjs';

const $$Astro$d = createAstro("https://uppsydigital.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro/components/ClientRouter.astro", void 0);

const pwaAssetsHead = {"links":[{"href":"/favicon.ico","rel":"icon","sizes":"48x48"},{"href":"/favicon.svg","rel":"icon","sizes":"any","type":"image/svg+xml"},{"href":"/apple-touch-icon-180x180.png","rel":"apple-touch-icon"},{"href":"/apple-splash-portrait-light-1536x2048.png","rel":"apple-touch-startup-image","media":"screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{"href":"/apple-splash-landscape-light-2048x1536.png","rel":"apple-touch-startup-image","media":"screen and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"},{"href":"/apple-splash-portrait-dark-1536x2048.png","rel":"apple-touch-startup-image","media":"screen and (prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"},{"href":"/apple-splash-landscape-dark-2048x1536.png","rel":"apple-touch-startup-image","media":"screen and (prefers-color-scheme: dark) and (device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}],"themeColor":{"name":"theme-color","content":"#ffffff"}};

const pwaInfo = {"pwaInDevEnvironment":false,"webManifest":{"href":"/manifest.webmanifest","useCredentials":false,"linkTag":"<link rel=\"manifest\" href=\"/manifest.webmanifest\">"}};

const $$Astro$c = createAstro("https://uppsydigital.com");
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$b = createAstro("https://uppsydigital.com");
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$a = createAstro("https://uppsydigital.com");
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$9 = createAstro("https://uppsydigital.com");
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$8 = createAstro("https://uppsydigital.com");
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$7 = createAstro("https://uppsydigital.com");
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$6 = createAstro("https://uppsydigital.com");
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$5 = createAstro("https://uppsydigital.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/node_modules/astro-seo/src/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$4 = createAstro("https://uppsydigital.com");
const $$Head = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Head;
  const currentLocale = Astro2.currentLocale;
  const { seo: defaultSeo, style } = getLocalizedSettings(currentLocale);
  const { seo: seoProp } = Astro2.props;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site).toString();
  const pathWithSlash = Astro2.url.pathname.endsWith("/") ? Astro2.url.pathname : `${Astro2.url.pathname}/`;
  const shareImage = new URL(
    "og.png",
    new URL(pathWithSlash, Astro2.site)
  ).toString();
  const baseSeo = {
    title: seoProp?.title ?? defaultSeo.title,
    description: seoProp?.description ?? defaultSeo.description,
    charset: "UTF-8",
    canonical: canonicalURL,
    openGraph: {
      basic: {
        url: canonicalURL,
        title: seoProp?.title ?? defaultSeo.title,
        type: "website",
        image: shareImage
      },
      optional: {
        description: seoProp?.description ?? defaultSeo.description,
        siteName: seoProp?.title ?? defaultSeo.title
      }
    },
    twitter: {
      site: canonicalURL
    },
    extend: {
      meta: [
        {
          name: "publisher",
          content: seoProp?.author ?? defaultSeo.author
        },
        {
          name: "author",
          content: seoProp?.author ?? defaultSeo.author
        },
        {
          name: "msapplication-TileColor",
          content: style.theme.colors.tileColor
        }
      ]
    }
  };
  const seo = {
    ...baseSeo,
    ...seoProp
  };
  return renderTemplate(_a || (_a = __template(['<head><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">', "", "", "", "", '<!-- PRECONNECT FONTS --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- FONTS --><link href="https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100..900;1,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"><!-- LIBS --><script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/focus@3.13.5/dist/cdn.min.js"><\/script><script defer src="https://cdn.jsdelivr.net/npm/@ryangjchandler/alpine-clipboard@2.3.0/dist/alpine-clipboard.js"><\/script>', "", "</head>"])), renderComponent($$result, "SEO", $$SEO, { ...seo }), pwaAssetsHead.themeColor && renderTemplate`<meta name="theme-color"${addAttribute(pwaAssetsHead.themeColor.content, "content")}>`, pwaAssetsHead.links.map((link) => renderTemplate`<link${spreadAttributes(link)}>`), pwaInfo && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(pwaInfo.webManifest.linkTag)}` })}`, renderScript($$result, "/Users/alialperenatici/Desktop/uppsydigital/src/components/Head.astro?astro&type=script&index=0&lang.ts"), renderSlot($$result, $$slots["default"]), renderHead());
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/Head.astro", void 0);

const $$Astro$3 = createAstro("https://uppsydigital.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentLocale = Astro2.currentLocale;
  const { footer, contacts } = getLocalizedSettings(currentLocale);
  function getTranslatedUrl(locale) {
    const unlocalizedPath = unlocalizedUrl(Astro2.url.pathname);
    return translatePath(locale, unlocalizedPath);
  }
  function isActiveLocale(locale) {
    return locale === currentLocale;
  }
  const pages = await getCollection("pages");
  const services = await getCollection("services");
  const posts = await getCollection("posts");
  const topInfoPages = pages.map((page) => {
    const [lang, ...slug] = page.slug.split("/");
    return {
      ...page,
      lang,
      slug: page.slug.startsWith("/") ? page.slug : `/${page.slug}`
    };
  }).filter(
    (page) => page.lang === currentLocale && page.data.type === "informational"
  ).slice(0, 6);
  const topServices = services.map((page) => {
    const [lang, ...slug] = page.slug.split("/");
    return {
      ...page,
      lang,
      slug: translatePath(
        lang,
        `/service${unlocalizedUrl(`/${page.slug}`)}`
      )
    };
  }).filter((page) => page.lang === currentLocale).slice(0, 6);
  const lastPosts = posts.map((page) => {
    const [lang, ...slug] = page.slug.split("/");
    return {
      ...page,
      lang,
      slug: translatePath(
        lang,
        `/post${unlocalizedUrl(`/${page.slug}`)}`
      )
    };
  }).filter((page) => page.lang === currentLocale).sort(
    (a, b) => new Date(b.data.lastUpdateDate).getTime() - new Date(a.data.lastUpdateDate).getTime()
  ).slice(0, 5);
  return renderTemplate`${maybeRenderHead()}<div class="flex-col text-sm font-medium justify-end pb-10 px-4 lg:px-20 pt-16 flex bg-black"> ${renderComponent($$result, "Container", $$Container, {}, { "default": async ($$result2) => renderTemplate` <div class="items-center flex-col w-full"> <div class="items-center flex-col justify-center flex text-white"> <h3 class="text-4xl lg:text-6xl leading-normal text-center max-w-4xl">${unescapeHTML(footer.title)}</h3> <div class="mt-8"> ${footer?.buttons?.map(({ text, url }) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "href": url, "style": "buttonLight", "icon": "iconamoon:arrow-top-right-1-thin" }, { "default": async ($$result3) => renderTemplate`${text}` })}`)} </div> </div> <div class="auto-cols-fr grid-cols-1 lg:grid-cols-[1.8fr_.4fr_1fr] grid-rows-[auto] grid mt-16 gap-10"> <div class="col-span-1 row-span-1"> <div class="items-center gap-x-[0.63rem] flex mb-5 text-white font-semibold uppercase"> <div class="items-center py-3 px-5 flex border-2 border-white border-solid rounded-3xl"> <div>Links</div> </div> </div> <div class="mt-10"> <div class="auto-cols-fr grid-cols-[1fr_1fr_1fr] grid-rows-[auto] grid gap-[1.88rem]"> <div class="col-span-1 row-span-1"> <div class="items-start flex-col flex gap-[0.63rem]"> <p class="text-white border-b-2 text-lg pb-1 mb-3 border-white border-solid">
Collegamenti utili
</p> <ul class="text-white/[0.65] mb-3 list-none"> ${topInfoPages.map(
    ({ data: { title }, slug }) => renderTemplate`<li> <a${addAttribute(slug, "href")}> ${title} </a> </li>`
  )} </ul> </div> </div> <div class="items-start flex-col flex gap-[0.63rem]"> <p class="text-white border-b-2 text-lg pb-1 mb-3 border-white border-solid">
Services
</p> <ul class="text-white/[0.65] mb-3 list-none"> ${topServices.map(
    ({ data: { title }, slug }) => renderTemplate`<li> <a${addAttribute(slug, "href")}>${title}</a> </li>`
  )} </ul> </div> <div class="items-start flex-col flex gap-[0.63rem]"> <p class="text-white border-b-2 text-lg pb-1 mb-3 border-white border-solid">
Latest posts
</p> <ul class="text-white/[0.65] mb-3 list-none"> ${lastPosts.map(
    ({ data: { title }, slug }) => renderTemplate`<li> <a${addAttribute(slug, "href")}>${title}</a> </li>`
  )} </ul> </div> </div> </div> </div> <div class="col-span-1 row-span-1"></div> <div class="col-span-1 row-span-1 text-white"> <div class="items-center gap-x-[0.63rem] flex mb-5 font-semibold uppercase"> <div class="items-center py-3 px-5 flex border-2 border-white border-solid rounded-3xl"> <div>stay in touch</div> </div> </div> <div class="mt-10 text-lg"> <div class="items-start flex-col flex"> <a class="border-b-2 pb-1 mb-3 border-white border-solid"${addAttribute(`tel:${contacts.phone}`, "href")}> ${contacts.phone} </a> <a class="border-b-2 pb-1 mb-3 border-white border-solid"${addAttribute(`mailto:${contacts.mail}`, "href")}> ${contacts.mail} </a> </div> </div> </div> </div> <div class="mt-16"> <div class="items-center justify-between flex gap-4"> <p class="text-white/[0.78] text-base"> ${footer.copyright} </p> <div class="flex gap-4"> ${locales.map((locale) => renderTemplate`<a${addAttribute(getTranslatedUrl(locale), "href")}${addAttribute([
    "items-center justify-start flex overflow-hidden gap-4 relative cursor-pointer",
    isActiveLocale(locale) ? "bg-white text-black px-2 py-1 rounded-md" : "text-white"
  ], "class:list")}> <span class="overflow-hidden text-md xs:text-lg md:text-xl"> <span>${locale}</span> </span> </a>`)} </div> <div class="flex gap-5 text-lg text-blue-700"> <a href="/privacy" class="inline-block max-w-full"><p class="text-white border-b-2 cursor-pointer pb-1 border-white border-solid">
Privacy policy
</p></a><a href="/terms" class="inline-block max-w-full"><p class="text-white border-b-2 cursor-pointer pb-1 border-white border-solid">
Terms
</p></a> </div> </div> </div> </div> ` })} </div> ${renderSlot($$result, $$slots["default"])}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/footers/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://uppsydigital.com");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  const currentLocale = Astro2.currentLocale;
  function getTranslatedUrl(locale) {
    const unlocalizedPath = unlocalizedUrl(Astro2.url.pathname);
    return translatePath(locale, unlocalizedPath);
  }
  function isActiveLocale(locale) {
    return locale === currentLocale;
  }
  const { header, contacts } = getLocalizedSettings(currentLocale);
  header.logo?.imagePath;
  return renderTemplate`${maybeRenderHead()}<header class="fixed w-full z-30" data-astro-cid-h44wcsux> <div class="items-center auto-cols-fr grid-cols-2 lg:grid-cols-2 grid-rows-[auto] justify-between left-0 py-3.5 px-6 lg:px-20 right-0 top-0 grid gap-4" data-astro-cid-h44wcsux> <div class="items-center flex-wrap justify-start relative flex text-blue-700 z-20" data-astro-cid-h44wcsux> <a${addAttribute(translatePath(currentLocale ?? defaultLocale, "/"), "href")} id="header-logo" class="text-blue-700 justify-self-start lg:justify-self-center underline inline-block max-w-full" data-astro-cid-h44wcsux> <svg version="1.1" id="CompanyLogo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 300"${addAttribute(40, "width")}${addAttribute(40, "height")} class="w-8 h-8 lg:w-10 lg:h-10" xml:space="preserve" data-astro-cid-h44wcsux> <style type="text/css">
						.st0 {
							clip-path: url(#PathR_00000030484139693231530050000007202149904154527160_);
							fill: none;
							stroke: #000000;
							stroke-width: 28;
							stroke-miterlimit: 10;
						}

						.st1 {
							clip-path: url(#PathL_00000111906239159643029990000008763162307303549323_);
							fill: none;
							stroke: #000000;
							stroke-width: 28;
							stroke-miterlimit: 10;
						}
					</style> <g data-astro-cid-h44wcsux> <defs data-astro-cid-h44wcsux> <path id="PathR" d="M286.4,71.8V233c0,3-0.2,6-0.8,8.9c-2.9,16.3-30.6,53.1-61.2,53.4c0,0-40,1.6-60.4-26.3
			c-0.3-0.5-0.3-1.1,0.1-1.5l12.7-12.7c0.5-0.5,1.2-0.4,1.6,0c2.7,2.9,16.5,21.7,40.9,20.2c33.6-2,45.2-34.9,45.2-43.8
			c0,0,0.8-172.4,0.1-175.2c-10-42-63.4-38.8-84.5-14.7l-59.6,60.1c-3,3-4.6,7.1-4.6,11.3c-0.1,1-0.2,2.1-0.2,3.1l-2.6,57.8
			c0,2.6,0.7,5,2.1,7.2c2.1,3.3,20.2,29.4,19.7,29.9c-3.8,3.8-8.5,8.5-12.2,12.2c-0.4,0.4-1.1,0.5-1.5,0.1
			c-3.6-3-15.9-18.9-25.6-38.4c-2.2-4.4-1.5-4.7-1.5-10.1l0.8-59c-0.8-19.3,3.4-22.9,15.9-35.6l51.1-51
			C178,16.3,183.5,1.1,234.8,5.8c22.2,2.1,38.7,17.3,47.5,32.4c2.7,4.7,4.1,10.1,4.1,15.5C286.4,60,286.4,67.3,286.4,71.8z" data-astro-cid-h44wcsux></path> </defs> <clipPath id="PathR_00000047739257205995265260000000317677073555739302_" data-astro-cid-h44wcsux> <use xlink:href="#PathR" style="overflow:visible;" data-astro-cid-h44wcsux></use> </clipPath> <path id="MaskR" style="clip-path:url(#PathR_00000047739257205995265260000000317677073555739302_);fill:none;stroke:#000000;stroke-width:28;stroke-miterlimit:10;" class="logo-path-mask" d="
		M132,218.3l-27-38.3v-77.1c0,0,50.7-57.2,60.4-67.4c9.7-10.2,42.1-22.5,52.3-23.4s31.3,5.1,38.3,12.1s17.9,1.1,20.6,42.7
		s0,163.9,0,163.9s-3.9,24.8-15.2,34.5c-11.3,9.7-22.7,20.3-33.4,19.8s-25.9-3.7-31.3-5.3c-5.4-1.6-28.6-22.1-28.6-22.1" data-astro-cid-h44wcsux></path> </g> <g data-astro-cid-h44wcsux> <defs data-astro-cid-h44wcsux> <path id="PathL" d="M13.6,228.2V67c0-3,0.2-6,0.8-8.9C17.2,41.7,45,5,75.6,4.7c0,0,40-1.6,60.4,26.3c0.3,0.5,0.3,1.1-0.1,1.5
			l-12.7,12.7c-0.5,0.5-1.2,0.4-1.6,0c-2.9-2.8-16.6-21.7-41-20.2C47,27,35.4,59.8,35.4,68.7c0,0-0.8,172.4-0.1,175.2
			c10,42,63.4,38.8,84.5,14.7l59.6-60.1c3-3,4.6-7.1,4.6-11.3c0.1-1,0.2-2.1,0.2-3.1l2.6-57.8c0-2.6-0.7-5-2.1-7.2
			c-2.1-3.3-20.2-29.4-19.7-29.9c3.8-3.8,8.5-8.5,12.2-12.2c0.4-0.4,1.1-0.5,1.5-0.1c3.6,3,15.9,18.9,25.6,38.4
			c2.2,4.4,1.5,4.7,1.5,10.1l-0.8,59c0.8,19.3-3.4,22.9-15.9,35.6L138,271c-15.9,12.6-21.5,27.9-72.8,23.1
			C43,292,26.5,276.8,17.7,261.7c-2.7-4.7-4.1-10.1-4.1-15.5C13.6,240,13.6,232.7,13.6,228.2z" data-astro-cid-h44wcsux></path> </defs> <clipPath id="PathL_00000141443442153955986570000000888460909890178439_" data-astro-cid-h44wcsux> <use xlink:href="#PathL" style="overflow:visible;" data-astro-cid-h44wcsux></use> </clipPath> <path id="MaskL" style="clip-path:url(#PathL_00000141443442153955986570000000888460909890178439_);fill:none;stroke:#000000;stroke-width:28;stroke-miterlimit:10;" class="logo-path-mask" d="
		M132,42c0,0-16.7-31.9-52.3-29.8S24.2,58.7,24.2,58.7v192c0,0,12.4,25.9,28.6,31.3c16.2,5.4,45.8,2.7,53.9,0s65.3-58.8,65.3-58.8
		l21.6-22.7l3.2-78.7L171,78.7" data-astro-cid-h44wcsux></path> </g> </svg> </a> </div> <div class="col-start-2 hidden lg:flex justify-center items-center h-full" data-astro-cid-h44wcsux> <a data-company-name class="pb-4 group"${addAttribute(translatePath(currentLocale ?? defaultLocale, "/"), "href")} data-astro-cid-h44wcsux> <div class="w-20 h-1 bg-slate-200 rounded-full group-hover:bg-slate-600 transition-colors duration-500" data-astro-cid-h44wcsux></div> </a> </div> <div class="justify-self-end col-span-1 row-span-1 z-40 col-start-3" data-astro-cid-h44wcsux> <div class="items-center justify-center relative flex h-16 lg:w-24 lg:h-24" data-astro-cid-h44wcsux> <div class="menu-icon" data-astro-cid-h44wcsux> <input id="menu-toggle" class="menu-icon__checkbox" type="checkbox" data-astro-cid-h44wcsux> <div data-astro-cid-h44wcsux> <span data-astro-cid-h44wcsux></span> <span data-astro-cid-h44wcsux></span> </div> </div> </div> </div> </div> <nav id="navigation" class="items-center bottom-0 text-sm font-medium justify-center left-0 fixed right-0 top-0 flex h-screen z-30" data-astro-cid-h44wcsux> <div id="navigation-background" class="bg-white w-full h-full absolute top-0 left-0 opacity-0" data-astro-cid-h44wcsux></div> <div class="items-center font-semibold flex-wrap justify-center flex flex-col overflow-hidden z-20 w-full" data-astro-cid-h44wcsux> <div class="flex flex-col items-start md:items-center pt-10" data-astro-cid-h44wcsux> ${header.pages.map((page, index) => renderTemplate`<a data-nav-item${addAttribute(translatePath(
    currentLocale ?? defaultLocale,
    page.link
  ), "href")} class="items-center justify-start flex overflow-hidden gap-4 relative pr-10" data-astro-cid-h44wcsux> <div data-nav-border-reveal data-nav-text-reveal class="text-black items-center cursor-pointer justify-center pt-1 flex w-9 h-9 border-2 border-black border-solid rounded-full" data-astro-cid-h44wcsux>
0${index + 1} </div> <div data-nav-text-reveal class="cursor-pointer overflow-hidden text-4xl xs:text-5xl md:text-[5.63rem] !leading-[1.15] text-black" data-astro-cid-h44wcsux> ${page.title} </div> </a>`)} <div class="flex gap-8 pt-10 pl-16 md:pl-0" data-astro-cid-h44wcsux> ${locales.map((locale) => renderTemplate`<a${addAttribute(getTranslatedUrl(locale), "href")}${addAttribute([
    "items-center justify-start flex overflow-hidden gap-4 relative cursor-pointer",
    isActiveLocale(locale) && "active-locale"
  ], "class:list")} data-astro-cid-h44wcsux> <span data-nav-text-reveal class="overflow-hidden text-md xs:text-lg md:text-xl !leading-[1.15] text-black" data-astro-cid-h44wcsux> <span data-astro-cid-h44wcsux>${locale}</span> </span> </a>`)} </div> </div> </div> </nav> </header> ${renderScript($$result, "/Users/alialperenatici/Desktop/uppsydigital/src/components/headers/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/headers/Navigation.astro", void 0);

const $$LinesWrapper = createComponent(($$result, $$props, $$slots) => {
  const columnsClasses = [
    "line-full _20",
    "line-full _20",
    "line-full _5",
    "line-full",
    "line-full _5",
    "line-full",
    "line-full _20",
    "line-full",
    "line-full",
    "line-full _5",
    "line-full",
    "line-full",
    "line-full _5",
    "line-full _20",
    "line-full",
    "line-full _5",
    "line-full",
    "line-full",
    "line-full _20",
    "line-full _5",
    "line-full",
    "line-full",
    "line-full"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bottom-0 left-0 opacity-60 fixed right-0 top-0 pointer-events-none -z-10" data-astro-cid-3qatqyip> <div class="absolute-lines" data-astro-cid-3qatqyip> ${columnsClasses.map((className) => renderTemplate`<div${addAttribute(className, "class")} data-astro-cid-3qatqyip></div>`)} </div> </div> `;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/LinesWrapper.astro", void 0);

const $$LoadingIndicator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="astro-loading-indicator" class="astro-loading-indicator bg-primary-950 fixed pointer-events-none z-50 top-0 left-0 w-full h-1" data-astro-cid-6efmjswq${addAttribute(createTransitionScope($$result, "2n62j4uy"), "data-astro-transition-persist")}></div>  ${renderScript($$result, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/LoadingIndicator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/LoadingIndicator.astro", "self");

const $$Astro$1 = createAstro("https://uppsydigital.com");
const $$Widget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Widget;
  const currentLocale = Astro2.currentLocale;
  const { widget } = getLocalizedSettings(currentLocale);
  return renderTemplate`${maybeRenderHead()}<a id="whatsapp-widget" data-widget-appear${addAttribute(widget.link, "href")} class="group fixed w-14 h-14 bottom-5 lg:bottom-10 opacity-0 right-5 lg:right-10 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg z-20" target="_blank"${addAttribute(createTransitionScope($$result, "53mktq27"), "data-astro-transition-persist")}> ${renderComponent($$result, "Icon", $$Icon, { "name": widget.icon, "size": 30, "class": "group-hover:scale-105 transition-all" })} </a> ${renderScript($$result, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/Widget.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/Widget.astro", "self");

const $$Astro = createAstro("https://uppsydigital.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const currentLocale = Astro2.currentLocale;
  const { widget } = getLocalizedSettings(currentLocale);
  const { seo } = Astro2.props;
  return renderTemplate`<html${addAttribute(currentLocale, "lang")}> ${renderComponent($$result, "Head", $$Head, { "seo": seo }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "ViewTransitions", $$ClientRouter, {})}` })}${maybeRenderHead()}<body> ${renderComponent($$result, "LoadingIndicator", $$LoadingIndicator, {})} ${renderComponent($$result, "LinesWrapper", $$LinesWrapper, {})} ${renderComponent($$result, "Navigation", $$Navigation, { "showTopBar": true })} ${renderSlot($$result, $$slots["default"])} ${widget.enabled && renderTemplate`${renderComponent($$result, "Widget", $$Widget, {})}`} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
