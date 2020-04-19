/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:28 下午.
 */
const path = require( "path" );
const chalk = require( "chalk" );
const PKG = require( "../package.json" );

const resolve = ( dir ) => {
  return path.join( __dirname, "..", dir );
};

const CHALK = {
  /**
   *
   * @param message {string}
   */
  success: ( message ) => {
    console.log( "🍺 " + chalk.cyanBright( message ) + "\n" );
  },

  /**
   *
   * @param message {string}
   */
  info: ( message ) => {
    console.log( "🐚 " + chalk.yellowBright( message ) + "\n" );
  },
  /**
   *
   * @param message {string}
   */
  error: ( message ) => {
    console.log( "💔 " + chalk.redBright( message ) + "\n" );
  }
};

/**
 *
 * @param str {string}
 * @param len {number}
 * @param fill {string}
 * @param type {string}
 * @returns {string}
 */
const padding = ( str, len, fill, type = "end" ) => {
  let nerStr = str;
  if (type === "end") {
    nerStr = str.toString().padEnd( len, fill || " " );
  } else {
    nerStr = str.toString().padStart( len, fill || " " );
  }
  return nerStr;
};

module.exports = {
  resolve,
  PKG,
  padding,
  CHALK
};
