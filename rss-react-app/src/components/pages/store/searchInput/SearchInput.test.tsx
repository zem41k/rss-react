import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchInput from './SearchInput';

describe('Search input', () => {
  it('render search input', () => {
    render(<SearchInput searchProducts={() => {}} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
  });
});
