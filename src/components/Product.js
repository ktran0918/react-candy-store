import React, { useState } from 'react';
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";

import { subtractFromStore, addToCart } from "../redux/actions";

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

const AddToCartForm = styled.form`
  input {
    max-width: 40px;
    margin-right: 10px;
  }
`;

export default function Product(props) {
  const dispatch = useDispatch();
  const [num, setNum] = useState(0);
  const { id, photoUrl, name, price, inStock } = props.product;

  const addToCartOnChange = event => {
    setNum(Number(event.target.value));
  };

  const addToCartFormOnSubmit = event => {
    event.preventDefault();
    if (num === 0) {
      alert('Please select a quantity greater than 0');

    } else if (num > inStock) {
      alert('Quantity added to cart cannot exceed quantity in stock!');

    } else {
      const addedProduct = {
        id,
        name,
        price,
        addedQuantity: num,
        totalCost: num * price
      };

      dispatch(subtractFromStore(addedProduct));
      dispatch(addToCart(addedProduct));
      setNum(0);
    }
  };

  return (
    <ProductContent>
      <img src={photoUrl} alt={name} />

      <ProductInfo>
        <h3>{name}</h3>
        <p><strong>Price</strong>: {price}</p>
        <p><strong>In stock</strong>: {inStock ? inStock : 'out of stock'}</p>

        <AddToCartForm onSubmit={addToCartFormOnSubmit}>
          <input
            type="number"
            min={num}
            value={num}
            onChange={addToCartOnChange}
          />
          <button disabled={!inStock}>Add to cart</button>
        </AddToCartForm>
      </ProductInfo>
    </ProductContent>
  );
}