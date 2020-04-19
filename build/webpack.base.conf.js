/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:05 下午.
 */
const CopyWebapckPlugin = require( "copy-webpack-plugin" );
const HtmlWebpackPlugin = require( "html-webpack-plugin" );
const webpack = require( "webpack" );
const { resolve, PKG, CHALK } = require( "./utils" );
const config = require( "../config" );

const NODE_ENV = process.env.NODE_ENV;
const isProd = NODE_ENV === 'production'
CHALK.info( `environment: ${ NODE_ENV }` );
const { envConfig } = config[ NODE_ENV ] || {};
const ENV_CONFIG = {};
for (let key in envConfig) {
  ENV_CONFIG[ key ] = JSON.stringify( envConfig[ key ] );
}


module.exports = {
  entry: {
    app: "./src/main.tsx"
  },
  resolve: {
    // 刚开始由于漏写了 '.js'，导致编译失败
    extensions: [ ".ts", ".tsx", ".js", ".jsx" ],
    alias: {
      src: resolve( "src" ),
    },
    modules: [ resolve( "src" ), resolve( "node_modules" ) ]
  },
  module: {
    rules: [ {
      test: /\.tsx?$/,
      use: "babel-loader?cacheDirectory",
      exclude: /node_modules/,
      include: resolve( "src" )
    } ]
  },
  plugins: [
    new CopyWebapckPlugin( [
      {
        from: resolve( "src/assets/images" ),
        to: `${ PKG.name }/images`
      }
    ] ),
    new webpack.DefinePlugin( ENV_CONFIG ),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: resolve(`dist/${ PKG.name }/js/mainfest.json`)
    }),
    new HtmlWebpackPlugin( {
      title: PKG.name,
      template: resolve( "src/index.ejs" ),
      filename: "index.html",
      inject: true,
      data: {
        title: PKG.name,
        rootPath: PKG.name,
        injectDll: !isProd
      }
    } )
  ]
};
