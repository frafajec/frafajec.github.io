import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = (theme: Theme) =>
  createStyles({
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
      marginTop: 30,
      padding: '20px 0',

      [theme.breakpoints.down('sm')]: {
        marginTop: 5,
      },
    },
    description: {
      fontSize: '0.9rem',
      fontStyle: 'italic',
      lineHeight: '20px',
      marginBottom: '25px',
      marginTop: 0,
      padding: '30px 0 0',
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
      color: variables.colors.blue,
      fontSize: '1.1rem',
      fontWeight: 300,
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
      color: variables.colors.blue,
      fontSize: '1.8rem',
      fontWeight: 300,
      margin: '20px 0 0',

      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  });

export default styles;
