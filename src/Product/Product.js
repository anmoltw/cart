import React from 'react';
import './Product.scss';

const Product = ({ product, onAddToCart }) => {
  const { id, name, image, price } = product;

  return (
    <section className="product">
      <section className="product__image">
        <img src={`${image}`} />
      </section>

      <section className="product__details">{name}</section>

      <section>
        <div className="product__price">
          <span className="product__price">{`₹${price}`}</span>
        </div>

        <button
          className="product__actions"
          onClick={() => onAddToCart(id)}
        >
          ADD TO CART
        </button>
      </section>
    </section>
  );
};

export default Product;
