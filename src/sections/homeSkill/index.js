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
import Skill from './skill.jsx';
/** containers */
/** styles */
import './skill.scss';
/** files */
/** strings */
import strings from './skill.strings.json';

/**
 * Skill container
 */

class SkillContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {language} = this.props;
    return(
      <div className="skill-section-container--mobile">
        <Skill
          strings={strings[language]}
        />
      </div>
    );
  }
}

SkillContainer.propTypes = {
  language: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  language: state.language,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SkillContainer);