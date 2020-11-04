/* eslint-disable prettier/prettier */
const initialState = {
  newProductsData: [],
  newProductsIsLoading: false,
  newProductsIsError: false,
  newProductsAlertMsg: '',

  popularProductsData: [],
  popularProductsIsLoading: false,
  popularProductsIsError: false,
  popularProductsAlertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_NEW_PRODUCTS_PENDING': {
      return {
        ...state,
        newProductsIsLoading: true,
      };
    }
    case 'GET_NEW_PRODUCTS_REJECTED': {
      return {
        ...state,
        newProductsIsLoading: false,
        newProductsIsError: true,
        newProductsAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_NEW_PRODUCTS_FULFILLED': {
      return {
        ...state,
        newProductsIsLoading: false,
        newProductsIsError: false,
        newProductsData: action.payload.data.data,
      };
    }
    case 'GET_POPULAR_PRODUCTS_PENDING' : {
      return {
        ...state,
        popularProductsIsLoading: true,
      };
    }
    case 'GET_POPULAR_PRODUCTS_REJECTED': {
      return {
        ...state,
        popularProductsIsLoading: false,
        popularProductsIsError: true,
        popularProductsAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_POPULAR_PRODUCTS_FULFILLED': {
      return {
        ...state,
        popularProductsIsLoading: false,
        popularProductsIsError: false,
        popularProductsData: action.payload.data.data,
      };
    }
    default: {
      return state;
    }
  }
};
