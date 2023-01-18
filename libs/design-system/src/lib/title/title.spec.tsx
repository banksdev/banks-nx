import { render, screen } from '@testing-library/react';

import { Button } from './title';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button>Hello, World!</Button>);
    expect(baseElement).toBeTruthy();
  });

  it('should render inner text', () => {
    render(<Button>Hello, World!</Button>);

    const button = screen.getByRole('button');
    
    expect(button.innerHTML).toContain('Hello, World!');
  })

  it('should fire click handler', () => {
    const onClick = jest.fn(_ => null);

    render(<Button onClick={onClick}>Hello, World!</Button>);

    const button = screen.getByRole('button');

    expect(onClick.mock.calls.length).toEqual(0);

    button.click();
    
    expect(onClick.mock.calls.length).toEqual(1);
  })
});
