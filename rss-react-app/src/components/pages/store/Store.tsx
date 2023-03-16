import React, { Component } from 'react';
import ProductList from './productList/ProductList';
import data from '../../../data/data.json';

export default class Store extends Component {
  render() {
    return (
      <>
        <div className="products__list">
          <ProductList products={data} />
        </div>
      </>
    );
  }
}
