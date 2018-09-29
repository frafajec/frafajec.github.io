import { Theme } from '@material-ui/core';
import { TCss } from 'core/types';
import variables from 'styles/variables';

// ------------------------------------------------------------
type SSection = (
  theme: Theme
) => {
  readonly container: TCss;
  readonly title: TCss;
};

// ------------------------------------------------------------
const styles: SSection = (theme: Theme) => ({
  container: {
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'initial',
      padding: '0 40px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 15px',
    },
  },
  title: {
    color: variables.colors.green,
    fontSize: '2.1rem',
    fontWeight: 300,
    marginBottom: '5px',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.9rem',
    },
  },
});

export default styles;
