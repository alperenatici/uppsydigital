import { g as getCollection } from './_astro_content_CC7KtNwO.mjs';
import { d as defaultLocale } from './site.config_DEdmCH04.mjs';

async function getCollectionStaticPaths(collectionName, locale) {
  const collection = await getCollection(collectionName);
  const visibleItems = collection.filter((item) => {
    return !item.data.hidden;
  });
  const paths = visibleItems.map((item) => {
    const [lang, ...slug] = item.slug.split("/");
    let localizedSlug = slug;
    if (collectionName === "pages") {
      localizedSlug = slug[0] === "homepage" || slug[0] === "index" ? [] : slug;
    }
    if (lang !== defaultLocale && !locale) {
      localizedSlug = [lang, ...localizedSlug];
    }
    return {
      params: {
        lang,
        slug: localizedSlug.join("/") || void 0
      },
      props: {
        data: item
      }
    };
  });
  let pathsRes = paths;
  if (locale) {
    pathsRes = paths.filter((path) => path.params.lang === locale);
  }
  return pathsRes;
}

export { getCollectionStaticPaths as g };
