import React from 'react';

import ProductList from './ProductList/ProductList';
import PropTypes from 'prop-types';
import Cart from './Cart/Cart';

import apparels from './apparels';

import './CoolCart.css';

const filterProductsForCart = products => {
  const filteredProds = products.filter(product => product.isInCart);
  return filteredProds;
};

class CoolCart extends React.Component {
  state = { products: [] };

  fetchAndUpdateItems = selectedCategory => {
    fetch(`http://localhost:5000/${selectedCategory}`)
      .then(res => {
        return res.json();
      })
      .then(products => this.setState({ products }));
  };

  componentDidMount() {
    this.fetchAndUpdateItems(this.props.selectedCategory);
  }

  componentDidUpdate() {
    this.fetchAndUpdateItems(this.props.selectedCategory);
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

CoolCart.defaultProps = {
  selectedCategory: 'apparels'
}


export default CoolCart;
