# Multipurpose Webpack Config w/ TypeScript

## Features

- Dev Server (`npm start`)
- Top-Level await (through `webpack`, this requires (at least) `"target": "es2017", "module": "es2022"` in `tsconfig.json`)
- Single Webpack Config for Dev and Production
  - Auto-switch mode to production when using `npm run build`
  - source-maps-enabled on dev — disabled in prod
- static assets sit in /public and get copied to dist on build (CRA style)
- Using HtmlWebpackPlugin with templates for multiple entry points and outputs
- CSS in `<style>` tags to reduce requests
- PostCSS support (w/ [native CSS nesting enabled](https://www.w3.org/TR/css-nesting-1/))
- Markdown support using [`remark-html`](https://webpack.js.org/loaders/remark-loader/)
- Inline SVG support (using `asset/source`)
- Image support (using `asset/resource`)
