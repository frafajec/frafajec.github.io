import { Theme } from '@material-ui/core';
import { TCss } from 'core/types';

// ------------------------------------------------------------
type SExperiences = (
  theme: Theme
) => {
  readonly container: TCss;
  readonly delimiter: TCss;
  readonly gridContainer: TCss;
  readonly gridItem: TCss;
};

// ------------------------------------------------------------
const styles: SExperiences = (theme: Theme) => ({
  container: {
    padding: '20px 0',
  },
  delimiter: {
    '&::before': {
      alignItems: 'center',
      color: '#727878',
      content: '"..."',
      display: 'flex',
      fontSize: '4rem',
      justifyContent: 'center',
    },
    border: 0,
    margin: '0 0 5px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '-15px 0 5px 0',
    },
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
});

export default styles;
