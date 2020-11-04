/* eslint-disable prettier/prettier */
const initialState = {
  cartData: [],
  cartSummary: 0,
  cartIsLoading: false,
  cartIsError: false,
  cartAlertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CART_PENDING': {
      return {
        ...state,
        cartIsLoading: true,
      };
    }
    case 'GET_CART_REJECTED': {
      return {
        ...state,
        cartIsLoading: false,
        cartIsError: true,
        cartAlertMsg: action.payload.response.data.message,
        cartData: [],
        cartSummary: 0,
      };
    }
    case 'GET_CART_FULFILLED': {
      return {
        ...state,
        cartIsLoading: false,
        cartIsError: false,
        cartData: action.payload.data.data,
        cartSummary: action.payload.data.summary,
      };
    }
    default: {
      return state;
    }
  }
};
