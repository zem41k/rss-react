import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Form from './Form';

describe('User form', () => {
  it('render user form', () => {
    render(<Form addUser={() => {}} />);
    expect(screen.getAllByRole('textbox').length).toBe(2);
    expect(screen.getAllByRole('radio').length).toBe(2);
    expect(screen.getAllByRole('option').length).toBe(3);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should show error messages if from is not filled in', () => {
    render(<Form addUser={() => {}} />);
    const submitBtn = screen.getByRole('button');
    fireEvent.click(submitBtn);
    expect(screen.getByText(/Please enter your name/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your lastname/i)).toBeInTheDocument();
    expect(screen.getByText(/Please enter your bday/i)).toBeInTheDocument();
    expect(screen.getByText(/Please upload your photo/i)).toBeInTheDocument();
    expect(screen.getByText(/Please argree with data processing/i)).toBeInTheDocument();
  });
});
