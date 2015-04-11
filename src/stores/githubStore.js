var Fluxxor = require('fluxxor');
var constants = require('./../constants/githubConstant');

module.exports = Fluxxor.createStore({
  initialize: function() {
    this.loading = false;
    this.error = null;
    this.repos = [];

    this.bindActions(
      constants.LOAD_REPO, this.onLoadRepo,
      constants.LOAD_REPO_SUCCESS, this.onLoadRepoSuccess,
      constants.LOAD_REPO_FAIL, this.onLoadRepoFail
    );
  },

  onLoadRepo: function() {
    this.loading = true;
    this.emit("change");
  },

  onLoadRepoSuccess: function(payload) {
    this.loading = false;
    this.repos = payload;
    this.emit("change");
  },

  onLoadRepoFail: function(payload) {
    this.loading = false;
    this.error = payload;
    this.emit("change");
  }
});