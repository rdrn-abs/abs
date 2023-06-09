const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: 'production',
  entry: {
    "components/RedirectToLogin":
      "/home/rkr/clients/chosen/abs/components/RedirectToLogin.js",
  },
  output: {
    path: resolve(__dirname, "componentDist"),
    publicPath: "/",
    libraryTarget: "umd",
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
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
