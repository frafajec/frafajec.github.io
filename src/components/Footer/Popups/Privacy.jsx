import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../../../components/Popup';

import './Popups.scssm';

// ------------------------------------------------------------------------------------------------
const PrivacyPopupProps = {
  visible: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

export default class PrivacyPopup extends React.Component {
  renderPopup() {
    const { togglePopup } = this.props;

    return (
      <Popup size="small" title="Privacy" onClose={togglePopup}>
        <div styleName="PopupContainer">
          <div styleName="text">
            <span>
              <strong>Code is to be shared</strong>!
            </span>
            <br />
            <br />
            <span>If you can take something from this code, its yours :)</span>
          </div>
          <div styleName="button">
            <button onClick={togglePopup}>Acknowledged!</button>
          </div>
        </div>
      </Popup>
    );
  }

  render() {
    return <div>{this.props.visible ? this.renderPopup() : null}</div>;
  }
}
PrivacyPopup.propTypes = PrivacyPopupProps;
