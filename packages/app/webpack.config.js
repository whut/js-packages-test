import path from 'node:path'
import url from 'node:url'

export default {
  experiments: {
    // outputModule: true,
  },
  target: 'browserslist',
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
  //   optimization: {
  //     minimize: false,
  //   },
  module: {
    rules: [
      {
        test: /\.js$/u,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            // sourceMaps: true,
            comments: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {
                    version: '3.29',
                    proposals: true,
                  },
                  modules: false,
                  debug: true,
                },
              ],
            ],
          },
        },
        exclude: /node_modules/u,
      },
    ],
  },
}
