
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const styleLoader = require('./utils')

const config = merge(baseConfig, {
    mode: "development",
    devtool: 'devtool',
    module: {
        rules: styleLoader.styleLoaders({
            sourceMap: false,
            usePostCSS: true
        })
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true,
        open: true,
        port: '9999',
        compress: false,
        historyApiFallback: {
            rewrites: [
                { from: /^\/$/, to: '/dist/index.html' }
            ]
        }
    }
})

module.exports = config
