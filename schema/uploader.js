var mongoose = require('mongoose');
var _ = require('lodash');

var Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var UploaderSchema = Schema({
	id: String,
	name: String,
	imageBinary: String
});

UploaderSchema.pre('save', (next)=>{
	next();
});

UploaderSchema.statics.upload = function(files) {
	return new Promise((resolve, reject) => {
		_.each(files, (file) => {
			file.save();
		});

		return resolve();
	});
};

UploaderSchema.statics.rename = function() {
	return new Promise((resolve, reject) => {
		_.each(files, (file) => {
			file.save();
		});

		return resolve();
	}); 
}

var Uploader = mongoose.model('Uploader', UploaderSchema);
module.exports = Uploader;
