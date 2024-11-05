const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const babelLoader = {
    rules: [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env',
                        ['@babel/preset-react', {'runtime': 'automatic'}]
                    ]
                }
            }
        }
    ]
}

const resolve = {
    extensions: ['.js', '.ts', '.tsx']
};

const serverConfig = {
    target: 'node',
    mode: 'development',
    entry: './src/server/server.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'server.cjs'
    },
    module: babelLoader,
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
    module: babelLoader,
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/client/index.html`
        })
    ],
    resolve 
}

module.exports = [serverConfig, clientConfig]