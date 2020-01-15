
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const styleLoader = require('./utils')

const config = merge(baseConfig, {
    mode: "production",
    module: {
        rules: styleLoader.styleLoaders({
            sourceMap: false,
            extract: true,
            usePostCSS: true
        })
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all',
            minSize: 10,
            name: true,
            cacheGroups:{
                'vendors': {
                    test: /node_modules/,
                    priority: -10
                },
                'app': {
                    test: /page/,
                    priority: 1
                }
            }
        }
    }

})

module.exports = config
