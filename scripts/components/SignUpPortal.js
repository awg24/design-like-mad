var React = require("react");
var $ = require("jquery");
var Banner = require("./BannerComponent");
var bannerEl = document.getElementById("banner");

module.exports = React.createClass({
	getInitialState: function(){
		return {
			errors: {}
		};
	},
	render: function(){
		return (
			<div>
				<div className="text-center container-fluid">
					<div className="text-left center-block style-heading">Sign Up</div>
					<span className="errors">{this.state.errors.server}</span>
						<form onSubmit={this.validateSignUp}>
							<input className="input-style" ref="name" type="text" placeholder="Full Name" />
							<div className="errors">{this.state.errors.name}</div>
							<input className="input-style" ref="email" type="text" placeholder="Email" />
							<div className="errors">{this.state.errors.email}</div>
							<input className="input-style" ref="username" type="text" placeholder="Username" />
							<div className="errors">{this.state.errors.username}</div>
							<input className="input-style" ref="password" type="password" placeholder="Password" />
							<div className="errors">{this.state.errors.password}</div>
							<input className="input-style" ref="confirmPassword" type="password" placeholder="Confirm Password" />
							<div className="errors">{this.state.errors.confirm}</div>
							<div className="center-block text-left sizing">
								<input id="radio1" name="user-type" value="applicant" type="radio"/><label htmlFor="radio1"><span className="change-label">
								</span></label><span>Applicant</span><br/>
								<input id="radio2" name="user-type" value="non-profit" type="radio"/><label htmlFor="radio2"><span className="change-label">
								</span></label><span>Non-Profit</span><br/>
								<input id="radio3" name="user-type" value="organizer" type="radio"/><label htmlFor="radio3"><span className="change-label">
								</span></label><span>Organizer</span><br/>
							</div>
							<span className="errors">{this.state.errors.userType}</span>
							<button type="submit" className="center-block btn-change btn-blue">SIGN UP</button>
						</form>
						<br/>
						<label>Already a member? <a href="#login">Login here!</a></label>
				</div>
			</div>
		);
	},
	validateSignUp: function(event){
		event.preventDefault();
		var that = this;

		var newUser = this.props.user;

		var newName = this.refs.name.getDOMNode().value;
		var newEmail = this.refs.email.getDOMNode().value;
		var newUsername = this.refs.username.getDOMNode().value;
		var newPassword= this.refs.password.getDOMNode().value;
		var confirmPass = this.refs.confirmPassword.getDOMNode().value;
		var userType = $("input[name=user-type]:checked").val();

		newUser.set("name", newName);
		newUser.set("username", newUsername);
		newUser.set("email", newEmail);
		newUser.set("password", newPassword);
		newUser.set("userType", userType);

		var errors = {};

		if(newUser.isValid()){
			if(confirmPass === newPassword){
				newUser.save(null,
					{
						error: function(data, err){
							switch(err.responseJSON.code){
								case 202:
									errors.username = err.responseJSON.error;
									break;
								case 203:
									errors.email = err.responseJSON.error;;
									break;
							}
							that.setState({errors: errors});
						},
						success: function(data){
							newUser.login({
							    username: newUsername,
							    password: newPassword
							}, {
							    success: function(userModel) {
							        console.log('user was logged in');
							        that.props.routing.navigate("profile/"+userType,{trigger: true});
							    },
							    error: function(userModel, response) {
							        console.log('user was not logged in', response.responseJSON);
							        errors.server = "There was a problem connecting with the server, please try logging in again."
							        that.setState({errors: errors});
							    }
							});
						}
					}
				)
			} else {
				errors.confirm = "Passwords do not match!"
				this.setState({errors: errors});
			}
		} else {
			this.setState({errors: newUser.validationError});
		}
	}
});