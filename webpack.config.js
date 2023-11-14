// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-undef
const EsLintPlugin = require('eslint-webpack-plugin');

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
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new EsLintPlugin()
    ],
    output: {
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'eslint-webpack-plugin'
            }
        ]
    }
};


