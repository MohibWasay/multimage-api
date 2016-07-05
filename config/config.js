'use strict';

var process = require('process');
var _config;

var envs = {
	dev: {
		env: 'dev',
		db: 'multimage',
		hostname: 'localhost',
		secret: 'blaa123'
	},
	prod: {
		env: 'dev',
		db: 'feed_db',
		hostname: 'localhost'
	}
};

function init(){
	return new Promise((resolve)=>{
		var _env = env();
		console.log('Initializing '+_env+' environment');
		_config = envs[_env];
		resolve();
	});
}

function config(){
	return envs[env()];
}

function env(){
	return process.argv[2] || 'dev'
}

module.exports.init = init;
module.exports.config = config;
