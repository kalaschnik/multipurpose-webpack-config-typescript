const path = require('path');

module.exports = {
  mode: 'development',
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
  devtool: 'inline-source-map',
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
