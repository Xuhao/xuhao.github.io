"use strict";
import React from "react";
import Fluxxor from "fluxxor";
const FluxMixin = Fluxxor.FluxMixin(React);
const StoreWatchMixin = Fluxxor.StoreWatchMixin;

const Github = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin("GithubStore")],

  getStateFromFlux() {
    let store = this.getFlux().store("GithubStore");
    return {
      loading: store.loading,
      error: store.error,
      repos: store.repos
    };
  },

  render () {
    let repoList;
    if (this.state.loading) {
      repoList = (
        <li className="loader">
          <img src="assets/images/ajax_loader.gif" />Loading...
        </li>
      );
    } else if (this.state.error) {
      repoList = (<li className="loader">{this.state.error}</li>);
    } else {
      repoList = this.state.repos.map((repo, i) => {
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

  componentDidMount() {
    if (this.state.repos.length === 0) {
      this.getFlux().actions.github.loadRepos("Xuhao");
    }
  }
});

export default Github;
