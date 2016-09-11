import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import i18n from '../../core/i18n';

class Sidebar extends Component {
  render() {
    return (
      <div id="menu" className="shadow">
        <ul>
          <li key="about">
            <IndexLink to="/" activeClassName="active">{i18n.t('translation:::sidebar::about')}</IndexLink>
          </li>
          {this.props.linksMap.map((linkInfo) => {
            return (
              <li key={linkInfo.path}>
                <Link to={linkInfo.path} activeClassName="active">{i18n.t(linkInfo.text)}</Link>
              </li>
            );
          })}
        </ul>
        <div className="icp-link"><a href="http://www.miitbeian.gov.cn">豫ICP备11005941号-4</a></div>
      </div>
    );
  }
}

Sidebar.defaultProps = {
  linksMap: [
    {text: 'translation:::sidebar::job', path: '/job'},
    {text: 'translation:::sidebar::skill', path: '/skill'},
    {text: 'translation:::sidebar::works', path: '/works'},
    {text: 'translation:::sidebar::contact', path: '/contact'}
  ]
};

export default Sidebar;
