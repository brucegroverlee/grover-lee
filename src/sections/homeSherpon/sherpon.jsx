/** libs */
import React from 'react';
import PropTypes from 'prop-types';
import { Tween, Timeline } from 'react-gsap';
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
import sherponPicture from './images/sherpon.svg';
import sherponArchitecturePicture from './images/architecture.webp';
/** strings */

const Sherpon = ({strings, progress}) => {
  return(
    
    <div id="project-sherpon" className="sherpon-section">
      <Timeline totalProgress={progress} paused>
        <Tween
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
        >
          <div className="sherpon-section__left">
            <img src={sherponIsotypePicture} alt="Grover Lee Project Sherpon"/>
          </div>
        </Tween>
      </Timeline>
      <div className="sherpon-section__right">
        <Timeline totalProgress={progress} paused>
          <Timeline 
            target={
              <React.Fragment>
                <div className="sherpon-section__right__header">
                  <div className="sherpon-section__right__header__title">
                    PROJECT
                  </div>
                </div>
                <div className="sherpon-section__right__description">
                  <div className="sherpon-section__right__description__title">
                    <img src={sherponPicture} alt="Grover Lee project Sherpon"/>
                  </div>
                  <div className="sherpon-section__right__description__text">
                    Sherpon is an open-source project you can use to create a Website Builder Platform as a Service like Wix, Squarespace or Weebly.
                  </div>
                </div>
              </React.Fragment>
            }
          >
            <Tween
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
            />
            <Timeline 
              target={
                <div className="sherpon-section__right__role">
                  <div className="sherpon-section__right__role__title">
                    Role
                  </div>
                  <div className="sherpon-section__right__role__text">
                    Creator and Full Stack Developer
                  </div>
                </div>
              }
            >
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              />
              <Tween
                from={{ opacity: 1 }}
                to={{ opacity: 1 }}
              />
              <Tween
                from={{ opacity: 1 }}
                to={{ opacity: 0 }}
              />
            </Timeline>
            <Timeline 
              target={
                <div className="sherpon-section__right__technologies">
                  <div className="sherpon-section__right__technologies__title">
                    Technologies
                  </div>
                  <div className="sherpon-section__right__technologies__text">
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
              }
            >
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              />
              <Tween
                from={{ opacity: 1 }}
                to={{ opacity: 1 }}
              />
              <Tween
                from={{ opacity: 1 }}
                to={{ opacity: 0 }}
              />
            </Timeline>
            <Timeline 
              target={
                <div className="sherpon-section__right__architecture">
                  <div className="sherpon-section__right__architecture__title">
                    Architecture
                  </div>
                  <div className="sherpon-section__right__architecture__text">
                    <img src={sherponArchitecturePicture} alt="Grover Lee architecture"/>
                  </div>
                </div>
              }
            >
              <Tween
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              />
              <Tween
                from={{ opacity: 1 }}
                to={{ opacity: 1 }}
              />
            </Timeline>
          </Timeline>
        </Timeline>
      </div>
    </div>
  );
};

export default Sherpon;
