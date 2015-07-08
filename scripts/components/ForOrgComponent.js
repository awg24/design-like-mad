var React = require("react");
var PDF = require("./PDFViewer");

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				Im for org!
				<PDF url="/assets/portfolio_samples/test2.pdf"/>
			</div>
		);
	}
});