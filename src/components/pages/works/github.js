"use strict";
var React = require("react");
var Fluxxor = require("fluxxor");
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("GithubStore")],

  getStateFromFlux: function() {
    var store = this.getFlux().store("GithubStore");
    return {
      loading: store.loading,
      error: store.error,
      repos: store.repos
    };
  },

  render: function () {
    var repoList;
    if (this.state.loading) {
      repoList = (
        <li className="loader">
          <img src="assets/images/ajax_loader.gif" />Loading...
        </li>
      );
    } else if (this.state.error) {
      repoList = (<li className="loader">{this.state.error}</li>);
    } else {
      repoList = this.state.repos.map(function(repo, i){
        return (
          <li key={i}>
            <a href={repo.html_url} target="_blank">{repo.name}</a>
            ({repo.description}, Base on {repo.language})
          </li>
        );
      });
    }
    return (
      <div id="github_works">
        <h4>Github上的项目</h4>
        <ul id="github">
          {repoList}
        </ul>
      </div>
    );
  },

  componentDidMount: function() {
    if (this.state.repos.length === 0) {
      this.getFlux().actions.github.loadRepos("Xuhao");
    }
  }
});
