var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Sidebar = require('./src/components/sidebar');
var About = require('./src/components/pages/about');
var Job = require('./src/components/pages/job');
var Skill = require('./src/components/pages/skill');
var Works = require('./src/components/pages/works');
var Contact = require('./src/components/pages/contact');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Sidebar />
        <div id="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="job" handler={Job}/>
    <Route name="skill" handler={Skill}/>
    <Route name="works" handler={Works}/>
    <Route name="contact" handler={Contact}/>
    <DefaultRoute handler={About}/>
    <NotFoundRoute handler={About}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});