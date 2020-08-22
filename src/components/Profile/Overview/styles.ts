import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    details: {
      display: 'flex',
      flexFlow: 'column',
      margin: '5px 15px',
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
      marginBottom: '2px',
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
  });

export default styles;
