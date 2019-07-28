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
import figmaPicture from './images/figma.webp';
import zeplinPicture from './images/zeplin.webp';
import sketchPicture from './images/sketch.webp';
/** strings */

const Skill = ({src, alt, text}) => (
  <div className="other-skills-section--mobile__skill">
    <img src={src} alt={alt}/>
    <div>{text}</div>
  </div>
);

const OtherSkills = ({strings}) => {
  return(
    <div className="other-skills-section--mobile">
      <div className="other-skills-section--mobile__title">
        OTHER SKILLS
      </div>
      <div className="other-skills-section--mobile__list">
        <Skill
          src={figmaPicture}
          alt={'Other skill Figma'}
          text={'Figma'}
        />
        <Skill
          src={zeplinPicture}
          alt={'Other skill Zeplin'}
          text={'Zeplin'}
        />
        <Skill
          src={sketchPicture}
          alt={'Other skill Sketch'}
          text={'Sketch'}
        />
      </div>
    </div>
  );
};

export default OtherSkills;