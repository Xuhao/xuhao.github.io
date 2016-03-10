import React, { Component } from 'react';
import { Link } from 'react-router';

class Sidebar extends Component {
  render() {
    return (
      <div id="menu" className="shadow">
        <ul>
          {this.props.linksMap.map((linkInfo, i) => {
            return (
              <li key={i}>
                <Link to={`/${linkInfo[0]}`} activeClassName="active">{linkInfo[1]}</Link>
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
    ['about', '关于'],
    ['job', '工作'],
    ['skill', '技能'],
    ['works', '作品'],
    ['contact', '联系']
  ]
};

export default Sidebar;
