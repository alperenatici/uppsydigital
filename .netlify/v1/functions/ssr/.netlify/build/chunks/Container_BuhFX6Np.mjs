import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, e as renderSlot } from './astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
/* empty css                                                                 */

const $$Astro = createAstro("https://uppsydigital.com");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Container;
  const { class: className, id, tag = "section", ...rest } = Astro2.props;
  const Element = tag;
  return renderTemplate`${renderComponent($$result, "Element", Element, { "id": id, "class:list": ["container-base max-w-[90rem] mx-auto", className], ...rest, "data-astro-cid-4pugfasg": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} `;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/Container.astro", void 0);

export { $$Container as $ };
