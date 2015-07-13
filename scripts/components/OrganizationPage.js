var React = require("react");
var PDF = require("./PDFViewer");
var UserCollection = require("../collections/UserCollection");
var RelationCollection = require("../collections/RelationCollection");
var userCollection = new UserCollection();
var exisitingRelations = new RelationCollection();
var Relation = require("../models/UserOrganizationRelationModel");
var applicants;
module.exports = React.createClass({
	componentWillMount: function(){
		var that = this;
		userCollection.fetch({
			query: {userType:"applicant"},
			success: function(data){
				that.setState({applicants: data, pdfFile:data.models[0].attributes.portfolioUrl});
			},
			error: function(err){
				console.log(err);
			}
		});
	},
	getInitialState: function(){
		return {
			applicants: null,
			pdfFile: "../../assets/logo.png"
		};
	},
	render: function(){
		var that = this;
		if(this.state.applicants){
			var toShow = this.state.applicants.map(function(models){
				return (
					<div onClick={that.showPDF} key={models.cid}>
						<label className="padding-top">{models.attributes.username}</label>
						<select onChange={that.rate} ref="rating" className="selecting small-width pull-right">
							<option value="">Unrated</option>
							<option value="5">5</option>
							<option value="4">4</option>
							<option value="3">3</option>
							<option value="2">2</option>
							<option value="1">1</option>
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
				<button onClick={this.goToAveraging} className="btn-blue">SUBMIT</button>
			</div>
		);
	},
	showPDF: function(event){
		if(!event.target.type){
			var that = this;
			var userClicked = new UserCollection();
			userClicked.fetch({
				query: {username: event.target.innerHTML},
				success: function(data){
					console.log(data.models[0].attributes.portfolioUrl);
					that.setState({pdfFile: data.models[0].attributes.portfolioUrl});
				}
			});
		}
	},
	goToAveraging: function(){
		this.props.routing.navigate("average", {trigger: true});
	},
	rate: function(event){
		var that = this;
		var applicant = event.target.parentNode.childNodes[0].innerHTML;
		var rating = event.target.value;
		console.log(applicant, "'s rating is",rating);
		var applicantRated = new UserCollection();
		applicantRated.fetch({
			query: {username: applicant},
			success: function(data){
				var hasBeenRated = new RelationCollection();
				var relation = new Relation({
					ApplicantId: data.models[0].id,
					username: applicant,
					OrganizerId: that.props.loggedInUser.id,
					rating: rating
				});
				hasBeenRated.fetch({
					query: {ApplicantId: data.models[0].id, OrganizerId: that.props.loggedInUser.id},
					success:function(data){
						if(data.length !== 0){
							relation.set({objectId: data.at(0).id})
						}
						relation.save();
					}
				});
				
			}
		})
		
	}
});