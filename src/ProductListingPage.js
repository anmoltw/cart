import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList';
import Cart from './Cart/Cart';

import './ProductListingPage.scss';

const productsData = [
  {
    "pid": 1,
    "brandName": "NEXT",
    "productName": "Navy Blue Regular Fit Plain Front Trouser",
    "availQty": [
      "1",
      "2",
      "3"
    ],
    "size": "32S",
    "quantity": "1",
    "regPrice": "4590",
    "discPrice": "3213",
    "productImage": "../images/product-image1.jpg"
  },
  {
    "pid": 2,
    "brandName": "NEXT",
    "productName": "Borg Lined Hoody",
    "availQty": [
      "1",
      "2",
      "3"
    ],
    "size": "M",
    "quantity": "1",
    "regPrice": "5790",
    "discPrice": "4053",
    "productImage": "../images/product-image2.jpg"
  }];


const filterProductsForCart = products => {
  const filteredProds = products.filter(product => product.isInCart);
  return filteredProds;
}

// class ProductListingPage extends React.Component {

//   state = { products: [...productsData] }

//   onAddToCart = (productId) => {
//     this.setState(prevState => ({
//       products: prevState.products.map(product => {
//         return product.pid === productId && !product.isInCart ? { ...product, isInCart: true } : product
//       })
//     }));
//   }

//   onQuantityChange = (quantity, productId) => {
//     this.setState(state => ({
//       products: state.products.map(product => product.pid === productId ? { ...product, quantity } : product)
//     }));
//   }

//   /** lifecycle methods**/
//   // fetchAndUpdateItems = async () => {
//   //   const response = await fetch('./data/products.json');
//   //   const newProductsData = await response.json();
//   //   this.setState({ products: newProductsData });
//   // }

//   // componentDidMount() {
//   //   this.fetchAndUpdateItems();
//   // }


//   render() {
//     return (
//       <div className='cart'>
//         <ProductList products={this.state.products} onAddToCart={this.onAddToCart} onQuantityChange={this.onQuantityChange} />
//         <Cart cartProducts={filterProductsForCart(this.state.products)} />
//       </div>
//     );
//   }
// }







function ProductListingPage(props) {

  const [products, updateProducts] = useState([]);

  const onQuantityChange = (quantity, productId) => {
    const updatedProducts = products.map((product) => product.pid === productId ? { ...product, quantity } : product);
    updateProducts(updatedProducts);
  }

  const onAddToCart = (productId) => {
    updateProducts(products.map(product => {
      return product.pid === productId && !product.isInCart ? { ...product, isInCart: true } : product
    }))
  }

  const fetchAndUpdateProducts = async () => {
    const response = await fetch('./data/products.json');
    const newProductsData = await response.json();
    updateProducts(newProductsData);
  }

  useEffect(() => {
    fetchAndUpdateProducts();
  }, []);

  return (
    <div className="shopping-cart">
      <ProductList products={products} onQuantityChange={onQuantityChange} onAddToCart={onAddToCart} />
      <Cart products={filterProductsForCart(products)} />
    </div>
  );
}

export default ProductListingPage;
