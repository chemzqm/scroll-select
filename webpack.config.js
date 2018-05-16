module.exports = {
  entry: './example/es6/index.js',
  output: {
    path: './example/es6/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
      {test: /\.json$/, loader: 'json' },
      {test: /\.html$/, loader: 'html'}
    ]
  },
  plugins: []
}
