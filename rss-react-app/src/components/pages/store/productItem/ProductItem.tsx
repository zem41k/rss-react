import React from 'react';
import { IProduct } from 'types/types';

interface IProductItemProps {
  product: IProduct;
}

export default function ProductItem({ product }: IProductItemProps) {
  return (
    <div className="products__item product">
      <div className="product__img-box">
        <img src={product.image} alt="photo" />
      </div>
      <div className="product__body">
        <h2 className="product__name">{product.title}</h2>
        <p className="product__category">{product.category}</p>
        <h3 className="product__price">{product.price}</h3>
        <div className="product__rating">
          <p className="product__rate">{product.rating.rate}</p>
          <p className="product__count">{product.rating.count}</p>
        </div>
      </div>
    </div>
  );
}
