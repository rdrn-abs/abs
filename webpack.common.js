const { parse, resolve } = require('path');
const glob = require('glob');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entries = glob.sync("**/src/index.js");

module.exports = {
	entry: entries.reduce((acc, filePath) => ({
		...acc,
		[parse(resolve(filePath, '../../')).name]: resolve(__dirname, filePath),
	}),{}),
	output: {
		path: resolve(__dirname, 'dist'),
		publicPath:process.env.PUBLIC_URL,
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
			{
        test: /\.(png|jpe?g|gif|webp|bmp|svg)$/i,
        use: [
          {
            loader: 'file-loader',
						options: {
							name: '[name].[ext]',
						},
          },
        ],
      },
			
		],
	},
	plugins: [new Dotenv({path:'/home/rkr/clients/chosen/abs/scrambler/.env'}), new CleanWebpackPlugin()],
}