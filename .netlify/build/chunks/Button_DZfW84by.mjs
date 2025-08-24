import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, e as renderSlot } from './astro/server_BzyAVLNF.mjs';
import 'kleur/colors';
import { $ as $$Link } from './Link_Ca2XuK28.mjs';

const $$Astro = createAstro("https://uppsydigital.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { ...props } = Astro2.props;
  const computedProps = {
    ...props,
    tag: "button",
    style: "button"
  };
  return renderTemplate`${renderComponent($$result, "Link", $$Link, { ...computedProps }, { "default": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/alialperenatici/Desktop/uppsydigital/src/components/primitives/Button.astro", void 0);

export { $$Button as $ };
