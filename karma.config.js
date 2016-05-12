var webpack = require('karma-webpack');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      './node_modules/babel-polyfill/browser.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*_spec.js'
    ],
    plugins: [webpack, 'karma-jasmine', 'karma-phantomjs-launcher', 'karma-spec-reporter'],
    browsers: ['PhantomJS'],
    preprocessors: {
      'tests/**/*_spec.js': ['webpack'],
      'src/js/**/*.js': ['webpack']
    },
    reporters: ['spec'],
    webpack: {
      externals: {
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': 'window'
      },
      module: {
        loaders: [{
          test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
          loader: 'babel-loader'
        }]
      }
    },
    webpackMiddleware: { noInfo: true }
  });
};
