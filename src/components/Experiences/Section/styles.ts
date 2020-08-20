import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    container: {
      alignItems: 'center',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'initial',
        padding: '0 40px',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '0 15px',
      },
    },
    title: {
      color: variables.colors.blue,
      fontSize: '2.1rem',
      fontWeight: 300,
      marginBottom: '5px',
      textAlign: 'left',
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.9rem',
      },
    },
  });

export default styles;
