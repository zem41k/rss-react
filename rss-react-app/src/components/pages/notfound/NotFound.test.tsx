import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

describe('Not found', () => {
  it('should render notfound page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
