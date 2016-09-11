import React, { Component } from 'react';
import i18n from '../../core/i18n';

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1>{i18n.t('translation:::contact::contact me')}</h1>
        <span className="info">QQ：</span>4327239
        <br />
        <span className="info">Skype：</span>zndown
        <br />
        <span className="info">Email：</span>xuhao@rubyfans.com
      </div>
    );
  }
}

export default Contact;
