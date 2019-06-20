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
        // @babel/preset-envはes2015、2016、2017など全部入り。@babel/preset-es2015でインストールでも可。
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
  // development|production|none
  mode: 'development',
},
{
  entry: {
    style: './stylesheets/index.scss',
  },
  // new MiniCssExtractPluginを行うだけでいいっぽい。
  // bundle.css に想定と違う log?っぽいのが出力されて、cssとして読み込めない。
  // かつ new MiniCssExtractPluginの出力内容とコンフリクトする。
  output: {
    path: publicDir,
    // publicPath: '/',
    // filename: 'bundle.css',
  },
  module: {
    // webpack4系からloaders -> rules
    rules: [
      {
        test: /\.css$/,
        // MiniCssExtractPluginを使う場合、'style-loader'は必要ないっぽい
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        // MiniCssExtractPluginを使う場合、'style-loader'は必要ないっぽい
        // use: ['style-loader', 'css-loader', 'sass-loader'],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    // そのまま を new MiniCssExtractPlugin()に変更しただけだと指定のファイル名で出力できない
    // { filename: 'bundle.css' } のオプションを設定する。
    // new MiniCssExtractPlugin('bundle.css'),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  // mode を追加するよう警告が出るようになった
  // https://webpack.js.org/configuration/mode/
  // development|production|none
  mode: 'development',
},
];
