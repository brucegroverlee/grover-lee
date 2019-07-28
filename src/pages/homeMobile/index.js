/** libs */
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
import onResize from '../../actions/onResize'
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
/** containers */
import HeroMobile from '../../sections/homeHeroMobile';
import SkillMobile from '../../sections/homeSkillMobile';
import SherponMobile from '../../sections/homeSherponMobile';
import SherponLinksMobile from '../../sections/homeSherponLinksMobile';
import OtherSkillsMobile from '../../sections/homeOtherSkillsMobile';
import OtherLinksMobile from '../../sections/homeOtherLinksMobile';
const HomePage = React.lazy(() => import( /* webpackChunkName: "home-page" */ '../home'));
/** styles */
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
    this.props.onResize();
  }

  render() {

    if (this.props.isMobile) {
      return(
        <div className="home-page-container--mobile">
          <HeroMobile/>
          <SkillMobile/>
          <SherponMobile/>
          <SherponLinksMobile/>
          <OtherSkillsMobile/>
          <OtherLinksMobile/>
        </div>
      );
    } else {
      return(
        <Suspense fallback={<SpinnerPage/>}>
          <HomePage/>
        </Suspense>
      );
    }
  }
}

HomeContainer.propTypes = {};

const mapStateToProps = (state) => ({
  isMobile: state.isMobile,
});

const mapDispatchToProps = (dispatch) => ({
  onResize: () => dispatch(onResize()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

/**
 *  <Suspense fallback={<SpinnerPage/>}>
          <DragAndDrop/>
          <Customizable/>
          <Code/>
          <Cta/>
        </Suspense>

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
 */