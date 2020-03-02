import React from 'react';
import styled from "@emotion/styled";
import { removeFromCart, addToStore } from '../redux/actions';
import { useDispatch } from 'react-redux';

const ProductContent = styled.section`
  padding: 10px 20px;
  border-top: 1px solid gray;

  img {
    max-width: 100px;
    display: inline-block;
    margin-right: 20px;
  }
`;

const ProductInfo = styled.div`
  display: inline-block;
`;

export default function Product(props) {
  const dispatch = useDispatch();
  const { id, name, price, addedQuantity, totalCost } = props.product;

  const removeFromCartOnSubmit = event => {
    event.preventDefault();
    const removedProduct = {
      id,
      addedQuantity
    };

    dispatch(addToStore(removedProduct));
    dispatch(removeFromCart(removedProduct));
  };

  return (
    <ProductContent>
      <ProductInfo>
        <h3>{name}</h3>
        <p><strong>Unit Price</strong>: {price}</p>
        <p><strong>Quantity</strong>: {addedQuantity}</p>
        <p><strong>Total Price</strong>: {totalCost}</p>
        <button onClick={removeFromCartOnSubmit}>Remove from cart</button>
      </ProductInfo>
    </ProductContent>
  );
}