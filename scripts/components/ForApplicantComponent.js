var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div><br/><br/>
				<form>
					<label>What kind of designer are you?</label><br/>
					<select>
						<option value="">Nothing Selected</option>
						<option value="1">Web</option>
						<option value="2">Paper</option>
						<option value="3">A Cool One</option>
						<option value="4">An Awesome One</option>
						<option value="5">I kinda suck</option>
					</select><br/><br/>
					<button className="btn-blue btn-change">Upload Your Portfolio</button><br/><br/>
					<label>Select your skill level</label>
					<div className="text-left set-width">
						<input id="radio1" name="user-type" value="applicant" type="radio"/><label htmlFor="radio1"><span>
						</span></label><span className="change-label">Professional</span><br/>
						<input id="radio2" name="user-type" value="non-profit" type="radio"/><label htmlFor="radio2"><span>
						</span></label><span className="change-label">Student</span><br/>
					</div><br/>
					<button className="btn-blue btn-change" type="submit">Submit</button>
				</form>
			</div>
		);
	}
});