import { Theme, createStyles } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const headerLinksStyle = (theme: Theme) =>
  createStyles({
    list: {
      padding: 0,
      color: variables.colors.white,
    },
    closeButton: {
      position: 'absolute',
      bottom: 20,
      left: 'calc(50% - 31px)',
      color: variables.colors.white,

      '& i': {
        fontSize: 50,
      },
    },
  });

export default headerLinksStyle;
