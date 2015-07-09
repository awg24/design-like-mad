var React = require("react");
var ForApplicant = require("./ForApplicantComponent");
var ForNonProfit = require("./ForNonProfitComponent");
var ForOrg = require("./ForOrgComponent");
var profileEl = document.getElementById("profile-things");

module.exports = React.createClass({
	componentWillMount: function(){
		var that = this;
		this.props.loggedInUser.on("add", function(){
			console.log("model was changed")
			//that.forceUpdate();
		});
	},
	getInitialState: function(){
		var that = this;
		this.props.loggedInUser.me({
			success: function(userModel) {
				console.log('current user session is active');
				that.forceUpdate();
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
			case "organizer":
				shouldDisplay = <ForOrg user={this.props.loggedInUser}/>;
				break;
		}
		return {
			displayPage: shouldDisplay
		};
	},
	render: function(){
		return (
			<div>
				<div className="text-center container-fluid">
				<ul className="nav nav-tabs">
					<li className="med-font" role="presentation"><a onClick={this.showApplicant}>Applicants</a></li>
					<li className="med-font" role="presentation"><a onClick={this.showNonProfit}>Non-Profits</a></li>
					<li className="med-font" role="presentation"><a onClick={this.showOrg}>Organizers</a></li>
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
	}
});