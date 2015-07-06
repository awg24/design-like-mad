var React = require("react");
var Backbone = require("backbone");

var SplashPage = require("./components/SplashPage");
var LoginPortal = require("./components/LoginPortal");
var SignUpPortal = require("./components/SignUpPortal");

var containerEl = document.getElementById("container");

var App = Backbone.Router.extend({
	routes: {
		"": "splash",
		"login": "login",
		"signUp": "signUp"
	},
	splash: function(){
		React.render(<SplashPage routing={this} />, containerEl);
	},
	login: function(){
		React.render(<LoginPortal routing={this} />, containerEl);
	},
	signUp: function(){
		React.render(<SignUpPortal routing={this} />, containerEl);
	}
});

var myRoutes = new App();
Backbone.history.start();