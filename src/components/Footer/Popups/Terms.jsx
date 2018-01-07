import React from 'react';
import PropTypes from 'prop-types';

import Popup from '../../../components/Popup';

import './Popups.scssm';

// ------------------------------------------------------------------------------------------------
const TermsPopupProps = {
  visible: PropTypes.bool.isRequired,
  togglePopup: PropTypes.func.isRequired,
};

export default class TermsPopup extends React.Component {
  renderPopup() {
    const { togglePopup } = this.props;

    return (
      <Popup size="small" title="Terms" onClose={togglePopup}>
        <div styleName="PopupContainer">
          <div styleName="text">
            <span>
              <strong>Free for all</strong>!
            </span>
            <br />
            <span>Take what you can if you seek knowledge or contact me for other info :)</span>
          </div>
          <div styleName="button">
            <button onClick={togglePopup}>Acknowledged!</button>
          </div>
        </div>
      </Popup>
    );
  }

  render() {
    return this.props.visible ? this.renderPopup() : null;
  }
}
TermsPopup.propTypes = TermsPopupProps;
