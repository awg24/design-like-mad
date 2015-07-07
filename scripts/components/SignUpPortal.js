var React = require("react");
var $ = require("jquery");

module.exports = React.createClass({
	getInitialState: function(){
		return {
			errors: {}
		};
	},
	render: function(){
		return (
			<div>
				<div className="container-fluid half-height text-center">
					Design Like Mad
				</div>
				<div className="text-center container-fluid half-height-2">
				<span className="errors">{this.state.errors.server}</span>
				<label className="go-white">Already a member? <a href="#login">Login here!</a></label>
					<form onSubmit={this.goToChoice}>
						<input ref="name" className="input-fantasy" type="text" placeholder="Name" /><br/>
						<span className="errors">{this.state.errors.name}</span><br/>
						<input ref="email" className="input-fantasy" type="text" placeholder="Email" /><br/>
						<span className="errors">{this.state.errors.email}</span><br/>
						<input ref="username" className="input-fantasy" type="text" placeholder="Username" /><br/>
						<span className="errors">{this.state.errors.username}</span><br/>
						<input ref="password" className="input-fantasy" type="password" placeholder="Password" /><br/>
						<span className="errors">{this.state.errors.password}</span><br/>
						<input ref="confirmPassword" className="input-fantasy" type="password" placeholder="Confirm Password" /><br/>
						<span className="errors">{this.state.errors.confirm}</span>
						<br/>
						<label>Applicant</label><input name="user-type" value="applicant" type="radio"/>
						<label>Non-Profit</label><input name="user-type" value="non-profit" type="radio"/>
						<label>Organization</label><input name="user-type" value="organization" type="radio"/><br/>
						<span className="errors">{this.state.errors.userType}</span>
						<button type="submit" className="center-block btn-forest-2 btn">Sign Up</button>
					</form>
				</div>
			</div>
		);
	},
	goToChoice: function(event){
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