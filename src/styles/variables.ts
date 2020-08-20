/* tslint:disable:object-literal-sort-keys */
const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
};

const containerFluid = {
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
  width: '100%',
};

const container = {
  ...containerFluid,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

const colors = {
  blue: '#00acc1',
  // green: '#22a39f',
  // grey: '#727878',
  // greyDark: '#434242',
  shadow: 'rgba(200, 200, 200, 0.2)',
  white: '#EEEEEE',
  black: '#000',
  background: '#1e1e1e',
  offBackground: '#2d2d2d',
};

export default {
  boxShadow,
  colors,
  container,
  containerFluid,
  transition,
};
