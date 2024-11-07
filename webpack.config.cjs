const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelLoader = {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }]]
    }
  }
}

const scssLoader = {
  test: /\.s[ac]ss$/i,
  use: ['style-loader', 'css-loader', 'sass-loader']
}

const resolve = {
  extensions: ['.js', '.ts', '.tsx', '.jsx']
}

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/server.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'server.cjs'
  },
  module: {
    rules: [babelLoader, scssLoader]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      PORT: 3000
    })
  ],
  resolve
}

const clientConfig = {
  target: 'web',
  mode: 'development',
  entry: './src/client/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/static',
    filename: 'client.js'
  },
  module: {
    rules: [babelLoader, scssLoader]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/client/index.html`
    })
  ],
  resolve
}

module.exports = [clientConfig, serverConfig]
