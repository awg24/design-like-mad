var Backbone = require('backparse')({
    appId: 'appidgoeshere',
    apiKey: 'parserestapikeygoeshere',
    apiVersion: 1
});

module.exports = Backbone.Model.extend({
	defaults: {
		name: null,
		email: null,
		password: null,
		portfolioURL: null,
		userType: null,
		desginerType: null,
		skillRating: null
	},
	idAtrribute: "objectId",
	parseClassName: "_User",
	isUser: true
});
