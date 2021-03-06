/** libs */
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Controller, Scene } from 'react-scrollmagic';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
import Hero from '../../sections/homeHero';
import Skill from '../../sections/homeSkill';
import Sherpon from '../../sections/homeSherpon';
import SherponLinksMobile from '../../sections/homeSherponLinksMobile';
import OtherSkillsMobile from '../../sections/homeOtherSkillsMobile';
import OtherLinksMobile from '../../sections/homeOtherLinksMobile';
// const DragAndDrop = React.lazy(() => import( /* webpackChunkName: "drag-and-drop-section" */ './sections/dragAndDrop'));
/** styles */
import './home.scss';
/** files */
/** strings */

const SpinnerPage = () => {
  return(
    <div>loading</div>
  );
};

/**
 * Home container
 */

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="home-page-container">
        <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
          <Scene pin>
            <div className="panel">
              <Hero/>
            </div>
          </Scene>
          <Scene pin>
            <div className="panel white">
              <Skill/>
            </div>
          </Scene>
          <Scene duration={1000} pin>
            {(progress) => (
              <div className="panel white">
                <Sherpon
                  progress={progress}
                />
              </div>
            )}
            
          </Scene>
          <Scene pin>
            <div className="panel white">
              <SherponLinksMobile/>
            </div>
          </Scene>
          <Scene pin>
            <div className="panel">
              <OtherSkillsMobile/>
              <OtherLinksMobile/>
            </div>
          </Scene>
        </Controller>
      </div>
    );
  }
}

HomeContainer.propTypes = {};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

/**
 *  <Suspense fallback={<SpinnerPage/>}>
          <DragAndDrop/>
          <Customizable/>
          <Code/>
          <Cta/>
        </Suspense>

        return(
        <div className="home-page-container">
          <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene pin>
              <div className="panel blue"><HeroMobile/></div>
            </Scene>
            <Scene pin>
              <div className="panel turqoise"><span>Panel</span></div>
            </Scene>
            <Scene pin>
              <div className="panel green"><span>Panel</span></div>
            </Scene>
            <Scene pin>
              <div className="panel bordeaux"><span>Panel</span></div>
            </Scene>
          </Controller>
        </div>
      );
 */