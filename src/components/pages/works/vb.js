import React, { Component } from 'react';
import i18n from '../../../core/i18n';

class VB extends Component {
  render() {
    return (
      <div id="vb_works">
        <h2>Visual Basic 6.0</h2>
        {i18n.t('translation:::works::vb::kuaihou')}
        <br />{i18n.t('translation:::works::vb::link')}:&nbsp;
        <a href="kuaihou/" target="_blank">http://rubyfans.com/kuaihou</a>
      </div>
    );
  }
}

export default VB;
