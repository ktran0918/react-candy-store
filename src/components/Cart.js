import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from '@emotion/styled';

import { getProductsInCart, getCartTotal } from "../redux/selectors";

import CartProduct from './CartProduct';
import { checkoutCart } from "../redux/actions";

const CartContent = styled.main`
  position: fixed;
  bottom: 0;
  right: ${props => props.shown ? '0' : '-500px'};
  height: 90%;
  width: 30%;
  margin: auto;
  padding: 5px 10px;
  overflow-y: auto;

  border-top: 1px solid gray;
  border-left: 1px solid gray;
  background-color: gainsboro;
  box-shadow: -1px -1px 10px 0 gray;
  transition-duration: .5s;

  h3 {
    text-align: center;
  }
`;

const ToggleCart = styled.a`
  position: fixed;
  top: 10px;
  right: 10px;
  cursor: pointer;
  text-decoration: underline;
  color: blue;
`;

const Checkout = styled.section`
  padding: 10px 20px;
  border-top: 1px solid gray;

  button {
    margin-left: 5px;
  }
`;

export default function Cart() {
  const products = useSelector(getProductsInCart);
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);

  return (
    <React.Fragment>
      <ToggleCart onClick={event => setShowCart(!showCart)}>
        Cart ({products.length})
      </ToggleCart>
      <CartContent shown={showCart}>
        <h3>Items in cart:</h3>
        {products.map(product =>
          <CartProduct key={product.id} product={product} />
        )}

        <Checkout>
          <p><strong>Checkout total</strong>: {useSelector(getCartTotal)}</p>
          <button onClick={event => dispatch(checkoutCart())}>Checkout</button>
        </Checkout>
      </CartContent>
    </React.Fragment>
  );
}