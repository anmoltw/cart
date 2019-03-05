import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';

const Products = props => {
  return (
    <div className="products">
      {' '}
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

Products.propTypes = {
  onAddToCart: PropTypes.func
};

export default Products;
