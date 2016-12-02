const stripDebugRequire = source => source.replace( /.*?require\(\s*[\'"]debug[\'"]\s*\).*/g, '\n' );
const stripDebugCall = source => source.replace( /.*debug\(.*?\).*/g, '\n' );

function debugStripper( source ) {
    this.callback( null, stripDebugRequire( stripDebugCall( source ) ) );
}

module.exports = debugStripper;
