/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:09 下午.
 */
const merge = require( "webpack-merge" );
const baseConf = require( "./webpack.base.conf" );
module.exports = merge( baseConf, {
  mode: 'production'
} );
