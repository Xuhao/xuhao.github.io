import React, { Component } from 'react';
import me from '../../assets/images/me.jpg';
import i18n from '../../core/i18n';

class About extends Component {
  render() {
    return (
      <div id="about">
        <h1>{i18n.t('translation:::about::about me')}</h1>
        <img src={me} role="presentation" className="my-photo" />
        <span dangerouslySetInnerHTML={{__html: i18n.t('translation:::about::desc')}} />
      </div>
    );
  }
}

export default About;
