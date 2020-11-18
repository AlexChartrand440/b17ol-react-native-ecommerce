const initialState = {
  orderData: [],
  orderIsLoading: false,
  orderIsError: false,
  orderAlertMsg: '',

  orderDetailData: [],
  orderDetailIsLoading: false,
  orderDetailIsError: false,
  orderDetailAlertMsg: '',

  submitIsLoading: false,
  submitIsError: false,
  submitAlert: '',
  isSubmit: false,
  submitData: {},

  submitDetailIsLoading: false,
  submitDetailIsError: false,
  submitDetailAlert: '',
  isSubmitDetail: false,
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
    case 'DESTROY_ORDER': {
      return initialState;
    }
    case 'SUBMIT_ORDER_PENDING': {
      return {
        ...state,
        submitIsLoading: true,
        submitAlert: 'Submit order in progress. Please wait..',
      };
    }
    case 'SUBMIT_ORDER_REJECTED': {
      return {
        ...state,
        submitIsLoading: false,
        submitIsError: true,
        submitAlert: action.payload.response.data.message,
      };
    }
    case 'SUBMIT_ORDER_FULFILLED': {
      return {
        ...state,
        submitIsLoading: false,
        submitIsError: false,
        isSubmit: true,
        submitAlert: 'Successfully submit new order',
        submitData: action.payload.data.data,
      };
    }
    case 'RESET_SUBMIT': {
      return {
        ...state,
        isSubmit: false,
        submitData: {},
      };
    }
    case 'SUBMIT_ORDER_DETAIL_PENDING': {
      return {
        ...state,
        submitDetailIsLoading: true,
        submitDetailAlert: 'Submit order detail in progress. Please wait..',
      };
    }
    case 'SUBMIT_ORDER_DETAIL_REJECTED': {
      return {
        ...state,
        submitDetailIsLoading: false,
        submitDetailIsError: true,
        submitDetailAlert: action.payload.response.data.message,
      };
    }
    case 'SUBMIT_ORDER_DETAIL_FULFILLED': {
      return {
        ...state,
        submitDetailIsLoading: false,
        submitDetailIsError: false,
        isSubmitDetail: true,
        submitDetailAlert: 'Successfully submit order detail',
      };
    }
    default: {
      return state;
    }
  }
};
