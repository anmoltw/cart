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

function ProductListingPage(props) {

  const [products] = useState(productsData);

  return (
    <div className='cart'>
      <ProductList products={products} />
      <Cart />
    </div>
  );
}



export default ProductListingPage;












// function ProductListingPage(props) {

//   const [products, updateProducts] = useState([]);


//   return (
//     <div className="shopping-cart">
//       <ProductList products={products}  />
//       <Cart products={filterProductsForCart(products)} />
//     </div>
//   );
// }













//   const onQuantityChange = (quantity, productId) => {
//     const updatedProducts = products.map((product) => product.pid === productId ? { ...product, quantity } : product);
//     updateProducts(updatedProducts);
//   }

//   const onAddToCart = (productId) => {
//     updateProducts(products.map(product => {
//       return product.pid === productId && !product.isInCart ? { ...product, isInCart: true } : product
//     }))
//   }

//   const fetchAndUpdateProducts = async () => {
//     const response = await fetch('./data/products.json');
//     const newProductsData = await response.json();
//     updateProducts(newProductsData);
//   }

//   useEffect(() => {
//     fetchAndUpdateProducts();
//   }, []);







//   // onAddToCart = (productId) => {
//   //   this.setState(prevState => ({
//   //     products: prevState.products.map(product => {
//   //       return product.pid === productId && !product.isInCart ? { ...product, isInCart: true } : product
//   //     })
//   //   }));
//   // }

//   // onQuantityChange = (quantity, productId) => {
//   //   this.setState(state => ({
//   //     products: state.products.map(product => product.pid === productId ? { ...product, quantity } : product)
//   //   }));
//   // }

//   // /** lifecycle methods**/
//   // // fetchAndUpdateItems = async () => {
//   // //   const response = await fetch('./data/products.json');
//   // //   const newProductsData = await response.json();
//   // //   this.setState({ products: newProductsData });
//   // // }

//   // // componentDidMount() {
//   // //   this.fetchAndUpdateItems();
//   // // }

