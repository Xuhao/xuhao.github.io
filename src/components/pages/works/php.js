import React, { Component } from 'react';
import i18n from '../../../core/i18n';

class PHP extends Component {
  render() {
    return (
      <div id="php_works">
        <h2>PHP</h2>
        {i18n.t('translation:::works::php::b-check')}
        <br />{i18n.t('translation:::works::php::link')}:&nbsp;
        <a href="misc/b-check/" target="_blank">http://rubyfans.com/b-check</a>
      </div>
    );
  }
}

export default PHP;
