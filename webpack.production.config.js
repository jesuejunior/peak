var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: [
		'./main.js' // Your appʼs entry point
	],
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'app.built.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: loaders
	},
	plugins: [
		new CopyWebpackPlugin([
			{from: './index.html'}
		]),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	]
};
