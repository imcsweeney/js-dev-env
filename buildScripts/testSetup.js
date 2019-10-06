// this file isn't transpiled

//Register babel to transpile before our tests are run
require('babel-register')();

//disable webpack features that mocha doesn't understand
require.extensions['.css'] = function(){};
