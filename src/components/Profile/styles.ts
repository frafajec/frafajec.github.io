import { Theme } from '@material-ui/core';
import variables from 'styles/variables';
import { TCss } from 'core/types';

// ------------------------------------------------------------
type SProfile = (
  theme: Theme
) => {
  readonly about: TCss;
  readonly container: TCss;
  readonly description: TCss;
  readonly details: TCss;
  readonly detailsDesc: TCss;
  readonly detailsHeader: TCss;
  readonly gridContainer: TCss;
  readonly gridItem: TCss;
  readonly gridItemContent: TCss;
  readonly image: TCss;
  readonly overview: TCss;
  readonly title: TCss;
};

// ------------------------------------------------------------
const styles: SProfile = (theme: Theme) => ({
  about: {
    paddingLeft: '50px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '25px',
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
  },
  container: {
    padding: '20px 0',
  },
  description: {
    color: '#434242',
    fontSize: '0.9rem',
    fontStyle: 'italic',
    lineHeight: '20px',
    margin: 0,
    marginBottom: '25px',
    marginTop: 0,
    textAlign: 'left',
  },
  details: {
    display: 'flex',
    flexFlow: 'column',
    margin: '5px 15px',
  },
  detailsDesc: {
    fontSize: '1rem',
    fontStyle: 'italic',
    lineHeight: '20px',
    marginBottom: '10px',
  },
  detailsHeader: {
    color: '#333',
    fontSize: '1.1rem',
    marginBottom: '2px',
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
  gridItemContent: {
    display: 'inline-flex',
    justifyContent: 'center',
    paddingLeft: '15px',
    paddingRight: '15px',
    position: 'relative',
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  image: {
    borderRadius: '150px',
    height: '250px',
    marginLeft: '25px',
    transition: 'all 150ms ease 0s',
    width: '187px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  overview: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: variables.cyanColor,
    fontSize: '1.8rem',
    fontWeight: 300,
    margin: '20px 0',
  },
});

export default styles;
