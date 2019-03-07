import React, { Fragment } from 'react';
import CoolCart from './CoolCart';

const productCategories = ['apparels', 'footwear'];

class App extends React.Component {
  state = {
    selectedCategory: productCategories[0]
  };

  handleCategorySelection = e => {
    this.setState({
      selectedCategory: e.target.value
    });
  };

  render() {
    return (
      <Fragment>
        <select onChange={this.handleCategorySelection}>
          {productCategories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <CoolCart selectedCategory={this.state.selectedCategory} />
      </Fragment>
    );
  }
}

export default App;
