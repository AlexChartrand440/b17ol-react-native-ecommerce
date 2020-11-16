const initialState = {
  cartData: [],
  cartSummary: 0,
  cartIsLoading: false,
  cartIsError: false,
  cartAlertMsg: '',

  deleteIsLoading: false,
  deleteIsError: false,
  deleteAlert: '',
  isDelete: false,

  updateIsLoading: false,
  updateIsError: false,
  updateAlert: '',
  isUpdate: false,
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
    case 'DELETE_CART_PENDING': {
      return {
        ...state,
        deleteIsLoading: true,
        deleteAlert: 'Delete item from cart in progress. Please wait..',
      };
    }
    case 'DELETE_CART_REJECTED': {
      return {
        ...state,
        deleteIsLoading: false,
        deleteIsError: true,
        deleteAlert: action.payload.response.data.message,
      };
    }
    case 'DELETE_CART_FULFILLED': {
      return {
        ...state,
        deleteIsLoading: false,
        deleteIsError: false,
        isDelete: true,
        deleteAlert: 'Successfully delete item from cart',
      };
    }
    case 'RESET_DELETE': {
      return {
        ...state,
        isDelete: false,
      };
    }
    case 'UPDATE_CART_PENDING': {
      return {
        ...state,
        updateIsLoading: true,
        updateAlert: 'Update item quantity in progress. Please wait..',
      };
    }
    case 'UPDATE_CART_REJECTED': {
      return {
        ...state,
        updateIsLoading: false,
        updateIsError: true,
        updateAlert: action.payload.response.data.message,
      };
    }
    case 'UPDATE_CART_FULFILLED': {
      return {
        ...state,
        updateIsLoading: false,
        updateIsError: false,
        isUpdate: true,
        updateAlert: 'Successfully update item quantity',
      };
    }
    case 'RESET_UPDATE': {
      return {
        ...state,
        isUpdate: false,
      };
    }
    default: {
      return state;
    }
  }
};
