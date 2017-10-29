import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { connect } from 'react-redux';

import actions from '../../actions';
import scrollComponents from '../../containers/Homepage/constants';
import Ficon from '../Ficon';

import './Nav.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {};
}

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
    // this.debounce = this.debounce.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.mouseScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.mouseScroll);
  }

  // debounce(func, wait, immediate) {
  //   var timeout;
  //   return function() {
  //     var context = this,
  //       args = arguments;
  //     var later = function() {
  //       timeout = null;
  //       if (!immediate) func.apply(context, args);
  //     };
  //     var callNow = immediate && !timeout;
  //     clearTimeout(timeout);
  //     timeout = setTimeout(later, wait);
  //     if (callNow) func.apply(context, args);
  //   };
  // }

  // takes original fn and args
  partial(fn, ...fnArgs) {
    return () => {
      fn(...fnArgs);
    };
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
        <button styleName="logo" onClick={this.partial(this.scrollTo, scrollComponents.homeTop)}>
          <Ficon name="github-alt" />
        </button>
        <div styleName="Nav-left">
          <button styleName="action" onClick={this.partial(this.scrollTo, scrollComponents.homeProfile)}>
            Profile
          </button>
          <button styleName="action" onClick={this.partial(this.scrollTo, scrollComponents.homeContact)}>
            Contact
          </button>
          <button styleName="action" onClick={this.partial(this.scrollTo, scrollComponents.homeExperiences)}>
            Experiences
          </button>
          <button styleName="action" onClick={this.partial(this.scrollTo, scrollComponents.homeAbilities)}>
            Abilities
          </button>
          <button styleName="action" onClick={this.partial(this.scrollTo, scrollComponents.homeProjects)}>
            Projects
          </button>
        </div>
      </div>
    );
  }
}
Nav.propTypes = NavProps;

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
