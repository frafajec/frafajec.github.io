import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import actions from '../state/actions';

import Loader from '../components/Loader';

import './App.scssm';

// ------------------------------------------------------------------------------------------------
function mapStateToProps(state) {
  return {
    loaded: state.app.loaded,
    browser: state.app.browser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAppLoaded: () => dispatch(actions.setAppLoaded()),
    onWindowResize: () => dispatch(actions.onWindowResize()),
  };
}

// ------------------------------------------------------------------------------------------------
const AppProps = {
  loaded: PropTypes.bool.isRequired,

  setAppLoaded: PropTypes.func.isRequired,
  onWindowResize: PropTypes.func.isRequired,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: props.loaded,
      lazyHomepage: null,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.onWindowResize);
    this.props.setAppLoaded();

    this.LoadHomepage();
  }

  // when state is loaded, wait for animation to complete to remove loader
  componentWillReceiveProps(nextProps) {
    if (!this.state.loaded && nextProps.loaded) {
      setTimeout(
        () =>
          this.setState({
            loaded: true,
          }),
        400
      );
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onWindowResize);
  }

  async LoadHomepage() {
    const { default: Homepage } = await import('./Homepage');
    this.setState({ lazyHomepage: <Homepage /> });
  }

  render() {
    return (
      <div styleName="App">
        {this.state.loaded ? null : <Loader loaded={this.props.loaded} />}
        {this.state.lazyHomepage}
      </div>
    );
  }
}
App.propTypes = AppProps;

export default connect(mapStateToProps, mapDispatchToProps)(App);
