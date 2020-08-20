import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    container: {
      padding: '20px 0',
    },
    delimiter: {
      '&::before': {
        alignItems: 'center',
        color: variables.colors.white,
        content: '"..."',
        display: 'flex',
        fontSize: '4rem',
        justifyContent: 'center',
      },
      border: 0,
      margin: '0 0 5px 0',
      [theme.breakpoints.down('sm')]: {
        margin: '-15px 0 5px 0',
      },
    },
    gridContainer: {
      padding: '0 40px',
      [theme.breakpoints.down('sm')]: {
        padding: '0 10px',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '0',
      },
    },
    gridItem: {
      padding: '0 15px',
      width: '100%',
    },
  });

export default styles;
