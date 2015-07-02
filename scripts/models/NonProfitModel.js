var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
	defaults: {
		name: null,
		projectType: null,
		rank: null,
		phoneNum:null,
		email, null,
		missionStatement: null, 
		description:null,
		site: null
	},
	idAtrribute: "id",
	parseClassname: "NonProfit"
});