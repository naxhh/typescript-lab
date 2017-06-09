module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
    rules: [
      // Process tsx files with awesome-ts-loader
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
      // Re process source maps of all js files with source-map-loader
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader'}
    ]
  },
  // assume this requires to be in global scope
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
