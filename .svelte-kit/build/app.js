import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"description\" content=\"\" />\n\t\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t<div id=\"svelte\">" + body + "</div>\n\t</body>\n</html>\n";

let options = null;

const default_settings = { paths: {"base":"","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-10af5381.js",
			css: [assets + "/_app/assets/start-1f089c51.css"],
			js: [assets + "/_app/start-10af5381.js",assets + "/_app/chunks/vendor-dad3c69f.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":200521,"type":"image/png"},{"file":"favicon1.png","size":1571,"type":"image/png"},{"file":"images/europe/1939c.jpg","size":10018,"type":"image/jpeg"},{"file":"images/europe/american-flag.jpg","size":7845,"type":"image/jpeg"},{"file":"images/europe/ancestry.jpg","size":5902,"type":"image/jpeg"},{"file":"images/europe/archives.jpg","size":29905,"type":"image/jpeg"},{"file":"images/europe/australia-flag.jpg","size":6575,"type":"image/jpeg"},{"file":"images/europe/austria-flag.jpg","size":5889,"type":"image/jpeg"},{"file":"images/europe/belarus-flag.jpg","size":7604,"type":"image/jpeg"},{"file":"images/europe/belarus-map.jpg","size":26169,"type":"image/jpeg"},{"file":"images/europe/belgium-flag.jpg","size":3352,"type":"image/jpeg"},{"file":"images/europe/britmila.jpg","size":18491,"type":"image/jpeg"},{"file":"images/europe/business.jpg","size":3672,"type":"image/jpeg"},{"file":"images/europe/camps.jpg","size":10826,"type":"image/jpeg"},{"file":"images/europe/canada-flag.jpg","size":3747,"type":"image/jpeg"},{"file":"images/europe/censusireland.jpg","size":31898,"type":"image/jpeg"},{"file":"images/europe/church.jpg","size":13236,"type":"image/jpeg"},{"file":"images/europe/companies.jpg","size":11526,"type":"image/jpeg"},{"file":"images/europe/cyrillic.jpg","size":31702,"type":"image/jpeg"},{"file":"images/europe/database.jpg","size":15716,"type":"image/jpeg"},{"file":"images/europe/dnipropetrovsk_arms.jpg","size":26546,"type":"image/jpeg"},{"file":"images/europe/family-tree.jpg","size":16455,"type":"image/jpeg"},{"file":"images/europe/first.jpg","size":9946,"type":"image/jpeg"},{"file":"images/europe/flame.jpg","size":8874,"type":"image/jpeg"},{"file":"images/europe/french-flag.jpg","size":1472,"type":"image/jpeg"},{"file":"images/europe/gate.jpg","size":16290,"type":"image/jpeg"},{"file":"images/europe/gazette.jpg","size":22586,"type":"image/jpeg"},{"file":"images/europe/gen.jpg","size":10614,"type":"image/jpeg"},{"file":"images/europe/graves.jpg","size":26310,"type":"image/jpeg"},{"file":"images/europe/handwriting.jpg","size":9750,"type":"image/jpeg"},{"file":"images/europe/hebrew.jpg","size":13356,"type":"image/jpeg"},{"file":"images/europe/heritage.jpg","size":5169,"type":"image/jpeg"},{"file":"images/europe/home.jpg","size":12463,"type":"image/jpeg"},{"file":"images/europe/industral.jpg","size":11774,"type":"image/jpeg"},{"file":"images/europe/ireland-flag.jpg","size":3114,"type":"image/jpeg"},{"file":"images/europe/jc.jpg","size":11984,"type":"image/jpeg"},{"file":"images/europe/jewish-graves.jpg","size":26756,"type":"image/jpeg"},{"file":"images/europe/jfs.jpg","size":13899,"type":"image/jpeg"},{"file":"images/europe/ketubot.jpg","size":14052,"type":"image/jpeg"},{"file":"images/europe/liberty.jpg","size":8593,"type":"image/jpeg"},{"file":"images/europe/loos.jpg","size":10999,"type":"image/jpeg"},{"file":"images/europe/mag-glass.jpg","size":10789,"type":"image/jpeg"},{"file":"images/europe/memorial-de-la-shoah.jpg","size":9861,"type":"image/jpeg"},{"file":"images/europe/mohylivska.jpg","size":14236,"type":"image/jpeg"},{"file":"images/europe/mohyliv_arms.jpg","size":25639,"type":"image/jpeg"},{"file":"images/europe/netherlands-flag.jpg","size":3693,"type":"image/jpeg"},{"file":"images/europe/newspaper.jpg","size":17154,"type":"image/jpeg"},{"file":"images/europe/newyork.jpg","size":14348,"type":"image/jpeg"},{"file":"images/europe/newzealand-flag.jpg","size":5835,"type":"image/jpeg"},{"file":"images/europe/nz-birth-cert.jpg","size":10065,"type":"image/jpeg"},{"file":"images/europe/nz-gazette.jpg","size":8007,"type":"image/jpeg"},{"file":"images/europe/passenger.jpg","size":12985,"type":"image/jpeg"},{"file":"images/europe/raf.jpg","size":14417,"type":"image/jpeg"},{"file":"images/europe/relocation.jpg","size":13880,"type":"image/jpeg"},{"file":"images/europe/roll.jpg","size":8794,"type":"image/jpeg"},{"file":"images/europe/russian-flag.jpg","size":3765,"type":"image/jpeg"},{"file":"images/europe/shamrock.jpg","size":25965,"type":"image/jpeg"},{"file":"images/europe/shtetel.jpg","size":12269,"type":"image/jpeg"},{"file":"images/europe/skala.jpg","size":16845,"type":"image/jpeg"},{"file":"images/europe/soviet-map.jpg","size":14532,"type":"image/jpeg"},{"file":"images/europe/soviet-medals.jpg","size":58166,"type":"image/jpeg"},{"file":"images/europe/star-jewish.jpg","size":19282,"type":"image/jpeg"},{"file":"images/europe/synagogue.jpg","size":32079,"type":"image/jpeg"},{"file":"images/europe/trade.jpg","size":11204,"type":"image/jpeg"},{"file":"images/europe/uk-flag.jpg","size":12377,"type":"image/jpeg"},{"file":"images/europe/ukraine-flag.jpg","size":3049,"type":"image/jpeg"},{"file":"images/europe/viennaparlament.jpg","size":34613,"type":"image/jpeg"},{"file":"images/europe/war-graves.jpg","size":15718,"type":"image/jpeg"},{"file":"images/europe/war.jpg","size":18683,"type":"image/jpeg"},{"file":"images/europe/wedding.jpg","size":14597,"type":"image/jpeg"},{"file":"images/europe/wills.jpg","size":7357,"type":"image/jpeg"},{"file":"images/europe/workhouse.jpg","size":9988,"type":"image/jpeg"},{"file":"images/logo youtube.jpg","size":485909,"type":"image/jpeg"},{"file":"images/logo.png","size":311689,"type":"image/png"},{"file":"images/logotree.png","size":109976,"type":"image/png"},{"file":"images/logotree.svg","size":134165,"type":"image/svg+xml"},{"file":"images/logotreerobin.png","size":329212,"type":"image/png"},{"file":"images/logotreerobin.svg","size":1065244,"type":"image/svg+xml"},{"file":"images/square.png","size":513,"type":"image/png"},{"file":"images/svg/bookreadingman.svg","size":97434,"type":"image/svg+xml"},{"file":"images/svg/favicon.png","size":200521,"type":"image/png"},{"file":"images/svg/favicon_io/android-chrome-192x192.png","size":8749,"type":"image/png"},{"file":"images/svg/favicon_io/android-chrome-512x512.png","size":29725,"type":"image/png"},{"file":"images/svg/favicon_io/apple-touch-icon.png","size":7805,"type":"image/png"},{"file":"images/svg/favicon_io/favicon-16x16.png","size":448,"type":"image/png"},{"file":"images/svg/favicon_io/favicon-32x32.png","size":956,"type":"image/png"},{"file":"images/svg/favicon_io/favicon.ico","size":15406,"type":"image/vnd.microsoft.icon"},{"file":"images/svg/favicon_io/site.webmanifest","size":263,"type":"application/manifest+json"},{"file":"images/svg/favicon_io.zip","size":64172,"type":"application/zip"},{"file":"images/svg/FX13_robin.svg","size":12944,"type":"image/svg+xml"},{"file":"images/svg/logomanbook.png","size":66939,"type":"image/png"},{"file":"images/svg/logomanrobin.png","size":66297,"type":"image/png"},{"file":"images/svg/logotree.png","size":109976,"type":"image/png"},{"file":"images/svg/logotree.svg","size":134165,"type":"image/svg+xml"},{"file":"images/svg/logotreerobin.png","size":240048,"type":"image/png"},{"file":"images/svg/logotreerobin.svg","size":1065244,"type":"image/svg+xml"},{"file":"images/svg/oaktree.svg","size":73414,"type":"image/svg+xml"},{"file":"images/svg/tree.svg","size":30168,"type":"image/svg+xml"},{"file":"images/svg/tree1.png","size":321269,"type":"image/png"},{"file":"images/svg/tree3.svg","size":1198878,"type":"image/svg+xml"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/newzealand\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/newzealand.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/australia\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/australia.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("..\\..\\src\\routes\\__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components\\error.svelte"),"src/routes/index.svelte": () => import("..\\..\\src\\routes\\index.svelte"),"src/routes/newzealand.svelte": () => import("..\\..\\src\\routes\\newzealand.svelte"),"src/routes/australia.svelte": () => import("..\\..\\src\\routes\\australia.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-ce9cf9d6.js","css":["assets/pages/__layout.svelte-1cb04902.css"],"js":["pages/__layout.svelte-ce9cf9d6.js","chunks/vendor-dad3c69f.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-482d185c.js","css":[],"js":["error.svelte-482d185c.js","chunks/vendor-dad3c69f.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-f0099213.js","css":["assets/pages/index.svelte-3b776db4.css"],"js":["pages/index.svelte-f0099213.js","chunks/vendor-dad3c69f.js"],"styles":[]},"src/routes/newzealand.svelte":{"entry":"pages/newzealand.svelte-013e7d13.js","css":["assets/pages/newzealand.svelte-81ba39d7.css"],"js":["pages/newzealand.svelte-013e7d13.js","chunks/vendor-dad3c69f.js"],"styles":[]},"src/routes/australia.svelte":{"entry":"pages/australia.svelte-f11487ce.js","css":["assets/pages/australia.svelte-b349f3b9.css"],"js":["pages/australia.svelte-f11487ce.js","chunks/vendor-dad3c69f.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}