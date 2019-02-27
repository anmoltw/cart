import React from 'react';
import PropTypes from 'prop-types';
import './Cart.scss';

const Cart = (props) => {
  return (
    <div className='products'>
      {renderTotalPrice(props)}
      {renderCart(props)}
    </div>
  );
};

const renderCart = (props) => {
  return Object.keys(props.cartProducts).map((key) => {
    const purchase = props.cartProducts[key];
    return (
      <section className='purchase'>
        <div key={key} className='purchase-item'>
          <div className='purchase-item__image'><img src={`${purchase.productImage}`} /></div>
          <div className='purchase-item__quantity'><span>Qty <small>{purchase.quantity}</small></span></div>
          <div className='purchase-item__price'>{`₹${purchase.discPrice * purchase.quantity}.00`}</div>
        </div>
        <button className='remove' onClick={(event) => props.onRemoveProduct(event, purchase.pid)}>REMOVE</button>
      </section>)
  })
};

const renderTotalPrice = (props) => {
  let price = 0;
  Object.keys(props.cartProducts).forEach((key) => {
    price += props.cartProducts[key]['discPrice'] * props.cartProducts[key]['quantity'];

  });
  return (
    <div className='cart-value'>
      <div className='cart-value__label'>Total Amount</div>
      <div className='cart-value__amount'>{`₹${price}`}</div>
    </div>
  )
};


Cart.defaultProps = {
  cartProducts: []
};

export default Cart;
