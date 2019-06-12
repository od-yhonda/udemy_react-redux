var publicDir = __dirname + '/public';

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: publicDir,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    // loader -> rules
    rules: [{
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/preset-react', '@babel/preset-env']
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: publicDir
  }
};