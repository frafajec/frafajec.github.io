import { createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = createStyles({
  appBar: {
    alignItems: 'center',
    background: 'transparent',
    boxShadow: 'none',
    color: '#000',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    marginBottom: '20px',
    padding: '0.625rem 0',
    position: 'fixed',
    transition: 'all 150ms ease 0s',
    width: '100%',
    // zIndex: 1100,
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
  flex: {
    flex: 1,
  },
  logo: {
    '@media (max-width: 620px)': {
      marginLeft: '10px',
    },
    cursor: 'pointer',
    width: 40,
    border: '1px solid white',
    borderRadius: 6,
  },
  logoScrolled: {
    color: variables.colors.blue,
  },
  mobileMenu: {
    fontSize: '1.5rem',
    height: '1em',
    width: '1em',
  },
  transparent: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: variables.colors.white,
    paddingTop: '25px',
  },
  overApp: {
    backgroundColor: variables.colors.background,
    border: '0',
    borderBottom: `2px solid ${variables.colors.blue}`,
    boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
    color: variables.colors.white,
  },
  drawerPaper: {
    width: '90%',
    background: variables.colors.background,
  },
});

export default styles;
