const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'skyway-processors.bundle.js',
    library: 'SkyWayProcessors',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  mode: 'production'
};
