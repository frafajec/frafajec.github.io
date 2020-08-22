import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const headerLinksStyle = (theme: Theme) =>
  createStyles({
    icons: {
      fontSize: '25px',
      position: 'relative',
    },
    list: {
      color: 'inherit',
      fontSize: '0.9rem',
      margin: 0,
      padding: 0,
    },
    listItem: {
      color: 'inherit',
      display: 'block',
      float: 'left',
      padding: '0',
      width: 'auto',
      [theme.breakpoints.down('sm')]: {
        '&:after': {
          backgroundColor: variables.colors.white,
          content: '""',
          display: 'block',
          height: '1px',
          marginLeft: '15px',
          width: 'calc(100% - 30px)',
        },
        width: '100%',
      },
    },
    navLink: {
      '&:hover,&:focus': {
        background: variables.colors.shadow,
        color: variables.colors.blue,
      },
      color: 'inherit',
      padding: '0.9375rem',
      [theme.breakpoints.down('sm')]: {
        '& > span:first-child': {
          justifyContent: 'flex-start',
        },
        margin: '8px 0 8px 15px',
        textAlign: 'left',
        width: 'calc(100% - 30px)',
      },
    },
    navLinkText: {
      margin: '2px 0 0 20px',
    },
    tooltip: {
      background: variables.colors.white,
      color: variables.colors.black,
      fontSize: '0.875em',
      lineHeight: '1.7em',
      maxWidth: '200px',
      minWidth: '130px',
      padding: '10px 15px',
      textAlign: 'center',
    },
    closeButton: {
      position: 'absolute',
      bottom: 20,
      left: 'calc(50% - 31px)',

      '& i': {
        fontSize: 50,
      },
    },
  });

export default headerLinksStyle;
