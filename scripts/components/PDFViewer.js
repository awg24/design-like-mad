var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<canvas ref="pdfView"/>
		);
	},
	componentDidMount: function(){
		console.log(PDFJS);
		var that = this;
		PDFJS.getDocument(this.props.url).then(function getPdfHelloWorld(pdf) {
			//
			// Fetch the first page
			//
			pdf.getPage(1).then(function getPageHelloWorld(page) {
			  var scale = 1.5;
			  var viewport = page.getViewport(scale);

			  //
			  // Prepare canvas using PDF page dimensions
			  //
			  var canvas = that.refs.pdfView.getDOMNode();
			  var context = canvas.getContext('2d');
			  canvas.height = viewport.height;
			  canvas.width = viewport.width;

			  //
			  // Render PDF page into canvas context
			  //
			  var renderContext = {
				canvasContext: context,
				viewport: viewport
			  };
			  page.render(renderContext);
			});
		});
	}
});