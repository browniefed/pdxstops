var React = require('react');

var Quickadd = React.createClass({
	getInitialState: function() {
		return {
			value: ''
		};
	},
	handleChange: function(e) {
		this.setState({
			value: e.target.value
		});
	},
	clearValue: function() {
		this.setState({
			value: ''
		});
	},
	render: function() {
		return (
			<div>
				<input onChange={this.handleChange} value={this.state.value} />
				<button onClick={this.props.onAdd}>Add</button>
			</div>
		);
	}
});

module.exports = Quickadd;