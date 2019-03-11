import React, { Fragment, useState } from 'react';
import CoolCart from './CoolCart';
import useLocalStorage from './useLocalStorage';

const App = () => {
  const products = useLocalStorage({
    storeAs: 'cartProducts',
    url: 'http://localhost:5000/apparels',
    initValue: []
  });

  return (
    <Fragment>
      <CoolCart products={products} />
    </Fragment>
  );
};

export default App;