
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const styleLoader = require('./utils')

const devMode = process.env.NODE_ENV !== 'production';

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
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: devMode ? '[name].css' : '[name].[hash].css',
          chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
      ]

})

module.exports = config
