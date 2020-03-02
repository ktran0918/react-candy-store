import { combineReducers } from 'redux';

import {
  RECEIVE_PRODUCTS
} from './actions';

function productsReducer(state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return [...action.products, ...state];
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  products: productsReducer
});

export default rootReducer;