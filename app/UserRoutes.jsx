var React = require('react'),
	Quickadd = require('./Quickadd'),
	TrackingRoute = require('./TrackingRoute');


var UserRoutes = React.createClass({

	getDefaultProps : function() {
		return {
			routes: []
		}
	},
	getInitialState: function() {
		return {
			routes: this.props.routes
		}
	},
	getUserRoutes: function() {
		return this.state.routes.map(function() {
			return (
				<TrackingRoute onRemove={this.handleRemove} />
			);
		})
	},
	handleAdd: function() {
		this.refs.quickadd.clearValue();
	},
	handleRemove: function() {

	},
	render: function() {
		return (
			<div>
				<Quickadd onAdd={this.handleAdd} ref="quickadd"/>
				<h2>Tracking Routes</h2>
				{this.getUserRoutes()}
			</div>
		);
	}
});

module.exports = UserRoutes;