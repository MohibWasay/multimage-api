'use strict';

var multer  = require('multer');
var uploader = require('./controller/uploader');
var upload = multer({ dest: 'uploads/' })

function init(app){
	app.get('/', hello)
	app.post('/upload', upload.any(), uploader.upload);
	app.post('/rename', uploader.rename);
	console.log("Routes initiated");
}

function hello(req, res, next){
	res.send('Hello World')
}

module.exports.init = init;
