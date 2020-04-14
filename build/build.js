/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:59 下午.
 */
const ora = require( "ora" );
const rm = require( "rimraf" );
const webpack = require( "webpack" );
const webpackConfig = require( "./webpack.prod.conf" );
const checkVersion = require( "./version" );
const { resolve, CHALK } = require( "./utils" );

checkVersion();
const spinner = ora( "building for production...\n" );
// spinner.start();
CHALK.info( "start delete dist" );
rm( resolve( "dist" ), err => {
  if (err) {
    throw err;
    process.exit( 1 );
  }
  // spinner.stop();
  CHALK.success( "delete dist success" );
  spinner.start();
  webpack( webpackConfig, ( ( error, stats ) => {
    spinner.stop();
    if (error) {
      throw error;
      process.exit( 1 );
    }
    process.stdout.write( `${ stats.toString( {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    } ) }\n\n` );
    if (stats.hasErrors()) {
      CHALK.error( "Build failed with errors.\n" );
      process.exit( 1 );
    }
    CHALK.success('Build complete.\n');
    CHALK.info('Tip: built files are meant to be served over an HTTP server.\n'
               + '  Opening index.html over file:// won\'t work.\n')
  } ) );

} );
