import { Theme } from '@material-ui/core';
import { TCss } from 'core/types';
import variables from 'styles/variables';

// ------------------------------------------------------------
type STile = (
  theme: Theme
) => {
  readonly additional: TCss;
  readonly date: TCss;
  readonly desc: TCss;
  readonly icons: TCss;
  readonly location: TCss;
  readonly name: TCss;
  readonly tile: TCss;
  readonly tileAbout: TCss;
  readonly tileChrono: TCss;
  readonly title: TCss;
  readonly url: TCss;
  readonly urlText: TCss;
};

// ------------------------------------------------------------
const styles: STile = (theme: Theme) => ({
  additional: {
    alignItems: 'center',
    color: variables.colors.green,
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
  },
  date: {
    fontSize: '0.9rem',
    marginBottom: '10px',
    minWidth: '76px',
    [theme.breakpoints.down('sm')]: {
      margin: '2px 0 0 0',
    },
  },
  desc: {
    fontSize: '0.9rem',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      margin: 0,
    },
  },
  icons: {
    fontSize: '1.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.3rem',
    },
  },
  location: {
    alignItems: 'center',
    display: 'flex',
  },
  name: {
    fontSize: '1.1rem',
    fontWeight: 700,
    margin: '10px 0',
    [theme.breakpoints.down('sm')]: {
      margin: '0 10px 0 0',
    },
  },
  tile: {
    flexWrap: 'initial',
    marginBottom: '5px',
    padding: '10px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      marginBottom: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      '&:after': {
        borderBottom: `1px solid ${variables.colors.grey}`,
        content: '""',
        margin: '30px auto 0',
        opacity: 0.2,
        textAlign: 'center',
        width: '50%',
      },
      '&:last-of-type:after': {
        content: 'none',
      },
    },
  },
  tileAbout: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 15px',
    width: '500px',
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      width: 'auto',
    },
  },
  tileChrono: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '20px',
    width: '220px',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 0,
      width: 'auto',
    },
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 500,
    margin: '10px 0',
  },
  url: {
    color: 'inherit',
    marginLeft: '10px',
  },
  urlText: {
    margin: '2px 0 0 10px',
    textTransform: 'initial',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
});

export default styles;
