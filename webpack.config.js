const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'dev';
const isProd = process.env.NODE_ENV === 'prod';
const ASSET_PATH = process.env.ASSET_PATH || '/';

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimize = true;
    config.minimizer = [new OptimizeCssAssetsPlugin(), new TerserPlugin()];
  }

  return config;
};

const filename = (ext) =>
  isDev ? `[name].${ext}` : `[name].[fullhash].${ext}`;

const CSSModuleLoader = {
  loader: 'css-loader', // translates CSS into CommonJS
  options: {
    sourceMap: isDev,
    modules: {
      localIdentName: isDev ? '[local]___[hash:base64:5]' : '[hash:base64:5]',
    },
    importLoaders: 1,
  },
};

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: isDev,
    importLoaders: 1,
  },
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
    publicPath: ASSET_PATH,
  },
  devtool: isDev ? 'source-map' : false,
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: optimization(),
  devServer: {
    port: 4200,
    open: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: __dirname + '/src/scss',
        use: [MiniCssExtractPlugin.loader, CSSModuleLoader, 'sass-loader'],
      },
      {
        test: /\.scss$/,
        include: __dirname + '/src/scss',
        use: [MiniCssExtractPlugin.loader, CSSLoader, 'sass-loader'],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            sourceMap: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            retainLines: isDev,
            minified: isProd,
          },
        },
      },
    ],
  },
};
