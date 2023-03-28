import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';
import React from 'react';

describe('Homepage', () => {
  it('should render Homepage page', () => {
    render(<Homepage />);
    expect(screen.getByText(/Homepage/i)).toBeInTheDocument();
  });
});
