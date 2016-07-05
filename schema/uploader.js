var mongoose = require('mongoose');
var _ = require('lodash');

var Schema = mongoose.Schema,
		ObjectId = Schema.ObjectId;

var Uploader = new Schema({
	id: String,
	name: String,
	imageBinary: String
});

Uploader.pre('save', (next)=>{
	next();
});

Uploader.methods.upload = function(files) {
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

module.exports = Uploader;