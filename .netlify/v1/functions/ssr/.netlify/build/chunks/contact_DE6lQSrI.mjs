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

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[11,12,25,26],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[13,24],\"inline\":false,\"attributes\":{\"title\":\"Get in touch\",\"fields\":[{\"title\":\"Full Name\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"Email\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Phone\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Schedule to receive call\",\"placeholder\":\"10:00 AM to 4:00 PM\",\"type\":\"text\"},{\"title\":\"Message\",\"placeholder\":\"Type your message here\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Contact us\",\"type\":\"submit\",\"width\":2}]},\"children\":[],\"type\":\"tag\",\"tag\":\"Contact\",\"annotations\":[{\"type\":\"attribute\",\"name\":\"title\",\"value\":\"Get in touch\"},{\"type\":\"attribute\",\"name\":\"fields\",\"value\":[{\"title\":\"Full Name\",\"placeholder\":\"John Doe\",\"required\":true,\"type\":\"text\"},{\"title\":\"Email\",\"placeholder\":\"contact@email.com\",\"required\":true,\"type\":\"email\"},{\"title\":\"Phone\",\"placeholder\":\"+1 345-678\",\"type\":\"tel\"},{\"title\":\"Schedule to receive call\",\"placeholder\":\"10:00 AM to 4:00 PM\",\"type\":\"text\"},{\"title\":\"Message\",\"placeholder\":\"Type your message here\",\"type\":\"textarea\",\"width\":2},{\"title\":\"Contact us\",\"type\":\"submit\",\"width\":2}]}],\"slots\":{},\"location\":{\"start\":{\"line\":13},\"end\":{\"line\":24}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":11},\"end\":{\"line\":12}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
