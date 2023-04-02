import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';
import React from 'react';

describe('About', () => {
  it('should render about page', () => {
    render(<About />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
