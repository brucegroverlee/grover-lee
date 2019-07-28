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
import nodejsPicture from './images/nodejs.webp';
import reactjsPicture from './images/react.webp';
import jestPicture from './images/jest.webp';
import enzymePicture from './images/enzyme.webp';
import gitPicture from './images/git.webp';
import dockerPicture from './images/docker.webp';
import jenkinsPicture from './images/jenkins.webp';
import firebasePicture from './images/firebase.webp';
import gcpPicture from './images/gcp.webp';
/** strings */

const SkillItem = (props) => (
  <div className="skill-section__skill">
    <div className="skill-section__skill__logo">
      <img src={props.src} alt={props.alt}/>
    </div>
    <div className="skill-section__skill__name">
      {props.name}
    </div>
  </div>
);

const Skill = ({children, strings}) => {
  return(
    <div className="skill-section">
      <div className="skill-section__title">
        SKILLS
      </div>
      <div className="skill-section__skills">
        <div className="skill-section__row">
          <SkillItem
            name={'Node.js'}
            src={nodejsPicture}
            alt={'Grover Lee skill node.js'}
          />
          <SkillItem
            name={'React.js'}
            src={reactjsPicture}
            alt={'Grover Lee skill react.js'}
          />
          <SkillItem
            name={'Jest'}
            src={jestPicture}
            alt={'Grover Lee skill jest'}
          />
          <SkillItem
            name={'Enzyme'}
            src={enzymePicture}
            alt={'Grover Lee skill Enzyme'}
          />
        </div>

        <div className="skill-section__row">
          <SkillItem
            name={'Git'}
            src={gitPicture}
            alt={'Grover Lee skill Git'}
          />
          <SkillItem
            name={'Docker'}
            src={dockerPicture}
            alt={'Grover Lee skill Docker'}
          />
          <SkillItem
            name={'Jenkins'}
            src={jenkinsPicture}
            alt={'Grover Lee skill Jenkins'}
          />
          <SkillItem
            name={'Firebase'}
            src={firebasePicture}
            alt={'Grover Lee skill Firebase'}
          />
        </div>

        <SkillItem
          name={'Google Cloud Platform'}
          src={gcpPicture}
          alt={'Grover Lee skill Google Cloud Platform'}
        />

      </div>
    </div>
  );
};

export default Skill;