var React = require("react");
var PDF = require("./PDFViewer");
var UserCollection = require("../collections/UserCollection");
var userCollection = new UserCollection();
var applicants;
module.exports = React.createClass({
	componentWillMount: function(){
		var that = this;
		userCollection.fetch({
			query: {userType:"applicant"},
			success: function(data){
				that.setState({applicants: data});
			},
			error: function(err){
				console.log(err);
			}
		});
	},
	getInitialState: function(){
		return {
			applicants: null,
			pdfFile: "Click on a applicant to see their portfolio!"
		};
	},
	render: function(){
		console.log(this.state.applicants);
		var that = this;
		if(this.state.applicants){
			var toShow = this.state.applicants.map(function(models){
				console.log(models);
				return (
					<div onClick={that.showPDF} key={models.cid}>
						<label className="padding-top">{models.attributes.username}</label>
						<select className="small-width pull-right">
							<option>Unrated</option>
							<option>5</option>
							<option>4</option>
							<option>3</option>
							<option>2</option>
							<option>1</option>
						</select>
					</div>
				);
			});
		}
		return (
			<div className="give-top-margin container">
				<div className="text-left give-border div-width col-sm-4">
					<h4>Applicants</h4><br/><br/>
					<div className="bottom-border">
						<label>Name</label>
						<label className="pull-right">Rating</label>
					</div>
					{toShow}
				</div>
				<div className="col-sm-2"></div>
				<div className="col-sm-6">
					<PDF key="2" url={this.state.pdfFile}/>
				</div>
				<button className="btn-blue">SUBMIT</button>
			</div>
		);
	}, 
	showPDF: function(event){
		console.log(event.target.innerHTML, ":clicked this");
		var that = this;
		var userClicked = new UserCollection();
		userClicked.fetch({
			query: {username: event.target.innerHTML},
			success: function(data){
				console.log(data.models[0].attributes.portfolioUrl);
				that.setState({pdfFile: data.models[0].attributes.portfolioUrl});
			}
		})
	}
});