/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/19 2:49 下午.
 */
const PKG = require( "../package" );

module.exports = {
  development: {
    port: 3003,
    host: "localhost",
    source: "cheap-module-eval-source-map",
    assetsSubDirectort: `${ PKG.name }`,
    envConfig: {
      NODE_ENV: "development"
    }
  },
  production: {
    productionSourceMap: true,
    devtool: "#source-map",
    assetsSubDirectort: `${ PKG.name }`,
    envConfig: {
      NODE_ENV: "production"
    }
  }
};
