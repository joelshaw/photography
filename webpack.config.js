const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageWebpackPlugin = require('imagemin-webpack-plugin').default;
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                       '@babel/preset-env', 
                       '@babel/preset-react'
                    ]
                  }
            },
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
        new CleanWebpackPlugin(['dist']),
        new htmlWebpackPlugin({
            title: 'Joel Shaw Photography',
            template: './src/assets/templates/main.html',
            minify: true
        }),
        new ImageWebpackPlugin({
            disable: process.env.NODE_ENV !== 'production',
            pngquant: {
                quality: '95-100'
            }
        })
    ],
    devServer: {
        port: 3000,
        contentBase: 'dist'
    }
};