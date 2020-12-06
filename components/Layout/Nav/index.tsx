import * as React from 'react';
import cn from 'classnames';

import ContactRow from '../../Contact/ContactRow';

// ------------------------------------------------------------
interface IHeaderState {
  readonly mobileOpen: boolean;
  readonly scrolled: boolean;
}

// ------------------------------------------------------------
export default class Header extends React.Component<{}, IHeaderState> {
  state: IHeaderState = {
    mobileOpen: false,
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.headerColorChange);
    this.headerColorChange();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.headerColorChange);
  }

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  headerColorChange = () => {
    const scrollY = (process.browser && window.pageYOffset) || 0;

    setTimeout(() => this.setState({ scrolled: scrollY > 400 }), 0);
  };

  render() {
    const { scrolled } = this.state;

    return (
      <header
        className={cn(
          'z-10 fixed inset-x-0 top-0 pt-6 pb-2.5 transition-all duration-200 bg-transparent border-transparent',
          { ['bg-mat border-b-2 border-blueish pt-2.5']: scrolled }
        )}
      >
        <div className="container w-full mx-auto px-4 sm:px-8 flex justify-between items-center">
          <a href="/#top" className="">
            <picture>
              <source srcSet={require('./icon.jpg?webp')} type="image/webp" />
              <img
                src={require('./icon.jpg')}
                alt="home"
                className="w-10 ml-4 md:ml-0 border border-white cursor-pointer rounded-md"
                loading="lazy"
              />
            </picture>
          </a>
          <ContactRow isNav />
        </div>
      </header>
    );
  }
}
