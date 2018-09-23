import variables from 'styles/variables';
import { TCss } from 'core/types';

// ------------------------------------------------------------
type SParallax = {
  readonly brand: TCss;
  readonly brandScale: TCss;
  readonly container: TCss;
  readonly gridContainer: TCss;
  readonly gridItem: TCss;
  readonly hero: TCss;
  readonly line: TCss;
  readonly parallax: TCss;
  readonly parallaxScale: TCss;
  readonly subtitle: TCss;
  readonly title: TCss;
};

// ------------------------------------------------------------
const styles: SParallax = {
  brand: {
    color: '#FFFFFF',
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
    paddingLeft: '15px',
    paddingRight: '15px',
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
    borderTop: '1px solid #FFFF',
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
    fontSize: '1.313rem',
    fontWeight: 100,
    lineHeight: '1.4em',
    margin: '10px auto 30px',
    maxWidth: '500px',
  },
  title: {
    display: 'inline-block',
    fontSize: '4.2rem',
    fontWeight: 600,
    margin: '20px 0 10px',
    position: 'relative',
  },
};

export default styles;
