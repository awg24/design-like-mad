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
						<input ref="confirmPassword" className="input-fantasy" type="password" placeholder="Confirm Password" />
						<br/><br/>
						<label>Applicant</label><input name="user-type" value="applicant" type="radio"/>
						<label>Non-Profit</label><input name="user-type" value="non-profit" type="radio"/>
						<label>Organization</label><input name="user-type" value="organization" type="radio"/><br/>
						<span className="errors">{this.state.errors.userType}</span><br/>
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

		if(newUser.isValid()){
			newUser.save(null,
				{
					error: function(data){
						console.log(data);

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
						    }
						});
					}
				}
			)
		} else {
			console.log(newUser.validationError);
			this.setState({errors: newUser.validationError});
		}
	}
});

























