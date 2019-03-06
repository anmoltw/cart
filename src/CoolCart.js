import React, { useState, useEffect } from 'react';

import ProductList from './ProductList/ProductList';
import PropTypes from 'prop-types';
import Cart from './Cart/Cart';

import apparels from './apparels';

import './CoolCart.css';

const filterProductsForCart = products => {
  const filteredProds = products.filter(product => product.isInCart);
  return filteredProds;
};

const CoolCart = (props) => {
  const [products, updateProducts] = useState([]);


  useEffect(() => {
    console.log("%c effect called", "background: #222; color: #2ecc71");
    updateProducts(props.products);
  }, [props.products]);

  const onAddToCart = productId => {
    const updatedProducts = products.map(product => product.id === productId ? { ...product, isInCart: true } : product);
    console.log(updatedProducts);
    updateProducts(updatedProducts);
  };


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
}


export default CoolCart;
