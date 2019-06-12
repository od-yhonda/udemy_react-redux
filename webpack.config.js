const path = require('path');
// const ExtractTextPlugin = require('path');

const publicDir = path.join(__dirname, '/public');

module.exports = [{
  entry: [
    './src/index.js',
  ],
  output: {
    path: publicDir,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    // webpack8系からloader -> rules
    rules: [{
      // 最新をインストールするためにbabel-core -> @babel/core
      // babel-loader8系をならcore7系以上じゃないといけない
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        // 最新バージョンをインストールするために変更
        // envはes2015、2016、2017など全部入り。@babel/preset-es2015でインストールでも可。
        presets: ['@babel/preset-react', '@babel/preset-env'],
      },
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: publicDir,
  },
},
// {
//   entry: {
//     style: './stylesheets/index.scss',
//   },
//   output: {
//     path: publicDir,
//     publicPath: '/',
//     filename: 'bundle.css',
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.css$/,
//         loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
//       },
//       {
//         test: /\.scss$/,
//         loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader!sass-loader' }),
//       },
//     ],
//   },
//   plugins: [
//     new ExtractTextPlugin('bundle.css'),
//   ],
// },
];
