// import variables from 'styles/variables';
import { TCss } from 'core/types';

// ------------------------------------------------------------
type SHeader = {
  readonly container: TCss;
  readonly quote: TCss;
  readonly title: TCss;
  readonly underline: TCss;
};

// ------------------------------------------------------------
const styles: SHeader = {
  container: {},
  quote: {
    color: '#434242',
    fontSize: '21px',
    fontStyle: 'italic',
    fontWeight: 300,
    marginBottom: '25px',
    marginTop: 0,
    textAlign: 'center',
  },
  title: {
    color: '#22a39f',
    fontSize: '3.4rem',
    fontWeight: 300,
    margin: '10px 0 5px',
    textAlign: 'center',
  },
  underline: {
    border: 0,
    borderTop: '1px solid #727878',
    margin: '40px auto',
    opacity: 0.2,
    width: '75%',
  },
};

export default styles;
