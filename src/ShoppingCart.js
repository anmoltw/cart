import React, { useEffect } from 'react';
import ProductCart from './ProductCart';
import useLocalStorage from './useLocalStorage';

import './ProductCart.scss';

function ShoppingCart() {

  const products = useLocalStorage({ storeAs: 'cartProducts', url: 'http://localhost:5000/products', initValue: [] });

  return (<ProductCart products={products} />);
}

export default ShoppingCart;
