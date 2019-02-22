import React from 'react';
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
  return Object.keys(props.products).map((key) => {
    const purchase = props.products[key];
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
  Object.keys(props.products).forEach((key) => {
    price += props.products[key]['discPrice'] * props.products[key]['quantity'];

  });
  return (
    <div className='cart-value'>
      <div className='cart-value__label'>Total Amount</div>
      <div className='cart-value__amount'>{`₹${price}`}</div>
    </div>
  )
};


export default Cart;
