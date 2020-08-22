import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import App from '.';

describe('App', function () {
  test('has element with top id', () => {
    const dom = render(<App />);
    // helper to get IDs
    const getById = queryByAttribute.bind(null, 'id');

    const topId = getById(dom.container, 'top');
    expect(topId).toBeTruthy();
  });
});
