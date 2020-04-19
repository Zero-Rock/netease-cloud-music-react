/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:08 下午.
 */
const webpack = require( "webpack" );
const { resolve, PKG } = require( "./utils" );
const vendorQueue = [
  'cube-state',
  'lodash',
  'react',
  'react-dom',
  'react-router',
  'react-router-config',
  'react-router-dom',
  'react-use',
];

module.exports = {
  mode: "development",
  entry: {
    vendor: vendorQueue
  },
  output: {
    path: resolve( `dist/${ PKG.name }` ),
    filename: "js/app.dll.js",
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin( {
      path: resolve( `dist/${ PKG.name }/js/mainfest.json` ),
      name: "[name]_[hash]",
      context: __dirname

    } )
  ]
};
