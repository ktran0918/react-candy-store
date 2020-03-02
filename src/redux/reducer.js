import { combineReducers } from 'redux';

import {
  RECEIVE_PRODUCTS,
  SUBTRACT_PRODUCT_FROM_STORE,
  ADD_PRODUCT_TO_STORE,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
  CHECKOUT_CART
} from './actions';

function productsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return [...action.products, ...state];

    case SUBTRACT_PRODUCT_FROM_STORE:
      const addedProduct = action.product;
      return state.map(product =>
        product.id === addedProduct.id ? {
          ...product,
          inStock: product.inStock - addedProduct.addedQuantity
        } : product
      );

    case ADD_PRODUCT_TO_STORE:
      const removedProduct = action.product;
      return state.map(product =>
        product.id === removedProduct.id ? {
          ...product,
          inStock: product.inStock + removedProduct.addedQuantity
        } : product
      );

    default:
      return state;
  }
}

function cartReducer(state = [], action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      let addedProduct = action.product;
      let productsInCart = state.map(item => {
        if (addedProduct && item.id === addedProduct.id) {
          const updatedItem = {
            ...addedProduct,
            addedQuantity: item.addedQuantity + addedProduct.addedQuantity,
            totalCost: item.totalCost + addedProduct.totalCost
          };
          addedProduct = null;

          return updatedItem;
        }
        else { return item; }
      });

      if (addedProduct) {
        productsInCart.push(addedProduct);
      }

      return productsInCart;

    case REMOVE_PRODUCT_FROM_CART:
      return state.filter(product =>
        product.id !== action.product.id
      );

    case CHECKOUT_CART:
      return [];

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

export default rootReducer;