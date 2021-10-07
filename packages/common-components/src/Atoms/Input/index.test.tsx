import { render, screen } from '@testing-library/react';
import React from 'react';
import { Input } from '.';

describe('<Input />', () => {
  beforeEach(() => {
    render(<Input placeholder="Name" type="text" id="name" name="name" />);
  });
  it('should render', () => {
    const inputElement = screen.findByRole('textbox');
    expect(inputElement).toBeInTheDocument;
  });
});
