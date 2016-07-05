'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config/config');
var db = require('./db/db');
var setupData = require('./db/setup-data');
var routes = require('./routes');

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

const PORT = 7075;

config.init().then(()=>{
	db.init().then(()=>{
		console.log('Database is Connected');
		app.listen(PORT, ()=>{
			routes.init(app);
			console.log(`Listening at port ${PORT}!`);
		});
	});
});
