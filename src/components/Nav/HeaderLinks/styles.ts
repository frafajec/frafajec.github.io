import { Theme } from '@material-ui/core';
import { TCss } from 'core/types';
import variables from 'styles/variables';

// ------------------------------------------------------------
type SHeaderLinks = (
  theme: Theme
) => {
  readonly icons: TCss;
  readonly list: TCss;
  readonly listItem: TCss;
  readonly listItemText: TCss;
  readonly marginRight5: TCss;
  readonly navLink: TCss;
  readonly navLinkActive: TCss;
  readonly navLinkText: TCss;
  readonly notificationNavLink: TCss;
  readonly registerNavLink: TCss;
  readonly tooltip: TCss;
};

// ------------------------------------------------------------
const headerLinksStyle: SHeaderLinks = (theme: Theme) => ({
  icons: {
    fontSize: '25px',
    position: 'relative',
  },
  list: {
    ...variables.defaultFont,
    color: 'inherit',
    fontSize: '14px',
    listStyle: 'none',
    margin: 0,
    paddingBottom: '0',
    paddingLeft: '0',
    paddingTop: '0',
  },
  listItem: {
    color: 'inherit',
    display: 'block',
    float: 'left',
    margin: '0',
    padding: '0',
    position: 'relative',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      '&:after': {
        backgroundColor: '#e5e5e5',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        width: 'calc(100% - 30px)',
      },
      width: '100%',
    },
  },
  listItemText: {
    padding: '0 !important',
  },
  marginRight5: {
    marginRight: '5px',
  },
  navLink: {
    '&:hover,&:focus': {
      background: 'rgba(200, 200, 200, 0.2)',
      color: 'inherit',
    },
    color: 'inherit',
    padding: '0.9375rem',
    [theme.breakpoints.down('sm')]: {
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
      marginBottom: '8px',
      marginLeft: '15px',
      marginTop: '8px',
      textAlign: 'left',
      width: 'calc(100% - 30px)',
    },
  },
  navLinkActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'inherit',
  },
  navLinkText: {
    margin: '2px 0 0 20px',
  },
  notificationNavLink: {
    color: 'inherit',
    display: 'inline-flex',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
    margin: '0px',
    padding: '0.9375rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    top: '4px',
  },
  registerNavLink: {
    display: 'inline-flex',
    fontSize: '12px',
    fontWeight: 400,
    lineHeight: '20px',
    margin: '0px',
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'uppercase',
    top: '3px',
  },
  tooltip: {
    background: '#FFFFFF',
    border: 'none',
    borderRadius: '3px',
    boxShadow:
      '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
    color: '#555555',
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: '0.875em',
    fontStyle: 'normal',
    fontWeight: 400,
    letterSpacing: 'normal',
    lineBreak: 'auto',
    lineHeight: '1.7em',
    maxWidth: '200px',
    minWidth: '130px',
    padding: '10px 15px',
    textAlign: 'center',
    textShadow: 'none',
    textTransform: 'none',
    whiteSpace: 'normal',
    wordBreak: 'normal',
    wordSpacing: 'normal',
    wordWrap: 'normal',
  },
});

export default headerLinksStyle;
