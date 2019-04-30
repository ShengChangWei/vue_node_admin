// vue.config.js
var path = require('path');
const express = require('express');
const app = express();
var apiRoutes = express.Router();

module.exports = {
	publicPath: './',
	outputDir: 'dist',
	// 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
	assetsDir: 'assets',
	// 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
	indexPath: 'index.html',
	lintOnSave: false,
	devServer: {
		proxy: {
			'/mock': {
				target: 'http://localhost:5000',
				ws: true,
				changeOrigin: true,
				pathRewrite: {
					'^/mock': ''
				}
			}
		}
	}
};
