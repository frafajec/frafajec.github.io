import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    container: {
      ...variables.container,
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '10px 15px',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    footer: {
      display: 'flex',
      padding: '0.9375rem 0',
      marginBottom: 40,
      position: 'relative',
      textAlign: 'center',
      zIndex: 2,
    },
    icon: {
      height: '18px',
      position: 'relative',
      width: '18px',
    },
    leftLink: {
      '&:hover, &:active': {
        color: variables.colors.blue,
      },
      borderRadius: '3px',
      color: 'inherit',
      display: 'block',
      fontSize: '12px',
      fontWeight: 500,
      padding: theme.typography.pxToRem(14),
      position: 'relative',
      textDecoration: 'none',
      textTransform: 'uppercase',
    },
    list: {
      margin: '10px 0 20px',
      padding: '0',
    },
    listItem: {
      display: 'inline-block',
      padding: '0px',
      width: 'auto',
    },
    rightLink: {
      backgroundColor: 'transparent',
      color: variables.colors.blue,
      textDecoration: 'none',
    },
  });

export default styles;
