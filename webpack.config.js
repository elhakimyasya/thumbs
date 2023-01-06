const path = require('path');
const autoprefixer = require('autoprefixer');
const terserWebpackPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        "bundle": [
            './src/assets/scripts/scripts.js',
            './src/assets/scripts/html2canvas.min.js',
            './src/assets/scripts/canvas2image.js',
        ]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                        },
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer()
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer Dart Sass
                            implementation: require('sass'),

                            // See https://github.com/webpack-contrib/sass-loader/issues/804
                            webpackImporter: false,
                            sassOptions: {
                                includePaths: ['./node_modules']
                            },
                        },
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
            new terserWebpackPlugin({
                extractComments: false,
                terserOptions: {
                    mangle: true,
                    compress: true,
                    format: {
                        comments: false,
                    },
                },
            })
        ],
        // splitChunks: {
        //     chunks: 'all',

        // },
    },
    output: {
        clean: false,
        path: path.resolve(__dirname, './dist/scripts'),
        filename: '[name].js'
    },
    watch: true
}