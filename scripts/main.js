var React = require("react");
var Backbone = require("backbone");

var SplashPage = require("./components/SplashPage");
var LoginPortal = require("./components/LoginPortal");
var SignUpPortal = require("./components/SignUpPortal");
var ProfilePage = require("./components/ProfilePage");
var ForApplicant = require("./components/ForApplicantComponent");
var ForNonProfit = require("./components/ForNonProfitComponent");
var ForOrg = require("./components/ForOrgComponent");
var Banner = require("./components/BannerComponent");

var containerEl = document.getElementById("container");
var bannerEl = document.getElementById("banner");
var UserModel = require("./models/UserModel");
var user = new UserModel(); 

var App = Backbone.Router.extend({
	routes: {
		"": "signUp",
		"login": "login",
		"signUp": "signUp",
		"profile/:type":"profile"
	},
	splash: function(){
		React.render(<SplashPage routing={this} />, containerEl);
	},
	login: function(){
		React.render(<LoginPortal loggingIn={user} routing={this} />, containerEl);
	},
	signUp: function(){
		React.render(<SignUpPortal routing={this} user={user} />, containerEl);
	},
	profile: function(type){
		var that = this;
		user.me({
			error: function(user, res){
				console.log(res);
				that.navigate("", {trigger: true});
			},
			success: function(model){
				React.render(<ProfilePage userType={type} loggedInUser={user} routing={that} />, containerEl);
			}
		})
		
	}
});

var myRoutes = new App();

React.render(<Banner loggedInUser={user} routing={myRoutes} />, bannerEl);
Backbone.history.start();
