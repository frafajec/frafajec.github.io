import React from 'react';

import Popup from '../../../components/Popup';

import './Notifications.scssm';

// ------------------------------------------------------------------------------------------------
const BetaPopupProps = {};
const BetaPopupDefaultProps = {};

export default class BetaPopup extends React.Component {
  constructor(props) {
    super(props);

    const docCookie = document.cookie;

    if (!docCookie.length) {
      document.cookie = 'betaCookie=1;';
    }

    this.state = {
      visible: !docCookie.length,
    };

    this.closePopup = this.closePopup.bind(this);
  }

  closePopup() {
    this.setState({
      visible: false,
    });
  }

  renderPopup() {
    return (
      <Popup title="Still in Beta!" onClose={this.closePopup}>
        <div styleName="BetaContainer">
          <div styleName="text">
            <span>
              This site is <strong>work in progress</strong>!
            </span>
            <br />
            <br />
            <span>A lot of CSS and actual components are still missing and final decisions are not yet made.</span>
            <br />
            <br />
            <span>So pretty please, with an cherry on top - dont judge!</span>
          </div>
          <div styleName="button">
            <button onClick={this.closePopup}>Acknowledged!</button>
          </div>
        </div>
      </Popup>
    );
  }

  render() {
    return <div styleName="BetaPopup">{this.state.visible ? this.renderPopup() : null}</div>;
  }
}
BetaPopup.propTypes = BetaPopupProps;
BetaPopup.defaultProps = BetaPopupDefaultProps;
