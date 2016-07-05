var db = require('mongoose');
var Uploader = require('../schema/uploader');
var _ = require('lodash');

function upload(req, res, next) {
	if(!req.files)
		return res.status(400).send({status: 400, message: 'Cannot Upload Image(s)', status: false});
	var files = [];
	_.each(req.files, (file)=>{
		files.push(new Uploader({id: file.filename, name: file.originalname}));
	})

	Uploader.upload(files).then((files)=>{
		res.send({status: 200, message: 'Successfully Uploaded Image(s)', files: files});
	},(err)=>{
		res.send({status: 500, message: 'Internal Server Error', err: err});
	})
}

function rename(req, res, next){
	var oldName = req.body.oldName;
	var newName = req.body.newName;
	Uploader.findOneAndUpdate({name: oldName},{$set: {name: newName}},(err, upload)=>{
		if(err){
			res.send({status: 500, message: 'Update Name Failed'});
		}
		res.send({status: 200, message: 'Successfully Updated Name', image: upload});
	})
}

exports.upload = upload;
exports.rename = rename;
