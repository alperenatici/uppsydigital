import { c as createGetHeadings, a as createContentComponent, m as markdocConfig, b as assetsConfig, $ as $$Renderer } from './runtime-assets-config_BG_5ubuv.mjs';
import { $ as $$Container } from './Container_BuhFX6Np.mjs';
import { $ as $$Contact } from './Contact_1m7H5wZp.mjs';
import { $ as $$Title } from './Title_hz0FThKY.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Container": $$Container,
"Contact": $$Contact,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,13,26,27],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[14,25],\"inline\":false,\"attributes\":{\"title\":\"Contattaci\",\"fields\":[{\"title\":\"Nome Completo\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"Email\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Telefono\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Orario per ricevere la chiamata\",\"placeholder\":\"10:00 AM to 4:00 PM\",\"type\":\"text\"},{\"title\":\"Messaggio\",\"placeholder\":\"Scrivi qui il tuo messaggio\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Invia\",\"type\":\"submit\",\"width\":2}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Contact\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Contattaci\"},{\"type\":\"attribute\",\"name\":\"fields\",\"value\":[{\"title\":\"Nome Completo\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"Email\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Telefono\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Orario per ricevere la chiamata\",\"placeholder\":\"10:00 AM to 4:00 PM\",\"type\":\"text\"},{\"title\":\"Messaggio\",\"placeholder\":\"Scrivi qui il tuo messaggio\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Invia\",\"type\":\"submit\",\"width\":2}]}],\"slots\":{},\"location\":{\"start\":{\"line\":14},\"end\":{\"line\":25}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":13}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

const getHeadings = createGetHeadings(stringifiedAst, markdocConfig);
const Content = createContentComponent(
	$$Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
);

export { Content, getHeadings };
