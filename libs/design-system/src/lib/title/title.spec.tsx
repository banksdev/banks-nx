import { render } from '@testing-library/react';

import { Title } from './title';

describe('Title', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Title>Hello, World!</Title>);
    expect(baseElement).toBeTruthy();
  });
});
