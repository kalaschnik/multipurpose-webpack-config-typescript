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
mkdir src && touch src/index.js && touch webpack.config.js && tsc --init
```
