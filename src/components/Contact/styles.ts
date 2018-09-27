import { Theme } from '@material-ui/core';
import variables from 'styles/variables';
import { TCss } from 'core/types';

// ------------------------------------------------------------
type SContact = (
  theme: Theme
) => {
  readonly container: TCss;
  readonly gridContainer: TCss;
  readonly gridItem: TCss;
  readonly icons: TCss;
  readonly navLink: TCss;
  readonly navLinkText: TCss;
  readonly row: TCss;
};

// ------------------------------------------------------------
const styles: SContact = (theme: Theme) => ({
  container: {
    background: '#EEEEEE',
    padding: '20px 0',
  },
  gridContainer: {
    padding: '0 40px',
    width: 'auto',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
  },
  gridItem: {
    flexBasis: 'auto',
    minHeight: '1px',
    paddingLeft: '15px',
    paddingRight: '15px',
    position: 'relative',
    width: '100%',
  },
  icons: {
    fontSize: '25px',
    position: 'relative',
  },
  navLink: {
    '&:hover,&:focus': {
      background: 'rgba(200, 200, 200, 0.2)',
      color: variables.cyanColor,
    },
    color: 'inherit',
    padding: '0.9375rem',
    [theme.breakpoints.down('sm')]: {
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
    },
  },
  navLinkText: {
    margin: '2px 0 0 10px',
    textTransform: 'initial',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
});

export default styles;
