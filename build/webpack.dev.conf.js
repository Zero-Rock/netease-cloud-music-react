/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:09 下午.
 */
const merge = require( "webpack-merge" );
const webpack = require( "webpack" );
const { resolve, PKG } = require( "./utils" );
const baseConf = require( "./webpack.base.conf" );
const config = require('../config').development

const webpackDevConfig = merge( baseConf, {
  mode: "development",
  devtool: config.devtool,
  output: {
    path: resolve( `dist` ),
    filename: `${ config.assetsSubDirectort }/js/[name].js`,
    chunkFilename: `${ config.assetsSubDirectort }/js/[id].js`,
    publicPath: "./"
  },
  plugins: [

  ]
} );

module.exports = webpackDevConfig;
