var React = require('react');

var Navigate = require('Navigate');

var Main = React.createClass({

	render: function(){

		return (

			<div>
				<Navigate/>
				<h1>Main component</h1>
			</div>

		);
	}
});

module.exports = Main;