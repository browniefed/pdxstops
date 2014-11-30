var React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    App = require('./Application'),
    UserRoutes = require('./UserRoutes');
    
var routes = (
    <Route name="app" path="/" handler={App}>
    	<Route name="userroutes" path="/userroutes" handler={UserRoutes} />
    	<DefaultRoute handler={UserRoutes} />
    </Route>
);



module.exports = routes;