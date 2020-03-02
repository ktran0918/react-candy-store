import React from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { receiveProducts } from "./redux/actions";
import products from './data/products';
import Store from './components/Store';
import Cart from './components/Cart';

const StoreTitle = styled.h1`
  text-align: center;
`;

function App() {
  const dispatch = useDispatch();
  dispatch(receiveProducts(products));
  return (
    <div>
      <StoreTitle>Penny Candy Store</StoreTitle>
      <Store />
      <Cart />
    </div>
  );
}

export default App;
