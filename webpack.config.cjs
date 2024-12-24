const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'SocialMediaButtons.bundle.js',
        library: 'SocialMediaButtons',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.jsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
        ],
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './public/index.html',
    //     }),
    // ],
    mode: 'production',
};
