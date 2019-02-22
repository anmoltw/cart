import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';

import './ProductCart.scss';

function ProductCart() {

  const [products, updateProducts] = useState([]);
  const [cartProducts, updateCartProducts] = useState({});

  const onQuantityChange = (event, productIndex) => {
    const { value } = event.target;
    const updatedProducts = products.map((product, index) => index === productIndex ? { ...product, quantity: value } : product);
    console.log(updatedProducts);
    updateProducts(updatedProducts);
    const updatedProduct = updatedProducts[productIndex];
    if (cartProducts[updatedProduct.pid]) {
      updateCartProducts({ ...cartProducts, [updatedProduct.pid]: { ...updatedProduct } })
    }
  }

  const onAddToCart = (event, productId, product) => {
    event.stopPropagation();
    updateCartProducts({ ...cartProducts, [productId]: { ...product } });
  }

  const onRemoveProduct = (event, productId) => {
    event.stopPropagation();
    const updatedCartProducts = { ...cartProducts };
    delete updatedCartProducts[productId];
    updateCartProducts(updatedCartProducts);
  }

  const fetchItems = async () => {
    const url = './data/products.json';
    const response = await fetch(url);
    const products = await response.json();
    updateProducts(products);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className='cart'>
      <ProductList products={products} onQuantityChange={onQuantityChange} onAddToCart={onAddToCart} />
      <Cart products={cartProducts} onRemoveProduct={onRemoveProduct} />
    </div>
  );
}

export default ProductCart;
