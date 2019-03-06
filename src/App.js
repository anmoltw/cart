import React, { Fragment, useState } from 'react';
import CoolCart from './CoolCart';

const productCategories = ['apparels', 'footwear'];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(productCategories[0]);

  const handleCategorySelection = e => {
    setSelectedCategory(e.target.value);
  };

  return (
    <Fragment>
      <select onChange={handleCategorySelection}>
        {productCategories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <CoolCart selectedCategory={selectedCategory} />
    </Fragment>
  );
};

export default App;