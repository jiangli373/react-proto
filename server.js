'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var restify = require('restify');
var _ = require('lodash');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: false,
	historyApiFallback: true,
	proxy: {
		"/api/*": "http://localhost:3001"
	}
}).listen(3000, 'localhost', function(err, result) {
	if (err) {
		console.log(err);
	}

	console.log('Listening at localhost:3000');
});


//backend: restify
var server = restify.createServer();
server.use(restify.bodyParser({ mapParams: true }));

var pageItems = [{
	"id": 231,
	"name": "建立基本知识"
}, {
	"id": 453,
	"name": "迈向成功的决心：情绪的纪律"
}, {
	"id": 52,
	"name": "基本面分析"
}, {
	"id": 2,
	"name": "技术分析"
}, {
	"id": 5,
	"name": "期权交易"
}, {
	"id": 99,
	"name": "交易者的心理架构"
}];

// 获取页面列表
server.get('/api/pageList/:id', function(req, res, next) {
	res.send({
		id: req.params.id,
		pageItems: pageItems
	});
	return next();
});

// 获取页面内容
server.get('/api/page/:id', function(req, res, next) {
	var page = _.find(pageItems, function(pageItem) {
		return pageItem.id == parseInt(req.params.id);
	});

	if (page) {
		res.send({
			page: page
		});
	} else {
		res.send({
			code:'CanNotFindPage'
		});
	}

	return next();
});

// 创建新的页面
server.post('/api/page', function(req, res, next) {
	var newPage=req.body;
	newPage.id=_.random(999999, 999999999);
	pageItems.push(newPage);
	res.send({
		code:'createSuccess'
	});
	return next();
});

// 删除页面
server.del('/api/page/:id', function(req, res, next) {
	_.remove(pageItems,function(pageItem){
		return pageItem.id == parseInt(req.params.id);
	});

	res.send({
		code:'deleteSuccess'
	});
	return next();
});


server.listen(3001, function() {
	console.log('%s listening at %s', server.name, server.url);
});