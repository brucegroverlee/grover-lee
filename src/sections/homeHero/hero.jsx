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
    <div className="hero-section">
      <div className="hero-section__bg-image">
        <div className="hero-section__bg-color">
          <div className="hero-section__container">
            <div className="hero-section__header">
              <div className="hero-text-secundary">
                <a href="https://github.com/brucegroverlee" target="__blank">GITHUB</a>
              </div>
            </div>

            <div className="hero-section__title">
              <img src={groverLeePicture} alt="Grover Lee"/>
            </div>

            <div className="hero-section__sub-title">
              <div className="hero-text-secundary">
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