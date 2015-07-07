var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container-fluid half-height text-center">
					Desgin Like Mad
				</div>
				<div className="text-center container-fluid half-height-2">
				<label className="go-white">Already a member? <a href="#login">Login here!</a></label>
					<form onSubmit={this.goToChoice}>
						<input className="input-fantasy" type="text" placeholder="Name" /><br/><br/>
						<input className="input-fantasy" type="text" placeholder="Email" /><br/><br/>
						<input className="input-fantasy" type="text" placeholder="Username" /><br/><br/>
						<input className="input-fantasy" type="password" placeholder="Password" />
						<br/><br/>
						<input className="input-fantasy" type="text" placeholder="Confirm Password" />
						<br/><br/>
						<label>Applicant</label><input name="user-type" type="radio"/>
						<label>Non-Profit</label><input name="user-type" type="radio"/>
						<label>Organization</label><input name="user-type" type="radio"/>
						<button className="center-block btn-forest-2 btn">Sign Up</button>
					</form>
				</div>
			</div>
		);
	},
	goToChoice: function(event){
		event.preventDefault();
		console.log("i work!");
		this.props.routing.navigate("profile",{trigger: true});
	}
});