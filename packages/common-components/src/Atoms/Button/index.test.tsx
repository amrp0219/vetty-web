import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button/>', () => {
  beforeEach(() => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Hey</Button>);
  });

  it('should render', () => {
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument;
  });

  it('should say "Hey"', () => {
    const buttonElement = screen.getByText('Hey');
    expect(buttonElement).toBeInTheDocument;
  });
});
