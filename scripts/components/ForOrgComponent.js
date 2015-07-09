var React = require("react");
var PDF = require("./PDFViewer");
var visible = [];

module.exports = React.createClass({
	componentWillMount: function(){
		console.log(this.props.user.attributes.userType);
		if(this.props.user.attributes.userType !== "organizer"){
			visible = [];
			visible.push("You do not have access to this part!");
		} else {
			visible = [];
			visible.push(<PDF key="2" url="/assets/portfolio_samples/test2.pdf"/>);
		}
		console.log("contents of visible", visible);
	},
	render: function(){
		console.log("render is being called");
		return (
			<div>
				{visible}
			</div>
		);
	}
});