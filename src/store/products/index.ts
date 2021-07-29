import { IProductInitialState, IProductAction } from './types';

const INITIAL_STATE: IProductInitialState = {
  products: []
}

function product(state = INITIAL_STATE, action: IProductAction) {
  console.log(action)
  if (action.type === 'TOGGLE_PRODUCT'){
    return {
      ...state,
      product: action.product
    }
  }
  if (action.type === 'SET_PRODUCTS'){
    return {
      ...state,
      products: action.products
    }
  }
  return state
}

export default product