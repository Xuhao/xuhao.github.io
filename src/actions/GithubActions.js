import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/GithubConstants';
import request from "superagent";

export default {
  loadRepos(username) {
    Dispatcher.dispatch({
      type: ActionTypes.LOAD_REPO
    });

    request.get(`https://api.github.com/users/${username}/repos`)
      .accept("json")
      .end((err, res) => {
        if (err) {
          Dispatcher.dispatch({
            type: ActionTypes.LOAD_REPO_FAIL,
            err: err
          });
        } else {
          Dispatcher.dispatch({
            type: ActionTypes.LOAD_REPO_SUCCESS,
            res: res
          });
        }
      });
  }
};

