const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
	mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
		    template: './public/index.html',
        }),
    ],
});