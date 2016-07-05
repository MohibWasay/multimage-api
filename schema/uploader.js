var mongoose = require('mongoose');
var _ = require('lodash');

var Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var UploaderSchema = new Schema({
	id: String,
	name: String,
	imageBinary: String
});

UploaderSchema.pre('save', (next)=>{
	next();
});

UploaderSchema.methods.upload = function(files) {
	return new Promise((resolve,reject)=>{
		_.each(files, (file)=>{
			file.save((err, user)=>{
            if(err){
            	reject(err);	
            }
        });		
        resolve(user);
		})        		
	});
};

var Uploader = mongoose.model('Uploader', UploaderSchema);
module.exports = Uploader;