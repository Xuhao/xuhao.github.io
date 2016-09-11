import React, { Component } from 'react';
import i18n from '../../../core/i18n';

class ReactWorks extends Component {
  render() {
    return (
      <div id="react_works">
        <h2>React</h2>
        {i18n.t('translation:::works::react::my homepage')}
        <br />{i18n.t('translation:::works::react::link')}:&nbsp;
        <a href="/" target="_blank">http://rubyfans.com</a>
      </div>
    );
  }
}

export default ReactWorks;
