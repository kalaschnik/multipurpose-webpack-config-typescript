const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

const mode = process.env.NODE_ENV || 'development'; // default to development

module.exports = {
	mode: mode,
	entry: './src/app.ts',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: 'public/', to: './' }],
		}),
		new HtmlWebpackPlugin({
			title: 'Webpack 5 Boilerplate TypeScript',
			filename: 'index.html', // default: index.html
			template: './src/index.html',
		}),
	],

	devtool: mode === 'development' ? 'inline-source-map' : false,
	devServer: {
		static: {
			directory: path.join(__dirname, './'), // that should point where you index.html is
		},
		// port: 3000,
		open: true, // open browser window automatically
		hot: true, // enable hot reload
		compress: true, // enable gzip compression
		historyApiFallback: true, // enable HTML5 history API
		devMiddleware: { writeToDisk: true },
	},
	experiments: {
		topLevelAwait: true,
	},
};
