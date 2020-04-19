/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/19 3:07 下午.
 */
const webpack = require( "webpack" );
const webpackServer = require( "webpack-dev-server" );
const portFinder = require( "portfinder" );
const webpackDevConfig = require( "./webpack.dev.conf" );
const {development} = require( "../config" );
const {CHALK, resolve}  = require('./utils')

portFinder.basePort = development.port;
portFinder.getPort( ( error, port ) => {
  if (error) {
    console.log( chalk.red( "ERROR" ) );
    console.log( error );
    return error;
  }
  const options = {
    host: development.host,
    hot: true,
    port,
    open: true,
    contentBase: resolve('dist'),
    index: 'index.html',
    watchOptions: [
      'node_modules', 'dist', 'build', 'test', 'config'
    ]
  };
  webpackServer.addDevServerEntrypoints( webpackDevConfig, options );
  const complier = webpack( webpackDevConfig );
  const server = new webpackServer( complier, options );
  server.listen( port, development.host, ( error ) => {
    if (error) {
      CHALK.error('ERROR')
      console.log( error );
      process.exit( 1 );
    }
    CHALK.success('🌎  Starting the development server...\n')
  } );
} );

