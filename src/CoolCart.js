import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList';
import PropTypes from 'prop-types';
import Cart from './Cart/Cart';

import './CoolCart.css';

const filterProductsForCart = products => {
  const filteredProds = products.filter(product => product.isInCart);
  return filteredProds;
};

function CoolCart(props) {

  const [products, updateProducts] = useState([]);

  const fetchAndUpdateItems = selectedCategory => {
    fetch(`http://localhost:5000/${selectedCategory}`)
      .then(res => {
        return res.json();
      })
      .then(prods => updateProducts(prods));
  };

  useEffect(() => {
    fetchAndUpdateItems(props.selectedCategory)
  }, [props.selectedCategory])

  const onAddToCart = productId => {
    const updatedProducts = products.map(product => {
      return product.id === productId && !product.isInCart
        ? { ...product, isInCart: true }
        : product;
    });
    updateProducts(updatedProducts);
  }

  return (
    <div className="CoolCart">
      <ProductList
        onAddToCart={onAddToCart}
        products={products}
      />
      <Cart products={filterProductsForCart(products)} />
    </div>
  );
}

CoolCart.defaultProps = {
  selectedCategory: 'apparels'
};

export default CoolCart;
