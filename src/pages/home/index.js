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
import isMobile from '../../modules/device';
/** components */
/** containers */
import HeroMobile from '../../sections/homeHeroMobile';
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

    if (isMobile) {
      return(
        <div className="home-page-container--mobile">
          <HeroMobile/>
        </div>
      );
    } else {
      return(
        <div className="home-page-container">
          <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
            <Scene pin>
              <div className="panel blue"><span>Panel</span></div>
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
    }
  }
}

HomeContainer.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

/**
 *  <Suspense fallback={<SpinnerPage/>}>
          <DragAndDrop/>
          <Customizable/>
          <Code/>
          <Cta/>
        </Suspense>
 */