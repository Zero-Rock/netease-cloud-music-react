/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:05 下午.
 */
const { resolve, PKG } = require( "./utils" );

module.exports = {
  entry: {
    app: "./src/main.tsx"
  },
  output: {
    path: resolve( `dist/${ PKG.name }` ),
    filename: "js/[name].js",
    chunkFilename: "js/[id].js",
    publicPath: "/"
  },
  resolve: {
    // 刚开始由于漏写了 '.js'，导致编译失败
    extensions: [ ".ts", ".tsx", ".js", ".jsx" ],
    alias: {
      src: resolve( "src" )
    }
  },
  module: {
    rules: [ {
      test: /\.tsx?$/,
      use: "babel-loader?cacheDirectory",
      exclude: /node_modules/
      // include: ['.']
    } ]
  }
};
