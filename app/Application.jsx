var React = require("react"),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

require('./sass/styles.scss');

var Application = React.createClass({
	render: function() {
		return (
            <div>
                <RouteHandler/>
            </div>
      );
	}
});

module.exports = Application;