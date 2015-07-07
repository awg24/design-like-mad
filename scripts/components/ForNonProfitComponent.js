var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div><br/><br/>
				<form>
					<label>What kind of project are you offering?</label><br/>
					<select>
						<option value="">Nothing Selected</option>
						<option value="1">Web</option>
						<option value="2">Paper</option>
						<option value="3">A Cool One</option>
						<option value="4">An Awesome One</option>
						<option value="5">I kinda suck</option>
					</select><br/><br/>
					<label>Enter your mission statement here</label><br/>
					<textarea></textarea><br/><br/>
					<label>Enter a description of your project here</label><br/>
					<textarea></textarea><br/><br/>
					<button className="btn btn-forest-2 forest-mod" type="submit">Submit</button>
				</form>
			</div>
		);
	}
});