var React = require("react");
var Banner = require("./BannerComponent");
module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<div className="add-top-margin container-fluid">
					<div className="center-block">
						<div className="col-xs-1 col-sm-1 col-md-1"></div>
						<button onClick={this.goToSignUp} className="btn-blue col-xs-4 col-sm-4 col-md-4">SIGN UP</button>
						<div className="col-xs-2 col-sm-2 col-md-2"></div>
						<button onClick={this.goToLogin} className="btn-blue col-xs-4 col-sm-4 col-md-4">LOGIN</button>
						<div className="col-xs-1 col-sm-1 col-md-1"></div>
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