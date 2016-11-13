module.exports = {
  entry: './src',
  output: {
    path: `${__dirname}/dist`,
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?cacheDirectory',
      },
    ],
  },
}
