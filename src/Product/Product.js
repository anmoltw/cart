import React from 'react';

import './Product.css';

const Product = ({ product, onAddToCart }) => {
  const { id, name, image, price } = product;

  return (
    <section className="Product">
      <img width="52px" src={`${image}`} />

      <section>{name}</section>

      <div>{`₹${price}`}</div>

      <button onClick={() => onAddToCart(id)}>
        ADD TO CART
      </button>
    </section>
  );
};

export default Product;
