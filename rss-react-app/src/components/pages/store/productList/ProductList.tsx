import React from 'react';
import { IProduct } from 'types/types';
import ProductItem from '../productItem/ProductItem';

interface IProductListProps {
  products: IProduct[];
}

export default function ProductList({ products }: IProductListProps) {
  return (
    <>
      {products.map((item) => (
        <ProductItem product={item} key={item.id} />
      ))}
    </>
  );
}
