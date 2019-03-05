import React from 'react';
import './Cart.scss';

const Cart = ({ products }) => {
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <div className="cart">
      <section className="cart-value">
        <div className="cart-value__label">
          Total Amount
        </div>
        <div className="cart-value__amount">{`₹${totalPrice}`}</div>
      </section>

      {products.map(product => (
        <div key={product.id} className="cart-item">
          <div className="cart-item__image">
            <img src={`${product.image}`} />
          </div>

          <div className="cart-item__price">{`₹${
            product.price
          }`}</div>
        </div>
      ))}
    </div>
  );
};

Cart.defaultProps = {
  products: []
};

export default Cart;
