'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config/config');

app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

const PORT = 7070;

config.init().then(()=>{
	db.init().then(()=>{
		console.log('DB connected');
		app.listen(PORT, ()=>{
			routes.init(app);
			console.log(`Listening at port ${PORT}!`);
		});
	});
});
