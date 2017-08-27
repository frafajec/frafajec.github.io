import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import actions from '../../actions';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

import './Contact.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

// ------------------------------------------------------------------------------------------------
const ContactProps = {
  projectId: PropTypes.string,
};
const ContactDefaultProps = {
  projectId: null,
};

class Contact extends React.Component {
  render() {
    return (
      <div styleName="Contact">
        {/* <Nav /> */}
        <div>Contact!</div>
        <Footer />
      </div>
    );
  }
}
Contact.propTypes = ContactProps;
Contact.defaultProps = ContactDefaultProps;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Contact));
