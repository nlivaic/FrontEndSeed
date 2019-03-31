const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
  mode: 'development',
	devtool: 'inline-source-map',
  entry: {
		index: [
			'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
			path.join(__dirname, 'scripts', 'app.js')
		]
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  module: {
		rules: [
			{ 
				test: /\.js$/, 
				exclude: /(node_modules)/, 
				use: {
					loader: 'babel-loader', 
					options: { presets: ['@babel/preset-env'] } 
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
