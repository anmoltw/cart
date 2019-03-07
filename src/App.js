import React, { Fragment, useState } from 'react';
import CoolCart from './CoolCart';

const productCategories = ['apparels', 'footwear'];

function App() {

  const [selectedCategory, updateSelectedCategory] = useState(productCategories[0]);

  const handleCategorySelection = e => {
    const newCategory = e.target.value;
    updateSelectedCategory(newCategory);
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
}

export default App;
