import React from 'react';
import Sidebar from './Sidebar';

export default props => {
  return (
    <div>
      <Sidebar location={props.location} />
      <div id="content">
        {props.children}
      </div>
    </div>
  );
};
