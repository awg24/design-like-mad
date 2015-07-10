var React = require("react");
var AppBanner = require("./AppBanner");
var designer;
module.exports = React.createClass({
	getInitialState: function(){
		designer = (
					<div>
						<div className="div-width">
							If you are a designer, please submit a pdf with a 
							maximum of 5 examples of your work.
							Students can user works from school projects
						</div>
						<div>
							<button className="btn-blue bottom-margin">UPLOAD WORK SAMPLES</button>
						</div>
					</div>
					);
		return {
			appType: designer
		};
	},
	render: function(){
		return(
			<div className="text-center set-gray">
				<div className="div-bottom-margin set-div-width">
					Designer/Developer Application
				</div>
				<input className="input-style" type="text" placeholder="Name"/><br/>
				<input className="input-style" type="text" placeholder="Email"/><br/>
				<input className="input-style" type="text" placeholder="Phone Number"/><br/>
				<select ref="applicantType" onChange={this.changeApp} className="input-style">
					<option value="" >Select Profession</option>
					<option>Graphic Designer</option>
					<option>Web Designer</option>
					<option>Developer</option>
					<option>Architect</option>
					<option>Interior Designer</option>
				</select>
				<div className="div-top-bottom">
				<input id="radio1" name="user-type" value="applicant" type="radio"/><label htmlFor="radio1"><span className="change-label">
				</span></label><span>Student</span>
				<input id="radio2" name="user-type" value="non-profit" type="radio"/><label htmlFor="radio2"><span className="change-label">
				</span></label><span>Professional</span>
				</div>
				{this.state.appType}
				<div>
					<textarea className="input-style add-height"></textarea>
				</div>
				<div>
					<select className="input-style">
						<option>small</option>
						<option>medium</option>
						<option>large</option>
						<option>x-large</option>
						<option>xx-large Designer</option>
					</select>
				</div>
				<div>
					<textarea className="input-style add-height"></textarea>
				</div>
				<div>
					<button className="btn-blue">SUBMIT APPLICATION</button>
				</div>
			</div>
		);
	},
	changeApp: function(){
		var type = this.refs.applicantType.getDOMNode().value;
		var developer = (
						<div>
							<div className="div-width">
								Developers, please submit at least 1 link that demostrates your work
							</div>
							<div>
								<input className="input-style" type="text" placeholder="Link 1"/><br/>
								<input className="input-style" type="text" placeholder="Link 2"/><br/>
								<input className="input-style" type="text" placeholder="Link 3"/><br/>
							</div>
						</div>
						);
		if(type === "Developer"){
			this.setState({appType: developer});
		} else {
			this.setState({appType: designer});
		}
	}
});