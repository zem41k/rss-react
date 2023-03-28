import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

import data from '../../../../data/data.json';
import ProductList from './ProductList';

describe('Product list', () => {
  it('should render all products', () => {
    render(<ProductList products={data} />);
    const renderedProducts = screen.getAllByTestId('product');
    expect(renderedProducts.length).toBe(data.length);
  });
});
