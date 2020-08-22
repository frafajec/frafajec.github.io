import variables from 'styles/variables';
import { createStyles } from '@material-ui/core';

// ------------------------------------------------------------
const styles = (theme: any) =>
  createStyles({
    app: {
      overflow: 'hidden',
      textAlign: 'left',
    },
    mainSection: {
      background: variables.colors.offBackground,
      color: variables.colors.white,
      borderRadius: '6px',
      margin: '-60px 30px 0px',
      padding: '40px 0 60px',
      position: 'relative',
      zIndex: 3,

      [theme.breakpoints.down('sm')]: {
        margin: '-60px 10px 0',
        paddingTop: 0,
      },
    },
    underline: {
      border: 0,
      borderTop: `1px solid ${variables.colors.white}`,
      margin: '30px auto',
      opacity: 0.2,
      width: '75%',
    },
  });

export default styles;
