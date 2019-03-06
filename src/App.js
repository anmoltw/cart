import React, { Fragment, useState } from 'react';
import CoolCart from './CoolCart';
import useLocalStorage from './useLocalStorage';

const productCategories = ['apparels', 'footwear'];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0]);

  const products = useLocalStorage({ storeAs: 'cartProducts', url: 'http://localhost:5000/apparels', initValue: [] });

  const handleCategorySelection = e => {
    setSelectedCategory(e.target.value);
  };

  return (
    <Fragment>
      <CoolCart products={products} />
    </Fragment>
  );
};

export default App;