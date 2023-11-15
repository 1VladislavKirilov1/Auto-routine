// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
// eslint-disable-next-line no-undef
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// eslint-disable-next-line no-undef
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
        new ESLintWebpackPlugin(),
        new CleanWebpackPlugin(),
    ],
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};