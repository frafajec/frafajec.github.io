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
  readonly navLink: TCss;
  readonly navLinkText: TCss;
  readonly tooltip: TCss;
};

// ------------------------------------------------------------
const headerLinksStyle: SHeaderLinks = (theme: Theme) => ({
  icons: {
    fontSize: '25px',
    position: 'relative',
  },
  list: {
    color: 'inherit',
    fontSize: '0.9rem',
    margin: 0,
    padding: 0,
  },
  listItem: {
    color: 'inherit',
    display: 'block',
    float: 'left',
    padding: '0',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      '&:after': {
        backgroundColor: variables.colors.white,
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        width: 'calc(100% - 30px)',
      },
      width: '100%',
    },
  },
  navLink: {
    '&:hover,&:focus': {
      background: variables.colors.shadow,
      color: 'inherit',
    },
    color: 'inherit',
    padding: '0.9375rem',
    [theme.breakpoints.down('sm')]: {
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
      margin: '8px 0 8px 15px',
      textAlign: 'left',
      width: 'calc(100% - 30px)',
    },
  },
  navLinkText: {
    margin: '2px 0 0 20px',
  },
  tooltip: {
    background: variables.colors.white,
    color: variables.colors.greyDark,
    fontSize: '0.875em',
    lineHeight: '1.7em',
    maxWidth: '200px',
    minWidth: '130px',
    padding: '10px 15px',
    textAlign: 'center',
  },
});

export default headerLinksStyle;
