import variables from 'styles/variables';
import { TCss } from 'core/types';

// ------------------------------------------------------------
type SFooter = {
  readonly container: TCss;
  readonly footer: TCss;
  readonly icon: TCss;
  readonly left: TCss;
  readonly leftLink: TCss;
  readonly list: TCss;
  readonly listItem: TCss;
  readonly right: TCss;
  readonly rightLink: TCss;
};

// ------------------------------------------------------------
const styles: SFooter = {
  container: {
    ...variables.container,
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
  left: {
    display: 'block',
    float: 'left',
  },
  leftLink: {
    '&:hover, &:active': {
      color: variables.cyanColor,
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
  right: {
    float: 'right',
    margin: 0,
    padding: '15px 0',
  },
  rightLink: {
    backgroundColor: 'transparent',
    color: variables.cyanColor,
    textDecoration: 'none',
  },
};

export default styles;
