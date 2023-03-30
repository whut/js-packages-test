import path from 'node:path'
import url from 'node:url'

export default {
  experiments: {
    // outputModule: true,
  },
  // target: 'browserslist',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    clean: true,
    // module: true,
    path: path.resolve(
      path.dirname(url.fileURLToPath(import.meta.url)),
      'dist'
    ),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/u,
        use: 'babel-loader',
        exclude: /node_modules/u,
      },
    ],
  },
}
