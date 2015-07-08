var React = require("react");
var NonProfitModel = require("../models/NonProfitModel");

module.exports = React.createClass({
	getInitialState: function(){
		return {
			errors: {},
			successfullySubmitted: false
		};
	},
	render: function(){
		var successMessage;
		if(this.state.successfullySubmitted){
			successMessage = (
				<span className="success">
					Submitted! 
				</span>
			);
		}
		return (
			<div>
				<br/>
				<form onSubmit={this.saveNonProfitData}>
					<div className="container">
						<div className="col-sm-6">
							<label>Name of Non-Profit</label><br/>
							<input ref="nonProfitName" className="input-fantasy" type="text" placeholder="name"/>
							<br/><span className="errors">{this.state.errors.name}</span><br/>
							<label>Phone number to reach Non-Profit</label><br/>
							<input ref="phone" className="input-fantasy" type="tel" placeholder="555-5555"/>
							<br/><span className="errors">{this.state.errors.phoneNum}</span><br/>
							<label>Site of Non-Profit</label><br/>
							<input ref="nonProfitSite" className="input-fantasy" type="text" placeholder="website (optional)"/>
						</div>
						<div className="col-sm-6">
							<label>What kind of project are you offering?</label><br/>
							<select ref="designerType">
								<option value="">Nothing Selected</option>
								<option value="web">Web</option>
								<option value="paper">Paper</option>
								<option value="a cool one">A Cool One</option>
								<option value="an awesome one">An Awesome One</option>
								<option value="i kinda suck">I kinda suck</option>
							</select><br/><span className="errors">{this.state.errors.designType}</span><br/>
							<label>Enter your mission statement here</label><br/>
							<textarea ref="missionStatement"></textarea><br/><span className="errors">{this.state.errors.missionStatement}</span><br/>
							<label>Enter a description of your project here</label><br/>
							<textarea ref="description"></textarea><br/><span className="errors">{this.state.errors.description}</span>
						</div>
					</div>
					{successMessage}<br/>
					<button className="btn btn-forest-2 forest-mod" type="submit">Submit</button>
				</form>
			</div>
		);
	},
	saveNonProfitData: function(event){
		event.preventDefault();
		var that = this;
		var nonProfitName = this.refs.nonProfitName.getDOMNode().value;
		var email = this.props.user.attributes.email;
		var phone = this.refs.phone.getDOMNode().value;
		var site = this.refs.nonProfitSite.getDOMNode().value
		var designType = this.refs.designerType.getDOMNode().value;
		var missionStatement = this.refs.missionStatement.getDOMNode().value;
		var description = this.refs.description.getDOMNode().value;

		console.log(this.props.user.attributes.objectId);

		var nonProfit = new NonProfitModel({
			name: nonProfitName,
			submittedby: this.props.user.attributes.objectId,
			designType: designType,
			phoneNum: phone,
			email: email,
			missionStatement: missionStatement, 
			description: description,
			site: site
		});

		if(nonProfit.isValid()){
			nonProfit.save(null,{
				success: function(){
					console.log("i worked,yo!");
					that.setState({successfullySubmitted: true});
				}
			});
		} else {
			this.setState({errors: nonProfit.validationError});
		}
	}
});