var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var DEBUG = (process.argv.indexOf('-p') === -1);

module.exports = {
  entry: "./main.js",
  output: {
    path: __dirname,
    filename: DEBUG ? 'bundle.js' : 'bundle-[hash].js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
      __DEV__: DEBUG,
      'process.env.BROWSER': true
    }),
    function() {
      if (!DEBUG) {
        this.plugin('done', function (stats) {
          var replaceInFile = function(filePath, toReplace, replacement) {
            var replacer = function(match) {
              console.log('Replacing in %s: %s => %s', filePath, match, replacement);
              return replacement
            };
            var str = fs.readFileSync(filePath, 'utf8');
            var out = str.replace(new RegExp(toReplace, 'g'), replacer);
            fs.writeFileSync(filePath, out);
          };
          var hash = stats.hash; // Build's hash, found in `stats` since build lifecycle is done.
          replaceInFile(path.join(__dirname, 'index.html'),
              'bundle.js',
              'bundle-' + hash + '.js'
          );
        });
      }
    }
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};
