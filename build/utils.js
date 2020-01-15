'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    cssLoaders: function(options) {
        options = options || {}
        const cssLoader = {
            loader: 'css-loader',
            options: {
                sourceMap: options.sourceMap
            }
        }
        const postcssLoader = {
            loader: 'postcss-loader',
            options: {
                sourceMap: options.sourceMap
            }
        }
        // generate loader string to be used with extract text plugin
        function generateLoaders(loader, loaderOptions) {
            const loaders = options.usePostCSS ? ['style-loader', cssLoader, postcssLoader] : ['style-loader', cssLoader]

            if (loader) {
                loaders.push({
                    loader: loader + '-loader',
                    options: Object.assign({}, loaderOptions, {
                        sourceMap: options.sourceMap
                    })
                })
            }
            // Extract CSS when that option is specified
            // (which is the case during production build)
            if (options.extract) {
                return [MiniCssExtractPlugin.loader].concat(loaders)
            }
            return loaders
        }
        // https://vue-loader.vuejs.org/en/configurations/extract-css.html
        return {
            css: generateLoaders(),
            postcss: generateLoaders(),
            less: generateLoaders('less'),
            sass: generateLoaders('sass', {
                indentedSyntax: true
            }),
            scss: generateLoaders('sass'),
            stylus: generateLoaders('stylus'),
            styl: generateLoaders('stylus')
        }
    },
    styleLoaders: function(options) {
        const output = []
        const loaders = this.cssLoaders(options)
        for (const extension in loaders) {
            const loader = loaders[extension]
            output.push({
                test: new RegExp('\\.' + extension + '$'),
                use: loader
            })
        }
        return output
    }
}
