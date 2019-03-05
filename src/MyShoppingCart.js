import React, { useState } from 'react';
import ProductListingPage from './ProductListingPage';

const productTypes = ['apparels', 'footwear'];

function MyShoppingCart() {

  const [selectedProductType, updateSelectedProductType] = useState(productTypes[0]);


  const onProductTypeChange = (newValue) => {
    updateSelectedProductType(newValue);
  }

  return (
    <div>
      <select onChange={e => onProductTypeChange(e.target.value)}>
        {productTypes.map(type => <option>{type}</option>)}
      </select>
      <ProductListingPage selectedProductType={selectedProductType} />
    </div>
  );
}



export default MyShoppingCart;