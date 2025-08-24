import { b as createAstro, c as createComponent, m as maybeRenderHead, f as addAttribute, e as renderSlot, a as renderTemplate, r as renderComponent, g as renderScript } from './astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Button } from './Button_DZfW84by.mjs';
import { $ as $$Link } from './Link_Ca2XuK28.mjs';
import { g as getLocalizedSettings } from './localization-helpers_TFb_TSQM.mjs';
import { $ as $$Icon } from './Icon_g4TGa3ZF.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://uppsydigital.com");
const $$Prose = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Prose;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    "prose mx-auto w-full max-w-3xl pt-12 text-lg text-slate-900 prose-headings:font-normal prose-headings:tracking-tighter prose-headings:text-black prose-a:text-slate-500 hover:prose-a:text-black prose-blockquote:border-l-slate-950 prose-blockquote:text-slate-500 prose-code:text-black prose-pre:rounded-3xl prose-li:marker:text-slate-500",
    className
  ], "class:list")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/Prose.astro", void 0);

const $$Astro = createAstro("https://uppsydigital.com");
const $$Share = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Share;
  const currentLocale = Astro2.currentLocale;
  const { contacts } = getLocalizedSettings(currentLocale);
  const currentPage = Astro2.url;
  const availableShare = [
    {
      name: "Facebook",
      icon: "ic:baseline-facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${currentPage}`
    },
    {
      name: "Twitter",
      icon: "mdi:twitter",
      url: `https://twitter.com/intent/tweet?url=${currentPage}`
    },
    {
      name: "LinkedIn",
      icon: "mdi:linkedin",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${currentPage}`
    },
    {
      name: "Email",
      icon: "ic:baseline-email",
      url: `mailto:?subject=Check%20out%20this%20article&body=${currentPage}`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`{
			modalOpen: false,
			openSocialModal() {
				if (navigator.share) {
					navigator
						.share({
							title: "Condividi",
							url: window.location.href,
						})
						.then(() => {
							console.log("Grazie per la condivisione!");
						})
						.catch(console.error);
				} else {
					this.modalOpen = true;
				}
			}
		}`, "x-data")} @keydown.escape.window="modalOpen = false" class="relative z-10 flex h-auto w-auto flex-wrap items-center gap-4" data-astro-cid-6dpfvuse> ${renderComponent($$result, "Button", $$Button, { "class": "flex gap-3", "size": "md", "style": "outline", "@click": "openSocialModal()", "data-astro-cid-6dpfvuse": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "size": 22, "name": "ic:outline-share", "data-astro-cid-6dpfvuse": true })} <span data-astro-cid-6dpfvuse>Condividi</span> ` })} ${renderComponent($$result, "Link", $$Link, { "class": "flex gap-3", "href": `mailto:${contacts.mail}`, "size": "md", "style": "outline", "data-astro-cid-6dpfvuse": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "size": 23, "name": "ic:outline-mail", "data-astro-cid-6dpfvuse": true })} <span class="hidden sm:inline-block" data-astro-cid-6dpfvuse>Scrivici</span> ` })} ${renderComponent($$result, "Link", $$Link, { "class": "flex gap-3", "href": "#top", "size": "md", "style": "outline", "data-astro-cid-6dpfvuse": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "size": 23, "name": "ic:sharp-vertical-align-top", "data-astro-cid-6dpfvuse": true })} <span class="hidden sm:inline-block" data-astro-cid-6dpfvuse>Torna all'inizio</span> ` })} <template x-teleport="body" data-astro-cid-6dpfvuse> <div x-show="modalOpen" class="fixed left-0 top-0 z-[99] flex h-screen w-screen items-center justify-center" x-cloak data-astro-cid-6dpfvuse> <div x-show="modalOpen" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="ease-in duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" @click="modalOpen=false" class="absolute inset-0 h-full w-full bg-black bg-opacity-40" data-astro-cid-6dpfvuse></div> <div x-show="modalOpen" x-trap.inert.noscroll="modalOpen" x-transition:enter="ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100" x-transition:leave="ease-in duration-200" x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100" x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" class="relative w-full bg-white px-7 py-6 sm:max-w-lg sm:rounded-lg" data-astro-cid-6dpfvuse> <div class="flex items-center justify-between pb-2" data-astro-cid-6dpfvuse> <h3 class="text-lg font-semibold" data-astro-cid-6dpfvuse>Condividi</h3> <button @click="modalOpen=false" class="absolute right-0 top-0 mr-5 mt-5 flex h-8 w-8 items-center justify-center rounded-full text-gray-600 hover:bg-gray-50 hover:text-gray-800" data-astro-cid-6dpfvuse> <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-astro-cid-6dpfvuse> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" data-astro-cid-6dpfvuse></path> </svg> </button> </div> <div class="relative flex w-auto flex-col gap-8" data-astro-cid-6dpfvuse> <div data-astro-cid-6dpfvuse> ${availableShare.map((shareBtn) => renderTemplate`${renderComponent($$result, "Link", $$Link, { "href": shareBtn.url, "target": "_blank", "data-astro-cid-6dpfvuse": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "size": 60, "name": shareBtn.icon, "data-astro-cid-6dpfvuse": true })} ` })}`)} </div> <div class="flex items-center gap-4"${addAttribute(`{
							input: window.location.href,
							copyToClipboard(input) {
								$refs.clipboardInput.select();
								$refs.clipboardIcon.classList.add('copied');
								setTimeout((function() {
									$refs.clipboardIcon.classList.remove('copied');
								}).bind(this), 2000);
								$clipboard(input);
							}
					 	}`, "x-data")} data-astro-cid-6dpfvuse> <input class="grow rounded-xl" x-ref="clipboardInput" x-model="input" data-astro-cid-6dpfvuse> <button type="button" @click="copyToClipboard(input)" data-astro-cid-6dpfvuse> <div class="clipboard-icon" x-ref="clipboardIcon" data-astro-cid-6dpfvuse> <svg width="16" height="32" viewBox="0 0 16 32" fill="none" stroke="black" xmlns="http://www.w3.org/2000/svg" data-astro-cid-6dpfvuse> <path d="M3 12.75V4.25C3 3.42157 3.67157 2.75 4.5 2.75H12C12.8284 2.75 13.5 3.42157 13.5 4.25V12.75C13.5 13.5784 12.8284 14.25 12 14.25H4.5C3.67157 14.25 3 13.5784 3 12.75Z" data-astro-cid-6dpfvuse></path> <path d="M3 12.75V4.25C3 3.42157 3.67157 2.75 4.5 2.75H12C12.8284 2.75 13.5 3.42157 13.5 4.25V12.75C13.5 13.5784 12.8284 14.25 12 14.25H4.5C3.67157 14.25 3 13.5784 3 12.75Z" class="page" data-astro-cid-6dpfvuse></path> <path d="M6.25 9.75L7.75 11.25L10.25 7.75" class="check" data-astro-cid-6dpfvuse></path> <path d="M7 1.75001C6.72386 1.75001 6.5 1.97387 6.5 2.25001V3.5C6.5 4.4665 7.2835 5.25 8.25 5.25C9.2165 5.25 10 4.4665 10 3.5V2.25C10 1.97386 9.77614 1.75 9.5 1.75L7 1.75001Z" data-astro-cid-6dpfvuse></path> </svg> </div> </button> </div> </div> </div> </div> </template> </div>  ${renderScript($$result, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/Share.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/Share.astro", void 0);

export { $$Prose as $, $$Share as a };
