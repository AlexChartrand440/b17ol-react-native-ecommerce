const initialState = {
  orderData: [],
  orderIsLoading: false,
  orderIsError: false,
  orderAlertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ORDER_PENDING': {
      return {
        ...state,
        orderIsLoading: true,
      };
    }
    case 'GET_ORDER_REJECTED': {
      return {
        ...state,
        orderIsLoading: false,
        orderIsError: true,
        orderAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_ORDER_FULFILLED': {
      return {
        ...state,
        orderIsLoading: false,
        orderIsError: false,
        orderData: action.payload.data.data,
      };
    }
    default: {
      return state;
    }
  }
};
