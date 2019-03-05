import React from 'react';
import PropTypes from 'prop-types';

import './ProductList.css';

import Product from '../Product/Product';

const ProductList = props => {
  return (
    <div className="ProductList">
      {props.products.map(product => (
        <Product
          key={product.id}
          product={product}
          onAddToCart={props.onAddToCart}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  onAddToCart: PropTypes.func
};

export default ProductList;
