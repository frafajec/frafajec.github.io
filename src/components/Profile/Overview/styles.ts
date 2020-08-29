import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    details: {
      display: 'flex',
      flexFlow: 'row',
      margin: '15px 15px',

      '& > div': {
        margin: '0 10px',
      },
    },
    detailsDesc: {
      fontSize: theme.typography.pxToRem(16),
      fontStyle: 'italic',
      lineHeight: '20px',
      marginBottom: '10px',
    },
    detailsHeader: {
      color: variables.colors.blue,
      fontSize: theme.typography.pxToRem(17),
      fontWeight: 300,
      marginRight: '4px',
    },
    image: {
      borderRadius: '150px',
      width: 225,
      height: 'auto',
      marginLeft: '25px',
      transition: 'all 150ms ease 0s',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
      },

      [theme.breakpoints.up('md')]: {
        height: 'auto',
      },
    },
    overview: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',

      [theme.breakpoints.up('md')]: {
        flexDirection: 'column-reverse',
      },
    },
  });

export default styles;
