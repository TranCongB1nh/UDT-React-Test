const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../src/server/server.tsx'),
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};