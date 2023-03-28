import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Forms from './Forms';
import { MemoryRouter } from 'react-router-dom';

describe('Forms page', () => {
  it('Render form page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Forms />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
