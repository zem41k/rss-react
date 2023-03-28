import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import MyInput from './MyInput';

describe('My input', () => {
  it('render input with props', () => {
    render(<MyInput type="text" placeholder="title" name="title" id="title" />);
    const renderedInput = screen.getByRole('textbox');
    expect(renderedInput).toBeInTheDocument();
  });
});
