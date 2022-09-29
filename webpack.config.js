const path = require('path');

const mode = process.env.NODE_ENV || 'development'; // default to development

module.exports = {
  mode: mode,
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
};
