import React, { useState } from 'react';
import styled from "@emotion/styled";
// import { useDispatch } from "react-redux";

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
  const [num, setNum] = useState(0);
  const { photoUrl, name, price, inStock } = props.data;

  const addToCartFormOnSubmit = event => {
    event.preventDefault();
    console.log(`Added ${num} ${name}(s) to cart`);
    setNum(0);
  };

  return (
    <ProductContent>
      <img src={photoUrl} alt={name} />

      <ProductInfo>
        <h3>{name}</h3>
        <p><strong>Price</strong>: {price}</p>
        <p><strong>Quantity</strong>: {inStock}</p>

        <AddToCartForm onSubmit={addToCartFormOnSubmit}>
          <input
            type="number"
            value={num}
            onChange={event => setNum(event.target.value)}
          />
          <button>Add to cart</button>
        </AddToCartForm>
      </ProductInfo>
    </ProductContent>
  );
}