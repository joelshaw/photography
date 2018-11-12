const webpack = require('webpack');
const path = require('path');

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
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: 'build'
    }
};