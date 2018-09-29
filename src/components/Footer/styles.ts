import { Theme } from '@material-ui/core';
import { TCss } from 'core/types';
import variables from 'styles/variables';

// ------------------------------------------------------------
type SFooter = (
  theme: Theme
) => {
  readonly container: TCss;
  readonly footer: TCss;
  readonly icon: TCss;
  readonly leftLink: TCss;
  readonly list: TCss;
  readonly listItem: TCss;
  readonly rightLink: TCss;
};

// ------------------------------------------------------------
const styles: SFooter = (theme: Theme) => ({
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
    position: 'relative',
    textAlign: 'center',
    zIndex: 2,
  },
  icon: {
    height: '18px',
    position: 'relative',
    top: '3px',
    width: '18px',
  },
  leftLink: {
    '&:hover, &:active': {
      color: variables.colors.green,
    },
    borderRadius: '3px',
    color: 'inherit',
    display: 'block',
    fontSize: '12px',
    fontWeight: 500,
    padding: '0.9375rem',
    position: 'relative',
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  list: {
    marginBottom: '0',
    marginTop: '0',
    padding: '0',
  },
  listItem: {
    display: 'inline-block',
    padding: '0px',
    width: 'auto',
  },
  rightLink: {
    backgroundColor: 'transparent',
    color: variables.colors.green,
    textDecoration: 'none',
  },
});

export default styles;
