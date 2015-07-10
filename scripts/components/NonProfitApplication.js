var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div className="text-center">
				<div className="div-bottom-margin set-div-width">
					Non Profit Application
				</div>
				<div>
					<input className="input-style" type="text" placeholder="Organization Name" />
				</div>
				<div>
					<input className="input-style" type="text" placeholder="Website (if any)" />
				</div>
				<div>
					<input className="input-style" type="text" placeholder="Contact Person" />
				</div>
				<div>
					<input className="input-style" type="text" placeholder="Contact Email" />
				</div>
				<div>
					<input className="input-style" type="text" placeholder="Contact Phone Number" />
				</div>
				<div>
					<textarea className="input-style add-height" placeholder="Mission Statement"></textarea>
				</div>
				<div>
					<textarea className="input-style add-height" placeholder="Addition Comments"></textarea>
				</div>
				<div className="div-width">
					Please select a package of deliverables that your organization needs
				</div>
				<div className="text-left give-border div-width">
					<div className="bottom-border">
						<input id="radio1" name="user-type" value="event collateral" type="radio"/><label htmlFor="radio1"><span className="change-label">
						</span></label><span>Event Collateral</span>
					</div>
					<div className="side-padding">
						-logo<br/>
						-Invitation<br/>
						-Event Poster/Flyer<br/>
						-Swag such as T-shirts (time premitting)
					</div>
				</div><br/>
				<div className="text-left give-border div-width">
					<div className="bottom-border">
						<input id="radio2" name="user-type" value="web" type="radio"/><label htmlFor="radio2"><span className="change-label">
						</span></label><span>Web</span><br/>
					</div>
					<div className="side-padding">
						-logo<br/>
						-Invitation<br/>
						-Event Poster/Flyer<br/>
						-Swag such as T-shirts (time premitting)
					</div>
				</div><br/>
				<div className="text-left give-border div-width">
					<div className="bottom-border">
						<input id="radio3" name="user-type" value="interior design" type="radio"/><label htmlFor="radio3"><span className="change-label">
						</span></label><span>Interior Design</span><br/>
					</div>
					<div className="side-padding">
						-logo<br/>
						-Invitation<br/>
						-Event Poster/Flyer<br/>
						-Swag such as T-shirts (time premitting)
					</div>
				</div><br/>
				<div className="text-left give-border div-width">
					<div className="bottom-border">
						<input id="radio4" name="user-type" value="branding" type="radio"/><label htmlFor="radio4"><span className="change-label">
						</span></label><span>Full Branding or Branding Redesign</span><br/>
						</div>
					<div className="side-padding">
						-logo
						-Invitation
						-Event Poster/Flyer
						-Swag such as T-shirts (time premitting)
					</div>
				</div><br/>
				<div className="text-left give-border div-width">
					<div className="bottom-border">
						<input id="radio5" name="user-type" value="architecture" type="radio"/><label htmlFor="radio5"><span className="change-label">
						</span></label><span>Architecture</span><br/>
					</div>
					<div className="side-padding">
						-logo
						-Invitation
						-Event Poster/Flyer
						-Swag such as T-shirts (time premitting)
					</div>
				</div><br/>
				<div>
					<button className="btn-blue">SUBMIT APPLICATION</button>
				</div>
				<br/>
			</div>
		);
	}
});