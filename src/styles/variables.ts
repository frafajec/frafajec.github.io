/*

 =========================================================
 * Material Kit React - v1.2.0 based on Material Kit - v2.0.2
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-kit-react
 * Copyright 2018 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

/* tslint:disable:object-literal-sort-keys */

// TODO cleanup!
const drawerWidth: number = 260;

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

const card = {
  background: '#fff',
  borderRadius: '3px',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  color: 'rgba(0, 0, 0, 0.87)',
  display: 'inline-block',
  margin: '25px 0',
  position: 'relative',
  width: '100%',
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: '1.5em',
};

const primaryColor = '#9c27b0';
const warningColor = '#ff9800';
const dangerColor = '#f44336';
const successColor = '#4caf50';
const infoColor = '#00acc1';
const roseColor = '#e91e63';
const grayColor = '#999999';
const cyanColor = '#22a39f';

const primaryBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)',
};
const infoBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)',
};
const successBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)',
};
const warningBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)',
};
const dangerBoxShadow = {
  boxShadow:
    '0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)',
};
const roseBoxShadow = {
  boxShadow: '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)',
};

const warningCardHeader = {
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
  color: '#fff',
  ...warningBoxShadow,
};
const successCardHeader = {
  background: 'linear-gradient(60deg, #66bb6a, #43a047)',
  color: '#fff',
  ...successBoxShadow,
};
const dangerCardHeader = {
  background: 'linear-gradient(60deg, #ef5350, #e53935)',
  color: '#fff',
  ...dangerBoxShadow,
};
const infoCardHeader = {
  background: 'linear-gradient(60deg, #26c6da, #00acc1)',
  color: '#fff',
  ...infoBoxShadow,
};
const primaryCardHeader = {
  background: 'linear-gradient(60deg, #ab47bc, #8e24aa)',
  color: '#fff',
  ...primaryBoxShadow,
};
const roseCardHeader = {
  background: 'linear-gradient(60deg, #ec407a, #d81b60)',
  color: '#fff',
  ...roseBoxShadow,
};
const cardActions = {
  borderTop: '1px solid #eeeeee',
  height: 'auto',
  margin: '0 20px 10px',
  paddingTop: '10px',
  ...defaultFont,
};

const cardHeader = {
  borderRadius: '3px',
  margin: '-30px 15px 0',
  padding: '15px',
};

const defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow:
    '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s',
};

const title = {
  color: '#3C4858',
  fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  fontWeight: '700',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
};

const cardTitle = {
  ...title,
  marginTop: '.625rem',
};

const cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem',
  },
};

const cardSubtitle = {
  marginBottom: '0',
  marginTop: '-.375rem',
};

export default {
  boxShadow,
  card,
  cardActions,
  cardHeader,
  cardLink,
  cardSubtitle,
  cardTitle,
  container,
  containerFluid,
  cyanColor,
  dangerBoxShadow,
  dangerCardHeader,
  dangerColor,
  defaultBoxShadow,
  defaultFont,
  drawerWidth,
  grayColor,
  infoBoxShadow,
  infoCardHeader,
  infoColor,
  primaryBoxShadow,
  primaryCardHeader,
  primaryColor,
  roseBoxShadow,
  roseCardHeader,
  roseColor,
  successBoxShadow,
  successCardHeader,
  successColor,
  title,
  transition,
  warningBoxShadow,
  warningCardHeader,
  warningColor,
};