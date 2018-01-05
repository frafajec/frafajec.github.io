import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { connect } from 'react-redux';

import { partial } from '../../utils/helpers';
import actions from '../../state/actions';
import scrollComponents from '../../modules/Homepage/constants';
import Ficon from '../Ficon';

import './Nav.scssm';

// ------------------------------------------------------------------------------------------------
function mapDispatchToProps(dispatch) {
  return {
    scrollTo: location => dispatch(actions.scrollTo(location)),
  };
}

// ------------------------------------------------------------------------------------------------
const NavProps = {
  scrollTo: PropTypes.func.isRequired,
};

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.mouseScroll = this.mouseScroll.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.mouseScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.mouseScroll);
  }

  mouseScroll() {
    const Y = window.scrollY;

    this.setState({
      visible: Y > 200,
    });
  }

  scrollTo(location) {
    this.props.scrollTo(location);
  }

  render() {
    const classes = cn('Nav', { visible: this.state.visible });

    return (
      <div styleName={classes}>
        <button styleName="logo" onClick={partial(this.scrollTo, scrollComponents.homeTop)}>
          <Ficon name="github-alt" />
        </button>
        <div styleName="Nav-left">
          <button styleName="action" onClick={partial(this.scrollTo, scrollComponents.homeProfile)}>
            Profile
          </button>
          <button styleName="action" onClick={partial(this.scrollTo, scrollComponents.homeContact)}>
            Contact
          </button>
          <button styleName="action" onClick={partial(this.scrollTo, scrollComponents.homeExperiences)}>
            Experiences
          </button>
          <button styleName="action" onClick={partial(this.scrollTo, scrollComponents.homeAbilities)}>
            Abilities
          </button>
          <button styleName="action" onClick={partial(this.scrollTo, scrollComponents.homeProjects)}>
            Projects
          </button>
        </div>
      </div>
    );
  }
}
Nav.propTypes = NavProps;

export default connect(null, mapDispatchToProps)(Nav);
