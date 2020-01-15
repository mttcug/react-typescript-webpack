const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
    mode: "production",
    entry: {
        main: path.resolve(__dirname, './main.tsx')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.tsx', '.jsx', '.js', '.html'],
        alias: {
            '@': './src'
        }
    },
    module: {
        rules: [
            {
                test: /\.(t|j)sx?$/,
                use: ['babel-loader', 'tslint-loader']
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
