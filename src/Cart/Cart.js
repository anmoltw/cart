import React from 'react';

import './Cart.css';

const Cart = ({ products }) => {
  const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <div className="Cart">
      <h3 className="CartTotal">
        Total Amount: ₹{totalPrice}
      </h3>

      {products.map(product => (
        <div key={product.id} className="CartProduct">
          <img width="36" src={`${product.image}`} />

          <span>{product.name}</span>

          <div className="CartProductPrice">{`₹${
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
