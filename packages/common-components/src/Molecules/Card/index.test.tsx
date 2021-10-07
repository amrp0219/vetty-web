import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from '.';

describe('<Card/>', () => {
  describe('Default', () => {
    beforeEach(() => {
      render(
        <Card>
          <p>Hello</p>
        </Card>,
      );
    });
    it('should render', () => {
      const cardElement = screen.getByRole('banner');
      expect(cardElement).toBeInTheDocument;
    });
    // NO's
    it('should not have X icon', () => {
      const closeIcon = screen.queryAllByText('X');
      expect(closeIcon).not.toBeInTheDocument;
    });
  });
  describe('Can be deleted <Card canBeDeleted />', () => {
    beforeEach(() => {
      render(
        <Card canBeDeleted>
          <p>Hello</p>
        </Card>,
      );
    });
    it('should have X icon', () => {
      const closeIcon = screen.queryAllByText('X');
      expect(closeIcon).toBeDefined();
    });
  });
});
