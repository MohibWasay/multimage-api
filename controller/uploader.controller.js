var db = require('mongoose');
var Uploader = require('../schema/uploader');
var _ = require('lodash');

function upload(req, res) {
	if(!req.file && req.file.filename)
		return res.status(400).send({status: 400, message: 'Cannot Upload Image(s)', status: false});
	let uploader = new Uploader();
	let postData = req.body;
	
	
	feed.create(req.file.filename).then((feed)=>{
		res.status(200).send({status: 200, message: 'Successfully Uploaded Image(s)', status: true});
	},(err)=>{
		res.status(200).send({status: 500, message: 'Internal Server Error', status: false});
	});
}

