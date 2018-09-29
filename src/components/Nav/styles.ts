import { TCss } from 'core/types';
import variables from 'styles/variables';

// ------------------------------------------------------------
type SHeader = {
  readonly appBar: TCss;
  readonly appResponsive: TCss;
  readonly container: TCss;
  readonly drawerPaper: TCss;
  readonly flex: TCss;
  readonly logo: TCss;
  readonly logoScrolled: TCss;
  readonly mobileMenu: TCss;
  readonly transparent: TCss;
  readonly white: TCss;
};

// ------------------------------------------------------------
const styles: SHeader = {
  appBar: {
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none',
    color: '#FFF',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    marginBottom: '20px',
    padding: '0.625rem 0',
    position: 'fixed',
    transition: 'all 150ms ease 0s',
    width: '100%',
    zIndex: 1100,
  },
  appResponsive: {
    margin: '20px 10px',
  },
  container: {
    ...variables.container,
    alignItems: 'center',
    display: 'flex',
    flex: '1',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    minHeight: '50px',
  },
  drawerPaper: {
    ...variables.boxShadow,
    border: 'none',
    borderTop: 'none',
    bottom: '0',
    display: 'block',
    height: '100vh',
    left: 'auto',
    maxHeight: '1200px',
    overflowY: 'visible',
    paddingLeft: '0',
    paddingRight: '0px',
    position: 'fixed',
    right: '0',
    textAlign: 'left',
    top: '0',
    visibility: 'visible',
    width: 260,
  },
  flex: {
    flex: 1,
  },
  logo: {
    '@media (max-width: 620px)': {
      marginLeft: '10px',
    },
    cursor: 'pointer',
    fontSize: '1.9rem',
  },
  logoScrolled: {
    color: variables.colors.green,
  },
  mobileMenu: {
    fontSize: '1.4em',
  },
  transparent: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: variables.colors.white,
    paddingTop: '25px',
  },
  white: {
    backgroundColor: '#fff',
    border: '0',
    borderBottom: `2px solid ${variables.colors.green}`,
    boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
    color: '#555',
  },
};

export default styles;
