const { parse, resolve } = require('path');
const glob = require('glob');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entries = glob.sync("**/src/index.js");

module.exports = {
	entry: entries.reduce((acc, filePath) => ({
		...acc,
		[parse(resolve(filePath, '../../')).name]: resolve(__dirname, filePath),
	}),{}),
	output: {
		path: resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	resolve: {
		alias: {
			'react': 'preact/compat',
			'react-dom': 'preact/compat',
		},
	},
	module: {
		rules: [
			{
				test: /\.?js$/,
				exclude: [/node_modules/],
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [new CleanWebpackPlugin()],
}