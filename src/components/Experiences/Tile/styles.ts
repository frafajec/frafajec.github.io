import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    additional: {
      alignItems: 'center',
      color: variables.colors.blue,
      display: 'flex',
      flexDirection: 'row',
      marginTop: '10px',
    },
    date: {
      fontSize: theme.typography.pxToRem(14),
      marginBottom: '10px',
      minWidth: '76px',
      [theme.breakpoints.down('sm')]: {
        margin: '2px 0 0 0',
      },
    },
    desc: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 300,
      lineHeight: 1.4,
      marginBottom: '10px',

      [theme.breakpoints.down('sm')]: {
        margin: 0,
      },
    },
    icons: {
      fontSize: theme.typography.pxToRem(24),
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(21),
      },
    },
    location: {
      alignItems: 'center',
      display: 'flex',
    },
    name: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: 500,
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
          borderBottom: `1px solid ${variables.colors.white}`,
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
        alignItems: 'top',
        flexDirection: 'row',
        paddingLeft: 0,
        width: 'auto',
      },
    },
    title: {
      fontSize: theme.typography.pxToRem(17),
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
        fontSize: theme.typography.pxToRem(14),
      },
    },
  });

export default styles;
