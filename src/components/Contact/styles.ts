// import variables from 'styles/variables';
import { TCss } from 'core/types';

// ------------------------------------------------------------
type SContact = {
  readonly container: TCss;
  readonly gridContainer: TCss;
  readonly gridItem: TCss;
};

// ------------------------------------------------------------
const styles: SContact = {
  container: {
    background: '#EEEEEE',
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
