
var mongoose = require('mongoose');

function init(){
	var config = require('../config/config').config();
	var db = mongoose;
	db.connect(url(config));
	db.connection.on('error', (err)=>{
		console.log("db connection error ",err);
	});
	return new Promise((resolve, reject)=>{
		db.connection.once('open', ()=>{
			resolve(true);
		});
	});
}

function url(config){
	return 'mongodb://' + config.hostname + '/' + config.db;
}

module.exports.init = init;