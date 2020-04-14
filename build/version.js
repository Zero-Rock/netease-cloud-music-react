/**
 * Created by 含光<mobius_pan@yeah.net> on 2020/4/14 10:33 下午.
 */
const chalk = require( "chalk" );
const semver = require( "semver" );
const { PKG, padding } = require( "./utils" );
const shell = require( "shelljs" );

const exec = ( cmd ) => require( "child_process" ).execSync( cmd ).toString().trim();
const versionRequirements = [
  {
    name: "node",
    currentVersion: semver.clean( process.version ),  //使用semver插件，把版本信息转换成规定格式
    versionRequirement: PKG.engines.node
  }
];

if (shell.which( "npm" )) {
  versionRequirements.push( {
    name: "npm",
    currentVersion: exec( "npm --version" ),
    versionRequirement: PKG.engines.npm
  } );
}

const checkVersion = () => {
  const warnings = [];

  for (let i = 0; i < versionRequirements.length; i ++) {
    const mod = versionRequirements[ i ];
    // 如果版本号不符合package.json文件中指定的版本号，就执行warning.push...
    // 当前版本号用红色标识，要求版本号用绿色标识
    if (!semver.satisfies( mod.currentVersion, mod.versionRequirement )) {
      warnings.push( `${ padding( mod.name, 5 ) }: ${ chalk.red( padding( mod.currentVersion, 10 ) ) } should be ${ chalk.green( mod.versionRequirement ) }` );
    }
  }

  //如果存在warning，则提示用户升级新版本
  if (warnings.length) {
    console.log( "" );
    console.log( chalk.red( "To use this template, you must update following to modules:" ) );
    console.log();
    for (let i = 0; i < warnings.length; i ++) {
      const warning = warnings[ i ];
      console.log( "  " + warning );
    }
    process.exit( 1 );
  } else {
    console.log( "" );
    console.log( chalk.blue( "You can use this template with confidence" ) );
    console.log();
  }
};
module.exports = checkVersion;
