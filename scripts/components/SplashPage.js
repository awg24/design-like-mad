var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container-fluid half-height text-center">
					Design Like Mad
				</div>
				<div className="container-fluid half-height-2">
					<div className="center-block">
						<div className="col-sm-2"></div>
						<button onClick={this.goToSignUp} className="btn btn-forest btn-change col-sm-3">Sign Up</button>
						<div className="col-sm-2"></div>
						<button onClick={this.goToLogin} className="btn btn-forest col-sm-3">Login</button>
						<div className="col-sm-2"></div>
					</div>
				</div>
			</div>
		);
	}, 
	goToLogin: function(){
		this.props.routing.navigate("login",{trigger: true});
	},
	goToSignUp: function(){
		this.props.routing.navigate("signUp",{trigger: true});
	}
});