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
import sherponIsotypePicture from './images/sherpon-isotype.svg';
import sherponLogoPicture from './images/sherpon-logo.svg';
import sherponPicture from './images/sherpon.svg';
import sherponArchitecturePicture from './images/architecture.webp';
/** strings */

const Sherpon = ({strings}) => {
  return(
    <div id="project-sherpon" className="sherpon-section--mobile">
      <div className="sherpon-section--mobile__left">
        <img src={sherponIsotypePicture} alt="Grover Lee Project Sherpon"/>
      </div>
      <div className="sherpon-section--mobile__right">
        <div className="sherpon-section--mobile__right__header">
          <div className="sherpon-section--mobile__right__header__title">
            PROJECT
          </div>
        </div>
        <div className="sherpon-section--mobile__right__description">
          <div className="sherpon-section--mobile__right__description__title">
            <img className="mobile" src={sherponLogoPicture} alt="Grover Lee project Sherpon"/>
            <img src={sherponPicture} alt="Grover Lee project Sherpon"/>
          </div>
          <div className="sherpon-section--mobile__right__description__text">
            Sherpon is an open-source project you can use to create a Website Builder Platform as a Service like Wix, Squarespace or Weebly.
          </div>
        </div>
        <div className="sherpon-section--mobile__right__role">
          <div className="sherpon-section--mobile__right__role__title">
            Role
          </div>
          <div className="sherpon-section--mobile__right__role__text">
            Creator and Full Stack Developer
          </div>
        </div>
        <div className="sherpon-section--mobile__right__technologies">
          <div className="sherpon-section--mobile__right__technologies__title">
            Technologies
          </div>
          <div className="sherpon-section--mobile__right__technologies__text">
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>React.js</li>
              <li>Webpack</li>
              <li>Jenkins (CI/CD)</li>
              <li>GCP (VM Instances, Functions, Storage, NoSQL)</li>
              <li>Firebase (Authentication)</li>
            </ul>
          </div>
        </div>
        <div className="sherpon-section--mobile__right__architecture">
          <div className="sherpon-section--mobile__right__architecture__title">
            Architecture
          </div>
          <div className="sherpon-section--mobile__right__architecture__text">
            <img src={sherponArchitecturePicture} alt="Grover Lee architecture"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sherpon;