// import variables from 'styles/variables';
import { TCss } from 'core/types';

// ------------------------------------------------------------
type SExperiences = {
  readonly container: TCss;
  readonly gridContainer: TCss;
  readonly gridItem: TCss;
};

// ------------------------------------------------------------
const styles: SExperiences = {
  container: {
    padding: '20px 0',
  },
  gridContainer: {
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
};

export default styles;
