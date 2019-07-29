/** libs */
import React from 'react';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
/** styles */
/** files */
/** strings */


const OtherLinks = ({strings}) => {
  return(
    <div className="other-links-section--mobile">
      <div className="other-links-section--mobile__title">
        Other links
      </div>
      <div className="other-links-section--mobile__links">
        <div className="other-links-section--mobile__link">
          <a href="https://drive.google.com/file/d/1Lrs76_9OnvsdWwzWTg-u6U-h_tVlC6o2/view?usp=sharing" target="__blank">Resume</a>
        </div>
        <div className="other-links-section--mobile__link">
          <a href="https://github.com/brucegroverlee" target="__blank">Github</a>
        </div>
        <div className="other-links-section--mobile__link">
          <a href="https://github.com/brucegroverlee/grover-lee" target="__blank">Checkout the code of this page</a>
        </div>
      </div>
    </div>
  );
};

export default OtherLinks;