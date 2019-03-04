import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';

const TotalPrice = products => {
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.quantity * product.discPrice
  }, 0);
  return (
    <section className="cart-value">
      <div className="cart-value__label">Total Amount</div>
      <div className="cart-value__amount">{`₹${totalPrice}`}</div>
    </section>
  )
}

const CartItems = items => {
  return items.map(item => {
    return (
      <div key={item.pid} className='cart-item'>
        <div className='cart-item__image'>
          <img src={`${item.productImage}`} />
        </div>
        <div className='cart-item__quantity'><span>Qty <small>{item.quantity}</small></span></div>
        <div className='cart-item__price'>{`₹${item.discPrice * item.quantity}.00`}</div>
      </div>
    )
  })
};

const Cart = ({ products }) => {
  return (
    <div className='cart'>
      {TotalPrice(products)}
      {CartItems(products)}
    </div>
  );
};

Cart.defaultProps = {
  products: []
};

export default Cart;
