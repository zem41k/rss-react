import React, { Component } from 'react';
import ProductList from './productList/ProductList';
import SearchInput from './searchInput/SearchInput';
import data from '../../../data/data.json';
import { IProduct } from 'types/types';

interface IStoreState {
  products: IProduct[];
}

export default class Store extends Component<object, IStoreState> {
  state = {
    products: data,
  };

  searchProducts = (value: string) => {
    this.setState({
      products: data.filter((product) => product.title.toLowerCase().includes(value.toLowerCase())),
    });
  };

  render() {
    const { products } = this.state;

    return (
      <section className="main__section products">
        <div className="products__form">
          <SearchInput searchProducts={this.searchProducts} />
        </div>
        <div className="products__list">
          {products.length ? <ProductList products={products} /> : <h2>Товары не найдены</h2>}
        </div>
      </section>
    );
  }
}
