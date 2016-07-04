var mongoose = require('mongoose');

var Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var Uploader = new Schema({
	id: String,
	name: String,
	imageBinary: Buffer
});

Uploader.pre('save', (next)=>{
	next();
});

Uploader.methods.add = function(imageFileName) {
	return new Promise((resolve,reject)=>{
	});
};

module.exports = Uploader;