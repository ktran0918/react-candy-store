export function getProducts(state) {
  return state.products;
}

export function getProductsInCart(state) {
  return state.cart;
}

export function getCartTotal(state) {
  const products = getProductsInCart(state);

  return products.reduce((total, product) =>
    total + product.totalCost,
    0
  );
}