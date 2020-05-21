const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: '[name].js'
    },
    target: 'web',
    mode: 'production',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: false
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {minimize: true}
                }
            },
            {
                test: /\.css$/,
                loader: [MiniCSSExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: './index.html',
            favicon: './src/img/icon.png',
            meta: {
                'charset': 'UTF-8',
                'viewport': 'width=device-width, initial-scale=1'
            }
        })
    ]

}