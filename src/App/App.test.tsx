import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import App from '.';

test('renders learn react link', () => {
  const dom = render(<App />);
  // helper to get IDs
  const getById = queryByAttribute.bind(null, 'id');

  const topId = getById(dom.container, 'top');
  expect(topId).toBeTruthy();
});
