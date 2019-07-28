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
import OtherSkills from './otherSkills.jsx';
/** containers */
/** styles */
import './otherSkills.scss';
/** files */
/** strings */
import strings from './otherSkills.strings.json';

/**
 * OtherSkills container
 */

class OtherSkillsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {language} = this.props;
    return(
      <div className="other-skills-section-container--mobile">
        <OtherSkills
          strings={strings[language]}
        />
      </div>
    );
  }
}

OtherSkillsContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(OtherSkillsContainer);