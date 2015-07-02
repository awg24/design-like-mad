var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
	defaults: {
		fullName: null,
		email: null,
		city: null,
		state: null,
		portfolioURL: null,
		IsStudent: null,
		desginerType: null,
		skillRating: null
	},
	idAtrribute: "id",
	parseClassname: "Applicant"
});