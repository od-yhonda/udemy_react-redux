const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const publicDir = path.join(__dirname, '/public');

module.exports = [{
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: publicDir,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    // webpack4系からloaders -> rules
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
  // mode を追加するよう警告が出るようになった
  // https://webpack.js.org/configuration/mode/
  mode: 'none',
},
{
  entry: {
    style: './stylesheets/index.scss',
  },
  output: {
    path: publicDir,
    publicPath: '/',
    filename: 'bundle.css',
  },
  module: {
    // webpack4系からloaders -> rules
    rules: [
      {
        test: /\.css$/,
        // use: [{loader: MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'}, {}],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        // use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader', 'sass-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin('bundle.css'),
  ],
  // mode を追加するよう警告が出るようになった
  // https://webpack.js.org/configuration/mode/
  mode: 'none',
},
];
