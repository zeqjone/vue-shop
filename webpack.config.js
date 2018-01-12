var path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractWebpackPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
	return path.join(__dirname, dir)
}

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		app: [__dirname + '/src/index.js']
	},
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
		}
	},
	devServer: {
		contentBase: __dirname + '/dist',
		inline: true,
		historyApiFallback:true,
		port:8900,
		proxy:{
			'/api':{
				target: 'http://localhost:52801',
				secure: false
			}
		}
	},
	module: {
		loaders: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			exclude:/node_modules/,
			options: {
				// extractCSS: true
				loaders: {
					css: ExtractWebpackPlugin.extract({
						use: 'css-loader',
						fallback: 'vue-style-loader'
					})
				}
			}
		}, 
		{
			test: /\.(png|jpe?g|gif)(\?.*)?$/,
			loader: 'url-loader'
		}]
	},
	plugins: [
	new htmlWebpackPlugin({
		title:'secvue',
		template:'src/temp.html'
	}),
	new ExtractWebpackPlugin('styles.css')
	]
};