import EventEmitter from 'eventemitter3';
import assign from 'lodash/assign';
import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/GithubConstants';

let repos = {};
let errors = {};
let loading = false;

let GithubStore = assign({}, EventEmitter.prototype, {
  getState() {
    return {
      loading: loading,
      errors: errors,
      repos: repos
    };
  },

  emitChange() {
    return this.emit('change');
  },

  addChangeListener(callback) {
    this.on('change', callback);
  },

  removeChangeListener(callback) {
    this.off('change', callback);
  }
});

GithubStore.dispatchToken = Dispatcher.register((payload) => {
  switch (payload.type) {
    case ActionTypes.LOAD_REPO:
      loading = true;
      GithubStore.emitChange();
      break;
    case ActionTypes.LOAD_REPO_SUCCESS:
      loading = false;
      repos = payload.res.body;
      GithubStore.emitChange();
      break;
    case ActionTypes.LOAD_REPO_FAIL:
      loading = false;
      errors = payload.err;
      GithubStore.emitChange();
      break;
    default:
      // Do nothing
  }
});

export default GithubStore;
