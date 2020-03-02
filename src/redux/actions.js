export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const SUBTRACT_PRODUCT_FROM_STORE = 'SUBTRACT_PRODUCT_FROM_STORE';
export const ADD_PRODUCT_TO_STORE = 'ADD_PRODUCT_TO_STORE';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const CHECKOUT_CART = 'CHECKOUT_CART';

export function receiveProducts(products) {
  return {
    type: RECEIVE_PRODUCTS,
    products
  };
}

export function subtractFromStore(product) {
  return { type: SUBTRACT_PRODUCT_FROM_STORE, product };
}

export function addToStore(product) {
  return { type: ADD_PRODUCT_TO_STORE, product };
}

export function addToCart(product) {
  return { type: ADD_PRODUCT_TO_CART, product };
}

export function removeFromCart(product) {
  return { type: REMOVE_PRODUCT_FROM_CART, product };
}

export function checkoutCart() {
  return { type: CHECKOUT_CART };
}