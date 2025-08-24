const marketingService = new Proxy({"src":"/_astro/marketing-service.C59SZwBD.png","width":256,"height":256,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/alialperenatici/Desktop/uppsydigital/src/assets/pages/homepage/marketing-service.png";
							}
							
							return target[name];
						}
					});

export { marketingService as default };
