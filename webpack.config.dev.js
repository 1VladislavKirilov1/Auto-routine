// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-undef
const path = require('path');
// eslint-disable-next-line no-undef
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
// eslint-disable-next-line no-undef
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// eslint-disable-next-line no-undef
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        static: './dist',
        hot: true,
    },
    stats: 'errors-only',
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new ESLintWebpackPlugin()
    ],
    output: {
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
};


