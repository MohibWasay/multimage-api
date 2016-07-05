var db = require('mongoose');
var Uploader = require('../schema/uploader');
var _ = require('lodash');

function upload(req, res, next) {
	if(!req.files)
		return res.status(400).send({status: 400, message: 'Cannot Upload Image(s)', status: false});
	var uploader = new Uploader();
	uploader.upload(req.files).then((files)=>{
		res.send({status: 200, message: 'Successfully Uploaded Image(s)', files: files});
	},(err)=>{
		res.send({status: 500, message: 'Internal Server Error', err: err});
	})
}

exports.upload = upload;
