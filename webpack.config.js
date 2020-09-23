/** @type {import('webpack').Configuration} */
require('dotenv').config();
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const { NODE_ENV } = process.env;

const MINIFY = NODE_ENV === 'production' || NODE_ENV === 'test';
const HTTP_SERVER = NODE_ENV === 'development' || NODE_ENV === 'test';

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  mode: MINIFY ? 'production' : 'development',
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /[\\/]node_modules[\\/]/,
        loader: 'babel-loader',
      },
      {
        test: /\.s?[ac]ss$/i,
        exclude: /[\\/]node_modules[\\/]/,
        use: [
          MINIFY ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "_variables";\n',
              sassOptions: {
                includePaths: 'src/styles',
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  devtool: MINIFY ? false : 'source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    ...(MINIFY
      ? [
          new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
          }),
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: '../reports/build-report.html',
          }),
        ]
      : []),
    ...(HTTP_SERVER
      ? [
          new HtmlWebpackPlugin({
            filename: '404.html',
          }),
        ]
      : []),
  ],
};
