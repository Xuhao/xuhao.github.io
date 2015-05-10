"use strict";
import Fluxxor from "fluxxor";
import constants from "./../constants/githubConstant";

const GithubStore = Fluxxor.createStore({
  initialize() {
    this.loading = false;
    this.error = null;
    this.repos = [];

    this.bindActions(
      constants.LOAD_REPO, this.onLoadRepo,
      constants.LOAD_REPO_SUCCESS, this.onLoadRepoSuccess,
      constants.LOAD_REPO_FAIL, this.onLoadRepoFail
    );
  },

  onLoadRepo() {
    this.loading = true;
    this.emit("change");
  },

  onLoadRepoSuccess(payload) {
    this.loading = false;
    this.repos = payload;
    this.emit("change");
  },

  onLoadRepoFail(payload) {
    this.loading = false;
    this.error = payload;
    this.emit("change");
  }
});

export default GithubStore;
