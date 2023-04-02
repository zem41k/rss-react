import React, { useState } from 'react';
import ProductList from './productList/ProductList';
import SearchInput from './searchInput/SearchInput';
import data from '../../../data/data.json';
import { IProduct } from '../../../types/types';

export default function Store() {
  const [products, setProducts] = useState<IProduct[]>(data);

  const searchProducts = (value: string) => {
    setProducts(
      data.filter((product) => product.title.toLowerCase().includes(value.toLowerCase()))
    );
  };

  return (
    <section className="main__section products">
      <div className="products__form">
        <SearchInput searchProducts={searchProducts} />
      </div>
      <div className="products__list">
        {products.length ? <ProductList products={products} /> : <h2>Товары не найдены</h2>}
      </div>
    </section>
  );
}
