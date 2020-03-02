import React from 'react';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

import { receiveProducts } from "./redux/actions";
import products from './data/products';
import Store from './components/Store';

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
    </div>
  );
}

export default App;
