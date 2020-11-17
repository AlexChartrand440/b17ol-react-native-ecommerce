const initialState = {
  allAddressData: [],
  allAddressIsLoading: false,
  allAddressIsError: false,
  allAddressAlertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_ADDRESS_PENDING': {
      return {
        ...state,
        allAddressIsLoading: true,
      };
    }
    case 'GET_ALL_ADDRESS_REJECTED': {
      return {
        ...state,
        allAddressIsLoading: false,
        allAddressIsError: true,
        allAddressAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_ALL_ADDRESS_FULFILLED': {
      return {
        ...state,
        allAddressIsLoading: false,
        allAddressIsError: false,
        allAddressData: action.payload.data.success
          ? action.payload.data.data
          : [],
      };
    }
    default: {
      return state;
    }
  }
};
