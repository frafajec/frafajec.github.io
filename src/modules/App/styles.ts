// import variables from 'styles/variables';

// ------------------------------------------------------------
type SApp = {
  app: any;
  mainSection: any;
};

// ------------------------------------------------------------
const styles: SApp = {
  app: {
    overflow: 'hidden',
    textAlign: 'left',
  },
  mainSection: {
    background: '#FFFFFF',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    height: '500px', // TODO remove
    margin: '-60px 30px 0px',
    position: 'relative',
    zIndex: '3',
  },
};

export default styles;
