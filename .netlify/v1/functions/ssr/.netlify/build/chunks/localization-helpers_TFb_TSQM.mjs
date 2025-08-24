import { d as defaultLocale, l as locales } from './site.config_DEdmCH04.mjs';

const phone = "+1 1234567890";
const mail = "info@yourcompany.com";
const socials = [{"title":"Facebook","link":"https://facebook.com","icon":"ic:baseline-facebook"},{"title":"Instagram","link":"https://www.instagram.com/","icon":"mdi:instagram"},{"title":"Youtube","link":"https://www.youtube.com/","icon":"mdi:youtube"}];
const contacts = {
  phone,
  mail,
  socials,
};

const title$3 = "Do You Have Any Questions?<br/> Don't Hesitate to Contact Us!";
const copyright$1 = "© 2024 Your Company";
const buttons$1 = [{"text":"Contact Us","url":"/contact"}];
const footerEn = {
  title: title$3,
  copyright: copyright$1,
  buttons: buttons$1,
};

const logo$1 = {"imagePath":"/src/assets/global/navigation/logo.svg"};
const pages$1 = [{"title":"Home","link":"/"},{"title":"About","link":"/about"},{"title":"Works","link":"/works"},{"title":"News","link":"/news"},{"title":"Contacts","link":"/contact"}];
const actions$1 = [];
const headerEn = {
  logo: logo$1,
  pages: pages$1,
  actions: actions$1,
};

const title$2 = "Web Agency Leading in Performant Web Design Solutions - [Your Company]";
const description$1 = "[Your Company] excels in creating fast, user-friendly websites with a focus on aesthetic design and SEO optimization, ensuring a standout online presence";
const author$1 = "[Your Company]";
const seoEn = {
  title: title$2,
  description: description$1,
  author: author$1,
};

const title$1 = "Hai Qualche Domanda?<br/> Non esitare a contattarci!";
const copyright = "© 2024 La tua azienda";
const buttons = [{"text":"Contattaci","url":"/contact"}];
const footerIt = {
  title: title$1,
  copyright,
  buttons,
};

const logo = {"imagePath":"/src/assets/global/navigation/logo.svg"};
const pages = [{"title":"Home","link":"/"},{"title":"Chi siamo","link":"/about"},{"title":"Portfolio","link":"/works"},{"title":"News","link":"/news"},{"title":"Contatti","link":"/contact"}];
const actions = [];
const headerIt = {
  logo,
  pages,
  actions,
};

const title = "Agenzia Web Leader nelle Soluzioni di Web Design Performanti - Your Company Studio";
const description = "Your Company Studio eccelle nella creazione di siti web veloci e facili da usare con un focus sul design estetico e l'ottimizzazione SEO, garantendo una presenza online di spicco";
const author = "Your Company";
const seoIt = {
  title,
  description,
  author,
};

const theme = {"colors":{"primary":"#439db4","secondary":"#407492","tileColor":"#ffffff"}};
const style = {
  theme,
};

const enabled = false;
const icon = "whatsapp";
const link = "https://api.whatsapp.com/send?phone= +390438980026";
const widget = {
  enabled,
  icon,
  link,
};

const settings = {
  it: {
    header: headerIt,
    footer: footerIt,
    contacts,
    seo: seoIt,
    style,
    widget
  },
  en: {
    header: headerEn,
    footer: footerEn,
    contacts,
    seo: seoEn,
    style,
    widget
  }
};
function getLocalizedSettings(locale) {
  return settings[locale ?? defaultLocale] ?? settings[defaultLocale];
}
function isLocalizedUrl(url) {
  const urlParts = url.split("/");
  const firstPart = urlParts[1];
  return locales.includes(firstPart);
}
function unlocalizedUrl(url) {
  if (isLocalizedUrl(url)) {
    const urlParts = url.split("/").filter((part) => part !== "");
    urlParts.shift();
    const unlocalizedPath = `/${urlParts.join("/")}`;
    return unlocalizedPath === "//" ? "/" : unlocalizedPath;
  }
  return url;
}
function translatePath(l, path) {
  return l === defaultLocale ? path : `/${l}${path}`;
}

export { getLocalizedSettings as g, translatePath as t, unlocalizedUrl as u };
