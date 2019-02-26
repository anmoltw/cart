import React, { useEffect } from 'react';
import ProductListingPage from './ProductListingPage';
import useLocalStorage from './useLocalStorage';

function ShoppingCart() {

  const products = useLocalStorage({ storeAs: 'cartProducts', url: 'http://localhost:5000/products', initValue: [] });

  return (<ProductListingPage products={products} />);
}

export default ShoppingCart;
