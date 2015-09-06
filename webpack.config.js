module.exports = {
  entry: './public/main.js',
  output: {
    filename: './public/bundle.js'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      { test: /\.css$/,   loader: 'style-loader!css-loader' },
      { test: /\.svg$/,   loader: 'url-loader?mimetype=image/svg+xml' },
      { test: /\.woff$/,  loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.eot$/,   loader: 'url-loader?mimetype=application/font-woff' },
      { test: /\.ttf$/,   loader: 'url-loader?mimetype=application/font-woff' }
    ]
  }
};
