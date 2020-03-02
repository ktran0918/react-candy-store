import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from '@emotion/styled';

import { getProducts } from "../redux/selectors";

import Product from './Product';

const StoreContent = styled.main`
  width: 70%;
  margin: auto;
`;

export default function Store() {
  const products = useSelector(getProducts);

  return (
    <StoreContent>
      {products.map(product =>
        <Product key={product.id} data={product} />
      )}
    </StoreContent>
  );
}