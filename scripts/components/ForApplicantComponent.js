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
					<button className="btn btn-forest-2">Upload Your Portfolio</button><br/><br/>
					<label>Select your skill level</label>
					<div className="text-left set-width">
						<input type="radio" name="skill" /> <label>
						Professional</label><br/>
						<input type="radio" name="skill" /> <label>
						Student</label>
					</div><br/>
					<button className="btn btn-forest-2 forest-mod" type="submit">Submit</button>
				</form>
			</div>
		);
	}
});