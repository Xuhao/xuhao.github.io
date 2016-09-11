import React, { Component } from 'react';
import GithubStore from '../../../stores/GithubStore';
import GithubActions from '../../../actions/GithubActions';
import ajaxLoader from '../../../assets/images/ajax_loader.gif';
import i18n from '../../../core/i18n';

class Github extends Component {
  constructor() {
    super();

    this.state = {
      repos: []
    };

    this.onChange = () => {
      this.setState(GithubStore.getState());
    };
  }

  componentDidMount() {
    GithubStore.addChangeListener(this.onChange);
    if (this.state.repos.length === 0) {
      GithubActions.loadRepos('Xuhao');
    }
  }

  componentWillUnmount() {
    GithubStore.removeChangeListener(this.onChange);
  }

  render() {
    let repoList;
    if (this.state.loading) {
      repoList = (
        <li className="loader">
          <img src={ajaxLoader} alt="Loading..." />Loading...
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
        <h4>{i18n.t('translation:::works::github::github projects')}</h4>
        <ul id="github">
          {repoList}
        </ul>
      </div>
    );
  }
}

export default Github;
