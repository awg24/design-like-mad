var React = require("react");
var Backbone = require("backbone");

var SplashPage = require("./components/SplashPage");
var LoginPortal = require("./components/LoginPortal");
var SignUpPortal = require("./components/SignUpPortal");
var ProfilePage = require("./components/ProfilePage");
var ForApplicant = require("./components/ForApplicantComponent");
var ForNonProfit = require("./components/ForNonProfitComponent");
var ForOrg = require("./components/ForOrgComponent");

var containerEl = document.getElementById("container");


var App = Backbone.Router.extend({
	routes: {
		"": "splash",
		"login": "login",
		"signUp": "signUp",
		"profile":"profile"
	},
	splash: function(){
		React.render(<SplashPage routing={this} />, containerEl);
	},
	login: function(){
		React.render(<LoginPortal routing={this} />, containerEl);
	},
	signUp: function(){
		React.render(<SignUpPortal routing={this} />, containerEl);
	},
	profile: function(){
		React.render(<ProfilePage routing={this} />, containerEl);
	},
	applicant: function(){
		React.render(<ForApplicant routing={this} />, profileEl);
	},
	nonProfit: function(){
		React.render(<ForNonProfit routing={this} />, profileEl);
	},
	org: function(){
		React.render(<ForOrg routing={this} />, profileEl);
	}
});

var myRoutes = new App();
Backbone.history.start();