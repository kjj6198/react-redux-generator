const webpack                     = require('webpack');
const path                        = require('path');
const merge                       = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const parts                       = require('./webpack.parts');

/* you can seperate entry to another file. */
const entry = {
  app: './client/index.js'
};

const commonConfig = (env) => ({
  context: __dirname,
  devtool: env.target === 'development' ? 'cheap-module-eval-source-map' : 'cheap-source-map',
  resolve: {
    modules: ['node_modules', './client'],
    extensions: ['.js'],
    alias: {

    },
  },
  entry: entry,
  output: {
    path: path.join(__dirname, 'bundle'),
    filename: '[name].bundle.js',
    publicPath: '/bundle/'
  }
});

/* eslint consistent-return: 0 */
module.exports = ({ target }) => {
  if (typeof target === 'undefined') {
    target = 'development'; /* eslint no-param-reassign: 0 */
  }

  switch (target) {
    case 'development':
      return merge([
        commonConfig(target),
        parts.loadStylesheet(target),
        parts.devServer(target),
        parts.loadJavascript(target),
        parts.setVariable('process.env.NODE_ENV', 'development'),
        { 
          plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.LoaderOptionsPlugin({ debug: true })
          ]
        }
      ]);
    case 'production':
      return merge([
        commonConfig(target),
        { 
          plugins: [
            new webpack.optimize.UglifyJsPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
          ]
        },
        parts.loadJavascript(target),
        parts.setVariable('process.env.NODE_ENV', 'production'),
        parts.extractStylesheet(target)
      ]);
  }
}
