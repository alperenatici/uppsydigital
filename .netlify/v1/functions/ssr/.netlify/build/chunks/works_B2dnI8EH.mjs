import { c as createGetHeadings, a as createContentComponent, m as markdocConfig, b as assetsConfig, $ as $$Renderer } from './runtime-assets-config_BG_5ubuv.mjs';
import { $ as $$Container } from './Container_BuhFX6Np.mjs';
import { $ as $$Works } from './Works_CiLUMQ59.mjs';
import { $ as $$Title } from './Title_hz0FThKY.mjs';

markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };


const tagComponentMap = {"Container": $$Container,
"Works": $$Works,
};
const nodeComponentMap = {"heading": $$Title,
};

const options = undefined;

const stringifiedAst = "{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[12,13,16,17],\"inline\":false,\"attributes\":{},\"children\":[{\"$$mdtype\":\"Node\",\"errors\":[],\"lines\":[14,15],\"inline\":false,\"attributes\":{},\"children\":[],\"type\":\"tag\",\"tag\":\"Works\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":14},\"end\":{\"line\":15}}}],\"type\":\"tag\",\"tag\":\"Container\",\"annotations\":[],\"slots\":{},\"location\":{\"start\":{\"line\":12},\"end\":{\"line\":13}}}],\"type\":\"document\",\"annotations\":[],\"slots\":{}}";

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
