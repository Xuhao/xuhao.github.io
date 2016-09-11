import React, { Component } from 'react';
import i18n from '../../../core/i18n';

class Ruby extends Component {
  render() {
    return (
      <div id="ruby_works">
        <h2>Ruby</h2>
        {i18n.t('translation:::works::ruby::yihub')}
        <br />{i18n.t('translation:::works::ruby::link')}:&nbsp;
        <a href="http://www.yihub.com" target="_blank">www.yihub.com</a>
        <br />
        <br />{i18n.t('translation:::works::ruby::ruby doc')}
        <br />{i18n.t('translation:::works::ruby::link')}:&nbsp;
        <a href="http://doc.rubyfans.com" target="_blank">doc.rubyfans.com</a>
      </div>
    );
  }
}

export default Ruby;
