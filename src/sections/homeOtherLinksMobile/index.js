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
import OtherLinks from './otherLinks.jsx';
/** containers */
/** styles */
import './otherLinks.scss';
/** files */
/** strings */
import strings from './otherLinks.strings.json';

/**
 * OtherLinks container
 */

class OtherLinksContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {language} = this.props;
    return(
      <div className="other-links-section-container--mobile">
        <OtherLinks
          strings={strings[language]}
        />
      </div>
    );
  }
}

OtherLinksContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OtherLinksContainer);