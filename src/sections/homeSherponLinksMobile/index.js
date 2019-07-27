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
import SherponLinks from './sherponLinks.jsx';
/** containers */
/** styles */
import './sherponLinks.scss';
/** files */
/** strings */
import strings from './sherponLinks.strings.json';

/**
 * SherponLinks container
 */

class SherponLinksContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {language} = this.props;
    return(
      <div className="sherpon-links-section-container--mobile">
        <SherponLinks
          strings={strings[language]}
        />
      </div>
    );
  }
}

SherponLinksContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SherponLinksContainer);