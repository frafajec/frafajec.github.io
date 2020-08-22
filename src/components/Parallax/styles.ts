import { createStyles, Theme } from '@material-ui/core';
import variables from 'styles/variables';

// ------------------------------------------------------------
const styles = (theme: Theme) =>
  createStyles({
    brand: {
      color: variables.colors.white,
      textAlign: 'center',
      transition: 'transform 1200ms ease-out',
    },
    brandScale: {
      transform: 'scale(0.6)',
    },
    container: { ...variables.container },
    gridContainer: {
      marginLeft: '-15px',
      marginRight: '-15px',
      width: 'auto',
    },
    gridItem: {
      flexBasis: 'auto',
      minHeight: '1px',
      padding: '0 16px',
      position: 'relative',
      width: '100%',
    },
    hero: {
      bottom: 0,
      display: 'block',
      height: '100vh',
      left: 0,
      objectFit: 'cover',
      position: 'absolute',
      right: 0,
      top: 0,
      width: '100vw',
    },
    line: {
      borderTop: `1px solid ${variables.colors.white}`,
      margin: '0 auto',
      width: '75%',
    },
    parallax: {
      alignItems: 'center',
      display: 'flex',
      height: '90vh',
      maxHeight: '1000px',
      overflow: 'hidden',
    },
    parallaxScale: {
      transition: 'transform 1200ms ease-out',
    },
    subtitle: {
      fontSize: theme.typography.pxToRem(21),
      fontWeight: 300,
      lineHeight: '1.4em',
      margin: '10px auto 30px',
      maxWidth: '500px',
    },
    title: {
      display: 'inline-block',
      fontSize: theme.typography.pxToRem(66),
      fontWeight: 500,
      margin: '20px 0 10px',
      position: 'relative',
    },
  });

export default styles;
