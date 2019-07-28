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
import githubPicture from './images/github.webp';
import sherponCommunityPicture from './images/sherpon-community.svg';
import sherponPicture from './images/sherpon.svg';
/** strings */

const Link = ({href, src, alt, text}) => (
  <div className="sherpon-links-section--mobile__link-container">
    <a 
      href={href}
      target="__blank" 
      className="sherpon-links-section--mobile__link"
    >
      <img src={src} alt={alt}/>
      <div>{text}</div>
    </a>
  </div>
);

const SherponLinks = ({strings}) => {
  return(
    <div className="sherpon-links-section--mobile">
      <Link
        href={'https://github.com/sherpon'}
        src={githubPicture}
        alt={'Sherpon github'}
        text={'See the repository of Sherpon'}
      />
      <Link
        href={'https://community.sherpon.com'}
        src={sherponCommunityPicture}
        alt={'Sherpon community'}
        text={'See the documentation of the open source project'}
      />
      <Link
        href={'https://sherpon.com'}
        src={sherponPicture}
        alt={'Sherpon as a service'}
        text={'See the website of Sherpon as a service'}
      />
    </div>
  );
};

export default SherponLinks;