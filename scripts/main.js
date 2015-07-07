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
var UserModel = require("./models/UserModel");
var user = new UserModel(); 

var App = Backbone.Router.extend({
	routes: {
		"": "splash",
		"login": "login",
		"signUp": "signUp",
		"profile/:type":"profile"
	},
	splash: function(){
		React.render(<SplashPage routing={this} />, containerEl);
	},
	login: function(){
		React.render(<LoginPortal routing={this} />, containerEl);
	},
	signUp: function(){
		React.render(<SignUpPortal routing={this} user={user} />, containerEl);
	},
	profile: function(type){
		React.render(<ProfilePage userType={type} routing={this} />, containerEl);
	}
});

var myRoutes = new App();
Backbone.history.start();