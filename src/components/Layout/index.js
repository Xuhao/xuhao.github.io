import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Sidebar from './Sidebar';
import LanguagePicker from './LanguagePicker';
import i18n from '../../core/i18n';

class Layout extends Component {
  constructor() {
    super();

    this.handleLngSwitch = lng => {
      if (i18n.language !== lng) {
        i18n.changeLanguage(lng);
        browserHistory.push(window.location.pathname);
      }
    };
  }

  render() {
    return (
      <div>
        <Sidebar location={this.props.location} />
        <div id="content">
          <LanguagePicker lng={i18n.language} onSwitch={this.handleLngSwitch} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
