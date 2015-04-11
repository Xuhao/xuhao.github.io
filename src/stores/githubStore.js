var Fluxxor = require('fluxxor');

module.exports = Fluxxor.createStore({
  initialize: function() {
    this.loading = false;
    this.error = null;
    this.repos = [];

    this.bindActions(
      constants.LOAD_REPO, this.onLoadRepo,
      constants.LOAD_REPO_SUCCESS, this.onLoadRepoSuccess
    );
  },

  onLoadRepo: function() {
    this.loading = true;
    this.emit("change");
  },

  onLoadRepoSuccess: function(){
    this.loading = false;
    this.emit("change");
  }
});