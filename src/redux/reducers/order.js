const initialState = {
  orderData: [],
  orderIsLoading: false,
  orderIsError: false,
  orderAlertMsg: '',

  orderDetailData: [],
  orderDetailIsLoading: false,
  orderDetailIsError: false,
  orderDetailAlertMsg: '',
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
    case 'GET_ORDER_DETAIL_PENDING': {
      return {
        ...state,
        orderDetailIsLoading: true,
      };
    }
    case 'GET_ORDER_DETAIL_REJECTED': {
      return {
        ...state,
        orderDetailIsLoading: false,
        orderDetailIsError: true,
        orderDetailAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_ORDER_DETAIL_FULFILLED': {
      return {
        ...state,
        orderDetailIsLoading: false,
        orderDetailIsError: false,
        orderDetailData: action.payload.data.data,
      };
    }
    default: {
      return state;
    }
  }
};
