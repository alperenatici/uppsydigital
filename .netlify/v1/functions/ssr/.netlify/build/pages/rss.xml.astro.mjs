import { g as getCollection } from '../chunks/_astro_content_CC7KtNwO.mjs';
import rss from '@astrojs/rss';
export { renderers } from '../renderers.mjs';

async function get() {
	const posts = await getCollection("posts");
	return rss({
		title: "Astro Learner | Blog",
		description: "My journey learning Astro",
		site: "https://my-blog-site.netlify.app",
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/post/${post.slug}/`,
		})),
		customData: "<language>en-us</language>",
	});
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
