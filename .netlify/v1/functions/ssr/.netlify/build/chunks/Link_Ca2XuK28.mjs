import { A as AstroError, M as MissingLocale, b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, e as renderSlot } from './astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import { a as appendForwardSlash, j as joinPaths } from './consts_DEg1doB0.mjs';
import 'clsx';
import { $ as $$Icon } from './Icon_g4TGa3ZF.mjs';
import { d as defaultLocale$1 } from './site.config_DEdmCH04.mjs';
/* empty css                                                            */

function shouldAppendForwardSlash(trailingSlash, buildFormat) {
  switch (trailingSlash) {
    case "always":
      return true;
    case "never":
      return false;
    case "ignore": {
      switch (buildFormat) {
        case "directory":
          return true;
        case "preserve":
        case "file":
          return false;
      }
    }
  }
}

function getLocaleRelativeUrl({
  locale,
  base,
  locales: _locales,
  trailingSlash,
  format,
  path,
  prependWith,
  normalizeLocale = true,
  strategy = "pathname-prefix-other-locales",
  defaultLocale
}) {
  const codeToUse = peekCodePathToUse(_locales, locale);
  if (!codeToUse) {
    throw new AstroError({
      ...MissingLocale,
      message: MissingLocale.message(locale)
    });
  }
  const pathsToJoin = [base, prependWith];
  const normalizedLocale = normalizeLocale ? normalizeTheLocale(codeToUse) : codeToUse;
  if (strategy === "pathname-prefix-always" || strategy === "pathname-prefix-always-no-redirect" || strategy === "domains-prefix-always" || strategy === "domains-prefix-always-no-redirect") {
    pathsToJoin.push(normalizedLocale);
  } else if (locale !== defaultLocale) {
    pathsToJoin.push(normalizedLocale);
  }
  pathsToJoin.push(path);
  let relativePath;
  if (shouldAppendForwardSlash(trailingSlash, format)) {
    relativePath = appendForwardSlash(joinPaths(...pathsToJoin));
  } else {
    relativePath = joinPaths(...pathsToJoin);
  }
  if (relativePath === "") {
    return "/";
  }
  return relativePath;
}
function normalizeTheLocale(locale) {
  return locale.replaceAll("_", "-").toLowerCase();
}
function peekCodePathToUse(locales, locale) {
  for (const loopLocale of locales) {
    if (typeof loopLocale === "string") {
      if (loopLocale === locale) {
        return loopLocale;
      }
    } else {
      for (const code of loopLocale.codes) {
        if (code === locale) {
          return loopLocale.path;
        }
      }
    }
  }
  return void 0;
}

function toRoutingStrategy(routing, domains) {
  let strategy;
  const hasDomains = domains ? Object.keys(domains).length > 0 : false;
  if (routing === "manual") {
    strategy = "manual";
  } else {
    if (!hasDomains) {
      {
        strategy = "pathname-prefix-other-locales";
      }
    } else {
      {
        strategy = "domains-prefix-other-locales";
      }
    }
  }
  return strategy;
}

var define_ASTRO_INTERNAL_I18N_CONFIG_default = { format: "directory", trailingSlash: "ignore", i18n: { defaultLocale: "en", locales: ["en", "it"], routing: { } }};
const { trailingSlash, format, i18n} = (
  // @ts-expect-error
  define_ASTRO_INTERNAL_I18N_CONFIG_default
);
const { defaultLocale, locales, domains, routing } = i18n;
const base = "/";
let strategy = toRoutingStrategy(routing, domains);
const getRelativeLocaleUrl = (locale, path, options) => getLocaleRelativeUrl({
  locale,
  path,
  base,
  trailingSlash,
  format,
  defaultLocale,
  locales,
  strategy,
  ...options
});

const $$Astro = createAstro("https://uppsydigital.com");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const currentLocale = Astro2.currentLocale;
  const {
    href,
    block,
    icon,
    size = "md",
    style = "primary",
    localized = true,
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    xs: "",
    sm: "px-4 py-2",
    md: "px-5 py-2.5 text-xl text-lg",
    lg: "px-8 py-3 text-2xl"
  };
  const iconSizes = {
    xs: 20,
    sm: 25,
    md: 30,
    lg: 40
  };
  const Tag = Astro2.props.tag || "a";
  if (Tag === "a" && !href) {
    throw new Error("The `href` prop is required when using the `a` tag.");
  }
  const styles = {
    primary: "",
    button: "button-primary bg-black text-white items-center justify-center py-2.5 px-6 text-center inline-block max-w-full rounded-md font-semibold",
    buttonLight: "button-primary bg-white text-black items-center justify-center py-3.5 px-6 text-center inline-block max-w-full rounded-md font-bold",
    outline: "hover:bg-primary-800 hover:text-white border border-primary-100 rounded-md"
  };
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "href": localized && href?.startsWith("/") ? getRelativeLocaleUrl(currentLocale ?? defaultLocale$1, href) : href, "class:list": [
    block ? "flex" : "inline-flex",
    style != "primary" ? sizes[size] : null,
    style != "primary" ? "justify-center" : null,
    styles[style],
    className
  ], ...rest, "data-astro-cid-d4sasgt5": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ${icon && renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "size": iconSizes[size], "data-astro-cid-d4sasgt5": true })}`}` })} `;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/Link.astro", void 0);

export { $$Link as $ };
