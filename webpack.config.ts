//###  Node  ###//
import Path from "path"

//###  NPM  ###//
import HTMLWebpackPlugin    from "html-webpack-plugin"
import SveltePreprocess     from "svelte-preprocess"
import {WebpackPluginServe} from "webpack-plugin-serve"


const {resolve, join} = Path

const Directory = {
	source:      resolve("./src"          ),
	build:       resolve("./build/"       ),
	nodeModules: resolve("./node_modules/"),
}

const File = {
	Entry: {
		layout: join(Directory.source, "index.html"),
		script: join(Directory.source, "index.ts"  ),
	},
}


export default {

	target:  "web",
	devtool: "source-map",
	mode:    "development",
	watch:   true,

	entry: [
		File.Entry.script,
		"webpack-plugin-serve/client",
	],

	output: {
		filename: "index.js",
		path:     Directory.build,
	},

	plugins:[
		new WebpackPluginServe({
			port:   8080,
			host:   "localhost",
			hmr:    true,
			static: Directory.build,
			client: {address:"localhost:8080"},
		}),
		new HTMLWebpackPlugin({template:File.Entry.layout}),
	],

	module:{
		rules:[
			{
        test:    /\.svelte$/,
        exclude: /node_modules/,
				use: {
					loader: "svelte-loader",
					options: {
						emitCss:    true,
						hotReload:  true,
						preprocess: SveltePreprocess({
							babel: {presets: ["@babel/preset-typescript"]},
						}),
					},
				},
			},
		],
	},

}
