import { Theme } from '@material-ui/core';
// import variables from 'styles/variables';
import { TCss } from 'core/types';

// ------------------------------------------------------------
type SHeader = (
  theme: Theme
) => {
  readonly container: TCss;
  readonly quote: TCss;
  readonly title: TCss;
  readonly underline: TCss;
};

// ------------------------------------------------------------
const styles: SHeader = (theme: Theme) => ({
  container: {},
  quote: {
    color: '#434242',
    fontSize: '1.3rem',
    fontStyle: 'italic',
    fontWeight: 300,
    marginBottom: '25px',
    marginTop: 0,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
    },
  },
  title: {
    color: '#22a39f',
    fontSize: '3.4rem',
    fontWeight: 300,
    margin: '10px 0 5px',
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '2.9rem',
    },
  },
  underline: {
    border: 0,
    borderTop: '1px solid #727878',
    margin: '40px auto',
    opacity: 0.2,
    width: '75%',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '20px',
    },
  },
});

export default styles;
