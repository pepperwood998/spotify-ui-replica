import React from 'react';
import PropTypes from 'prop-types';

MainContent.propTypes = {};

function MainContent(props) {
  return (
    <div className='App__main-content'>
      <div className='main-content-container'>
        <div className='main-content-container__scroll-node'></div>
      </div>
    </div>
  );
}

export default MainContent;
