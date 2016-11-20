var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'www');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/jsx/App.jsx',
 	output: {
 	   path: BUILD_DIR,
 	   publicPath:'/',
 	   filename: '/js/bundle.js'
 	 },
 	 devServer:{
        contentBase: './www',
 		inline: true,
 		port: 8080,

 	},
 	resolve: {
	    extensions: ['', '.js', '.jsx', '.css']
	},
 	module:{
 		loaders : [
 		     { test : /\.jsx?/, include : APP_DIR, loader : 'babel'},
 		     { test: /\.less$/, include: APP_DIR, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
 		]
 	},
 	plugins: [
        new ExtractTextPlugin("/css/main.css", {
        	allChunks: true
        })
    ],
 	watch: true,

};

module.exports = config;