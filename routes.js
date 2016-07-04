'use strict';

var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

function init(app){
	app.get('/', hello)
	app.post('/upload', upload.array(), uploadImages);
	console.log("Routes initiated");
}

function uploadImages(req, res, next){
	console.log(req, res, next);
}

function hello(req, res, next){
	res.send('Hello World');
}

module.exports.init = init;
