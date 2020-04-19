/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:09 下午.
 */
const merge = require( "webpack-merge" );
const webpack = require( "webpack" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const UglifyjsPlugin = require( "uglifyjs-webpack-plugin" );
const OptimizeCSSAssetsPlugin = require( "optimize-css-assets-webpack-plugin" );
const baseConf = require( "./webpack.base.conf" );
const {resolve, PKG} = require( "./utils" );
const config = require( "../config/index" ).production;

const webpackProdConfig = merge( baseConf, {
  mode: "production",
  devtool: config.devtool,
  output: {
    path: resolve('dist'),
    filename: `${ config.assetsSubDirectort }/js/[name].[contenthash].js`,
    chunkFilename: `${ config.assetsSubDirectort }/js/[name].[contenthash].js`,
    publicPath: "./"
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: `${ config.assetsSubDirectort }/css/[name].[contenthash].css`,
      chunkFilename: `${ config.assetsSubDirectort }/css/[name].[contenthash].css`
    } ),
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    concatenateModules: true,
    minimizer: [
      new UglifyjsPlugin( {
        uglifyOptions: {
          warnings: false
        },
        sourceMap: true,
        parallel: true,
        extractComments: true
      } ),
      new OptimizeCSSAssetsPlugin( {} )
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "vendor",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  }
} );

module.exports = webpackProdConfig;
