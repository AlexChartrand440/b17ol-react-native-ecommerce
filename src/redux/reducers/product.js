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

  detailProductData: [],
  detailProductIsLoading: false,
  detailProductIsError: false,
  detailProductAlertMsg: '',
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
    case 'GET_POPULAR_PRODUCTS_PENDING': {
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
    case 'GET_DETAIL_PRODUCT_PENDING': {
      return {
        ...state,
        detailProductIsLoading: true,
      };
    }
    case 'GET_DETAIL_PRODUCT_REJECTED': {
      return {
        ...state,
        detailProductIsLoading: false,
        detailProductIsError: true,
        detailProductAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_DETAIL_PRODUCT_FULFILLED': {
      return {
        ...state,
        detailProductIsLoading: false,
        detailProductIsError: false,
        detailProductData: action.payload.data.data,
      };
    }
    case 'RESET_DETAIL_PRODUCT': {
      return {
        ...state,
        detailProductData: [],
      };
    }
    default: {
      return state;
    }
  }
};
