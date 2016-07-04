'use strict';

var multer  = require('multer');
var upload = multer({ storage : storage }).array('files',10);

var storage =   multer.diskStorage({
  destination: destination,
  filename: filename
});

function destination(req, file, callback) {
    callback(null, './uploads');
}

function filename(req, file, callback) {
    callback(null, file.fieldname + '-' + Date.now());
}

function init(app){
	app.get('/', hello)
	app.post('/upload', uploadImages);
	console.log("Routes initiated");
}

function uploadImages(req, res, next){
	upload(req,res,function(err) {
        if(err)	return res.end("Error uploading file.");
        res.end("File is uploaded");
    });
}

function hello(req, res, next){
	res.send('Hello World');
}

module.exports.init = init;
