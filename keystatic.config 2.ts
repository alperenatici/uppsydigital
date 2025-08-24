import { config, fields, singleton } from "@keystatic/core";
import { BrandMarkComponent } from "./.keystatic/mark";

export default config({
	storage: {
		kind: "local",
	},
	ui: {
		brand: {
			name: "Uppsy Digital",
			mark: BrandMarkComponent,
		},
	},
	singletons: {
		header: singleton({
			label: "Navigation",
			path: "src/content/global/tr/header",
			format: { data: "json" },
			schema: {
				logo: fields.object({
					text: fields.text({ label: "Logo Text" }),
					href: fields.text({ label: "Logo Link" }),
				}),
				nav: fields.array(
					fields.object({
						text: fields.text({ label: "Menu Text" }),
						href: fields.text({ label: "Menu Link" }),
					}),
					{ label: "Navigation Links" }
				),
				actions: fields.array(
					fields.object({
						text: fields.text({ label: "Button Text" }),
						href: fields.text({ label: "Button Link" }),
						style: fields.select({
							label: "Button Style",
							options: [
								{ label: "Button", value: "button" },
								{ label: "Link", value: "link" },
							],
							defaultValue: "button",
						}),
					}),
					{ label: "Action Buttons" }
				),
			},
		}),
		footer: singleton({
			label: "Footer",
			path: "src/content/global/tr/footer",
			format: { data: "json" },
			schema: {
				copyright: fields.text({ label: "Copyright Text" }),
			},
		}),
	},
});
