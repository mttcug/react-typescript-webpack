/*global require, module, __dirname*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")


module.exports = {
    entry: [path.resolve(__dirname, '../src/main.tsx')],
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.tsx', 'ts', '.jsx', '.js', '.html'],
        alias: {
            '@': './src',
            '@page': './src/page',
            '@router': './src/router',
            '@component': './src/component',
            '@static': './src/static',
            '@share': './src/share'
        }
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: "file-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ]
}
