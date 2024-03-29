﻿const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: "./source/app.tsx",
    mode: "development",
    output: {
        filename: "./app-bundle.js",
        devtoolModuleFilenameTemplate: '[resource-path]'  // removes the webpack:/// prefix
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Brookshear Machine",
            template: "./source/index.html"
        })
    ],
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            }
        ]
    }
}