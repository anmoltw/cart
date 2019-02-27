import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
const Products = (props) => {
  return (<div className='products'> {
    props.products.map((product, index) => (<Product key={
      product.pid
    }
      product={
        product
      }
      onQuantityChange={
        props.onQuantityChange
      }
      onAddToCart={
        props.onAddToCart
      }
    />))
  }
  </div>);
}

  ;
Products.propTypes = {
  onQuantityChange: PropTypes.func, onAddToCart: PropTypes.func
}

export default Products;