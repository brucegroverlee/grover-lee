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
import groverLeePicture from './images/grover-lee.svg';
/** strings */

const Hero = ({children, strings}) => {
  return(
    <div className="hero-section--mobile">
      <div className="hero-section--mobile__bg-image">
        <div className="hero-section--mobile__bg-color">
          <div className="hero-section--mobile__container">
            <div className="hero-section--mobile__header">
              <div className="hero-text-secundary--mobile">
                PROJECT
              </div>
              <div className="hero-text-secundary--mobile">
                GITHUB
              </div>
            </div>

            <div className="hero-section--mobile__title">
              <img src={groverLeePicture} alt="Grover Lee"/>
            </div>

            <div className="hero-section--mobile__sub-title">
              <div className="hero-text-secundary--mobile">
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;