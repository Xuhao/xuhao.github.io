var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var Router = require('react-router');
var {Route, DefaultRoute, NotFoundRoute, RouteHandler} = Router;

var Sidebar = require('./components/sidebar');
var About = require('./components/pages/about');
var Job = require('./components/pages/job');
var Skill = require('./components/pages/skill');
var Works = require('./components/pages/works');
var Contact = require('./components/pages/contact');
var App = React.createClass({
  mixins: [FluxMixin],

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

module.exports = (
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