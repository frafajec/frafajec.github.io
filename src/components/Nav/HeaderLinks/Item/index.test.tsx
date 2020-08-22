import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';

import { headerLinks, headerLinkKey, urls } from 'core/constants';
import Item from '.';

describe('Item', function () {
  test('renders', () => {
    const values = headerLinks[headerLinkKey.email];
    const dom = render(<Item values={values} />);

    const getByHref = queryByAttribute.bind(null, 'href');
    const getByTitle = queryByAttribute.bind(null, 'title');

    expect(getByHref(dom.container, `mailto:${urls.EMAIL}`)).toBeTruthy();
    expect(getByTitle(dom.container, values.title)).toBeTruthy();
  });
});
