var React = require("react");
var ForApplicant = require("./ForApplicantComponent");
var ForNonProfit = require("./ForNonProfitComponent");
var ForOrg = require("./ForOrgComponent");
var profileEl = document.getElementById("profile-things");

module.exports = React.createClass({
	getInitialState: function(){
		var that = this;
		this.props.loggedInUser.me({
			success: function(userModel) {
				console.log('current user session is active');
			},
			error: function(userModel, response) {
				that.props.routing.navigate("", {trigger:true});
			}
		});
		var shouldDisplay;
		switch(this.props.userType){
			case "non-profit":
				shouldDisplay = <ForNonProfit user={this.props.loggedInUser}/>;
				break;
			case "applicant":
				shouldDisplay = <ForApplicant user={this.props.loggedInUser}/>;
				break;
			case "organization":
				shouldDisplay = <ForOrg user={this.props.loggedInUser}/>;
				break;
		}
		return {
			displayPage: shouldDisplay
		};
	},
	render: function(){
		console.log(this.props.loggedInUser);
		return (
			<div>
				<div className="nav-bar text-center">Design Like Mad</div>
				<div className="text-center container-fluid half-height-2-mod">
				<ul className="nav nav-tabs">
					<li className="go-white med-font" role="presentation"><a onClick={this.showApplicant}>Applicants</a></li>
					<li className="go-white med-font" role="presentation"><a onClick={this.showNonProfit}>Non-Profits</a></li>
					<li className="go-white med-font" role="presentation"><a onClick={this.showOrg}>Organizations</a></li>
					<button onClick={this.logoutUser} className="pull-right btn btn-forest-2 forest-mod">Logout</button>
				</ul>
				<section id="profile-things">
				{this.state.displayPage}</section>
				</div>
			</div>
		);
	},
	showApplicant: function(){
		this.setState({displayPage: <ForApplicant user={this.props.loggedInUser}/>});
	},
	showNonProfit: function(){
		this.setState({displayPage: <ForNonProfit user={this.props.loggedInUser}/>});
	},
	showOrg: function(){
		this.setState({displayPage: <ForOrg user={this.props.loggedInUser}/>});
	},
	logoutUser: function(){
		var that = this;
		this.props.loggedInUser.logout({
			success: function(userModel) {
				console.log('user was logged out');
				that.props.routing.navigate("", {trigger:true});
			},
			error: function(userModel, response) {
				console.log('problem logging out the user', response.responseJSON);
			}
		});
	}
});