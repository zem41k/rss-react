import React, { Component } from 'react';
import ProductList from './productList/ProductList';
import data from '../../../data/data.json';
import MyInput from '../../UI/MyInput';

export default class Store extends Component {
  render() {
    return (
      <>
        <div className="products__form">
          <MyInput placeholder="Search" className="products__search" />
        </div>
        <div className="products__list">
          <ProductList products={data} />
        </div>
      </>
    );
  }
}
