var React = require("react");
var PDF = require("./PDFViewer");

module.exports = React.createClass({
	render: function(){
		return (
			<div className="give-top-margin bottom-border container">
				<div className="text-left give-border div-width col-sm-4">
					<h4>Applicants</h4><br/><br/>
					<div className="bottom-border">
						<label>Name</label>
						<label className="pull-right">Rating</label>
					</div>
					<div>
						<label className="padding-top">JohnDoe</label>
						<select className="small-width pull-right">
							<option>Unrated</option>
							<option>5</option>
							<option>4</option>
							<option>3</option>
							<option>2</option>
							<option>1</option>
						</select>
					</div>
					<div>
						<label className="padding-top">JohnDoe</label>
						<select className="small-width pull-right">
							<option>Unrated</option>
							<option>5</option>
							<option>4</option>
							<option>3</option>
							<option>2</option>
							<option>1</option>
						</select>
					</div>
					<div>
						<label className="padding-top">JohnDoe</label>
						<select className="small-width pull-right">
							<option>Unrated</option>
							<option>5</option>
							<option>4</option>
							<option>3</option>
							<option>2</option>
							<option>1</option>
						</select>
					</div>
					<div>
						<label className="padding-top">JohnDoe</label>
						<select className="small-width pull-right">
							<option>Unrated</option>
							<option>5</option>
							<option>4</option>
							<option>3</option>
							<option>2</option>
							<option>1</option>
						</select>
					</div>
				</div>
				<div className="col-sm-2"></div>
				<div className="col-sm-6">
					<PDF key="2" url="/assets/portfolio_samples/test2.pdf"/>
				</div>
			</div>
		);
	}
});