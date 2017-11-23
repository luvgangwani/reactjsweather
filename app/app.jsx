var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory} = require('react-router'); // syntax (ES6 restructuring syntax) equivalent to var Route = require('react-router').Route

var Main = require("Main");

ReactDOM.render(

	<Router history={hashHistory}>
		<Route path="/" component={Main}>
		</Route>
	</Router>,
	document.getElementById("app")

);