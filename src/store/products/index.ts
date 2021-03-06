import { IProductInitialState, IProductAction } from './types';

const INITIAL_STATE: IProductInitialState = {
  products: [
    {
      id: 1,
      title: 'Curso ReactJs',
      value: 150,
      modules: [
        {
          id: 1,
          title: 'Modulo 1'
        },
        {
          id: 2,
          title: 'Modulo 2'
        },
        {
          id: 3,
          title: 'Modulo 3'
        },
        {
          id: 4,
          title: 'Modulo 4'
        },
      ]
    },
    {
      id: 2,
      title: 'Curso JavaScript',
      value: 100,
      modules: [
        {
          id: 1,
          title: 'Modulo 1'
        },
        {
          id: 2,
          title: 'Modulo 2'
        },
      ]
    },
    {
      id: 3,
      title: 'Curso ReactNative',
      value: 200,
      modules: [
        {
          id: 1,
          title: 'Modulo 1'
        },
        {
          id: 2,
          title: 'Modulo 2'
        },
        {
          id: 3,
          title: 'Modulo 3'
        },
      ]
    }
  ]
}

function product(state = INITIAL_STATE, action: IProductAction) {
  if (action.type === 'TOGGLE_PRODUCT'){
    return {
      ...state,
      product: action.product
    }
  }
  return state
}

export default product