var Backbone = require('backparse')({
    appId: 'S6Y7ni0haUcubEj98BcjWPl3lDPaYlVewgl53Prj',
    apiKey: 'E6IQ4vAZa9rfubgL3lpRvm5RXPAmcRm3rAhiWC69',
    apiVersion: 1
});
var validator = require("validator");
var _ = require("backbone/node_modules/underscore");

module.exports = Backbone.Model.extend({
	defaults: {
		name: null,
		submittedby: null,
		designType: null,
		rank: null,
		phoneNum:null,
		email: null,
		missionStatement: null, 
		description:null,
		site: null
	},
	idAtrribute: "objectId",
	parseClassName: "NonProfit",
	validate: function(attr){
		var errors = {};

		if(!attr.name){
			errors.name = "Field must not be blank!";
		}
		if(!attr.email){
			errors.email = "Field must not be blank!";
		}
		if(!attr.designType){
			errors.designType = "Field must not be blank!";
		}
		if(!attr.phoneNum){
			errors.phoneNum = "Field must not be blank!";
		} else if(!validator.isNumeric(attr.phoneNum) || attr.phoneNum.length !== 10){
			errors.phoneNum = "Please type just numbers including area code";
		} 
		if(!attr.missionStatement){
			errors.missionStatement = "Field must not be blank!";
		}
		if(!attr.description){
			errors.description = "Field must not be blank!";
		}


		if(_.isEmpty(errors)){
			return false;
		} else {
			return errors;
		}

	}
});