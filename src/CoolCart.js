import React from 'react';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';

import products from './products';

import './CoolCart.scss';

class CoolCart extends React.Component {
  state = { cartProducts: [] };

  onAddToCart = productId => {
    this.setState(prevState => {
      const existingId = prevState.cartProducts.find(
        product => product.id === productId
      );

      if (existingId !== undefined) {
        return;
      }

      return {
        cartProducts: [
          ...prevState.cartProducts,
          products.find(product => {
            return product.id === productId;
          })
        ]
      };
    });
  };

  render() {
    return (
      <div className="cart">
        <ProductList
          onAddToCart={this.onAddToCart}
          products={products}
        />
        <Cart products={this.state.cartProducts} />
      </div>
    );
  }
}

export default CoolCart;
