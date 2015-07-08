var React = require("react");

module.exports = React.createClass({
	getInitialState: function(){
		return {
			errors: {}
		};
	},
	render: function(){
		return (
			<div>
				<div className="container-fluid half-height text-center">Design Like Mad</div>
				<div className="text-center container-fluid half-height-2">
					<label className="go-white">Not a member? <a href="#signUp">Sign up here!</a></label>
					<div className="take-margin container">
						<div className="col-sm-3"></div>
						<div className="text-center col-sm-6"><br/><br/>
							<form onSubmit={this.validateUser}>
								<input className="input-fantasy" ref="username" type="text" placeholder="Username" /><br/><br/>
								<input className="input-fantasy" ref="password" type="password" placeholder="Password" />
								<br/><br/>
								<button className="center-block btn-forest-2 btn">Login</button>
							</form>
							<span className="errors">{this.state.errors.invalid}</span>
						</div>
						<div className="col-sm-3"></div>
					</div>
				</div>
			</div>
		);
	},
	validateUser: function(event){
		event.preventDefault();
		var that = this;
		var errors = {};
		this.props.loggingIn.login({
				username: this.refs.username.getDOMNode().value,
				password: this.refs.password.getDOMNode().value
			},{
				success:function(data){
					console.log(data);
					that.props.routing.navigate("profile/"+data.attributes.userType, {trigger: true});
				},
				error: function(data, res){
					console.log(res);
					errors.invalid = "Username or password are incorrect";
					that.setState({errors: errors});
				}
			}
		);
	}
});