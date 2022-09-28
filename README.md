# My Multipurpose Webpack 5 Config (TypeScript)

> See https://github.com/kalaschnik/multipurpose-webpack-config for my vanialla JS config

## Config Overview

- todo

## Replicate

1. Init npm

```bash
npm init -y
```

2. Install dependencies
   1. `webpack` core bundler
   2. `webpack-cli` run webpack commands
   3. `webpack-dev-server` liver server watching file changes
   4. `typescript` install specific ts version for current version
   5. `ts-loader` tells webpack how to convert ts to js

```bash
npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader
```

3. Create project structure

```bash
mkdir src && touch src/index.ts && touch webpack.config.js && tsc --init
```

4. Set your desired JS `target` in `tsconfig.json` which `webpack` will respect
5. Set `// "outDir": "./",` to `"outDir": "./dist/",`

6. Add the following to your `webpack.config.js`:

```javascript
const path = require('path');

module.exports = {
	entry: './src/index.ts',
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
};
```
