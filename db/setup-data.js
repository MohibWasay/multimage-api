
var _ = require('lodash');

function start(){
	console.log("Setting up data..");
	addTags();
}

function addTags(){
	var Tag = require('../model/tag');
	var tagsArr = ['food','streets','entrepreneurship','sports','office'];
	_.each(tagsArr,(item)=>{
		var tag = new Tag();
		tag.name = item;
		tag.save((err)=>{
			if(err){
				console.log(err);
			}

		});
	});
}

module.exports.start = start;