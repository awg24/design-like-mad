var React = require("react");
var ForApplicant = require("./ForApplicantComponent");
var ForNonProfit = require("./ForNonProfitComponent");
var ForOrg = require("./ForOrgComponent");
var profileEl = document.getElementById("profile-things");

module.exports = React.createClass({
	getInitialState: function(){
		var shouldDisplay;
		switch(this.props.userType){
			case "non-profit":
				shouldDisplay = <ForNonProfit/>;
				break;
			case "applicant":
				shouldDisplay = <ForApplicant/>;
				break;
			case "organization":
				shouldDisplay = <ForOrg/>;
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
				</ul>
				<section id="profile-things">{this.state.displayPage}</section>
				</div>
			</div>
		);
	},
	showApplicant: function(){
		this.setState({displayPage: <ForApplicant/>});
	},
	showNonProfit: function(){
		this.setState({displayPage: <ForNonProfit/>});
	},
	showOrg: function(){
		this.setState({displayPage: <ForOrg/>});
	}
});