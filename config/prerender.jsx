/** @jsx React.DOM */

var React = require("react");
var Application = React.createFactory(require("../app/Application");
var html = require("../app/prerender.html");

module.exports = function(scriptUrl, styleUrl, commonsUrl) {
	var application = React.renderToString(<Application />);
	return html.replace("STYLE_URL", styleUrl).replace("SCRIPT_URL", scriptUrl).replace("COMMONS_URL", commonsUrl).replace("CONTENT", application);
};
