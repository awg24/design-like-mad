var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container-fluid half-height text-center">Design Like Mad</div>
				<div className="text-center container-fluid half-height-2">
					<label className="go-white">Not a member? <a href="#signUp">Sign up here!</a></label>
					<div className="take-margin container">
						<div className="col-sm-3"></div>
						<div className="text-center col-sm-6"><br/><br/>
							<form onSubmit={this.goToChoice}>
								<input className="input-fantasy" type="text" placeholder="Username" /><br/><br/>
								<input className="input-fantasy" type="password" placeholder="Password" />
								<br/><br/>
								<button className="center-block btn-forest-2 btn">Login</button>
							</form>
						</div>
						<div className="col-sm-3"></div>
					</div>
				</div>
			</div>
		);
	},
	goToChoice: function(event){
		event.preventDefault();
		this.props.routing.navigate("profile",{trigger: true});
	}
});