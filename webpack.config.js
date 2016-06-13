module.exports = {
  entry: './src/index.js',
  output: {
      path: './build',
      filename: 'index.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel', query: {compact: false}  },
      { test: /\.scss$/, loader: "style!css!sass" },
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};