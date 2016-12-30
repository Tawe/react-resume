var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, 'www');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
    entry: APP_DIR + '/jsx/App.jsx',
 	output: {
 	   path: BUILD_DIR,
 	   publicPath:'',
 	   filename: '/js/bundle.js'
 	 },
 	 devServer:{
 	 	headers: { "Access-Control-Allow-Origin": "*" },
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
 		    { test: /\.less$/, include: APP_DIR, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") },
 		    { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['file?hash=sha512&digest=hex&name=img/[hash].[ext]', 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']}
 		]
 	},
 	plugins: [
        new ExtractTextPlugin("main.css", {
        	allChunks: true
        }),
       new webpack.DefinePlugin({
         'process.env': {
           NODE_ENV: JSON.stringify('production')
         }
       }),
       new webpack.optimize.UglifyJsPlugin()
    ],
 	watch: true,

};

module.exports = config;

