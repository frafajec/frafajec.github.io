import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    container: {
      borderRadius: 10,
      padding: '30px 0',
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
      color: 'inherit',
      padding: theme.typography.pxToRem(14),

      '&:hover,&:focus': {
        background: variables.colors.shadow,
        color: variables.colors.blue,
      },
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
      maxWidth: 1024,
      margin: '0 auto',

      [theme.breakpoints.down('sm')]: {
        alignItems: 'center',
        flexDirection: 'column',
      },
    },
  });

export default styles;
