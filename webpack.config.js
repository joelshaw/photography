const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'tmp')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new htmlWebpackPlugin({
            title: 'test',
            template: './src/templates/main.html'
        })
    ],
    devServer: {
        port: 3000,
        contentBase: 'tmp'
    }
};