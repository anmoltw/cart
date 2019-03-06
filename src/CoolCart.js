import React from 'react';

import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';

import products from './products';

import './CoolCart.css';

const filterProductsForCart = products => {
  const filteredProds = products.filter(product => product.isInCart);
  return filteredProds;
};

class CoolCart extends React.Component {
  state = { products: [] };

  fetchAndUpdateItems = async () => {
    const response = await fetch('http://localhost:5000/products');
    const fetchedProducts = await response.json();
    this.setState({ products: fetchedProducts });
  };

  componentDidMount() {
    this.fetchAndUpdateItems();
  }

  onAddToCart = productId => {
    this.setState(prevState => ({
      products: prevState.products.map(product => {
        return product.id === productId && !product.isInCart
          ? { ...product, isInCart: true }
          : product;
      })
    }));
  };

  render() {
    return (
      <div className="CoolCart">
        <ProductList
          onAddToCart={this.onAddToCart}
          products={this.state.products}
        />
        <Cart products={filterProductsForCart(this.state.products)} />
      </div>
    );
  }
}

export default CoolCart;
