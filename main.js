var React = require('react');
var Router = require('react-router');
var Fluxxor = require('fluxxor');
var routes = require('./src/routes');

var GithubStore = require('./src/stores/githubStore');
var githubActions = require('./src/actions/githubAction');

var actions = {
  github: githubActions
};
var stores = {
  GithubStore: new GithubStore()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on("dispatch", function(type, payload) {
  if (console && console.log) {
    console.log("[Dispatch]", type, payload);
  }
});

Router.run(routes, function (Handler) {
  React.render(<Handler flux={flux} />, document.body);
});