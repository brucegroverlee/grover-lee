/** libs */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/** constants */
/** actions */
/** apis */
/** logics */
/** utils */
/** modules */
/** components */
import Sherpon from './sherpon.jsx';
/** containers */
/** styles */
import './sherpon.scss';
/** files */
/** strings */
import strings from './sherpon.strings.json';

/**
 * Sherpon container
 */

class SherponContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {progress, language} = this.props;
    return(
      <div className="sherpon-section-container--mobile">
        <Sherpon
          strings={strings[language]}
          progress={progress}
        />
      </div>
    );
  }
}

SherponContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SherponContainer);