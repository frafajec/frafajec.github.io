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
      fontSize: theme.typography.pxToRem(14),
      fontStyle: 'italic',
      fontWeight: 300,
      lineHeight: '20px',
      marginBottom: '25px',
      marginTop: 0,
      padding: '30px 0 0',
      textAlign: 'left',
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
    title: {
      color: variables.colors.blue,
      fontSize: theme.typography.pxToRem(30),
      fontWeight: 300,
      margin: '20px 0 0',

      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  });

export default styles;
