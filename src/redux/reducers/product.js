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

  relevantProductsData: [],
  relevantProductsIsLoading: false,
  relevantProductsIsError: false,
  relevantProductsAlertMsg: '',

  productByCategoryData: [],
  productByCategoryIsLoading: false,
  productByCategoryIsError: false,
  productByCategoryAlertMsg: '',

  allProductsData: [],
  allProductsPageInfo: {},
  allProductsIsLoading: false,
  allProductsIsError: false,
  allProductsAlertMsg: '',
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
        relevantProductsData: [],
        relevantProductsIsLoading: true,
      };
    }
    case 'GET_RELEVANT_PRODUCTS_PENDING': {
      return {
        ...state,
        relevantProductsIsLoading: true,
      };
    }
    case 'GET_RELEVANT_PRODUCTS_REJECTED': {
      return {
        ...state,
        relevantProductsIsLoading: false,
        relevantProductsIsError: true,
        relevantProductsAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_RELEVANT_PRODUCTS_FULFILLED': {
      return {
        ...state,
        relevantProductsIsLoading: false,
        relevantProductsIsError: false,
        relevantProductsData: action.payload.data.data,
      };
    }
    case 'GET_PRODUCT_BY_CATEGORY_PENDING': {
      return {
        ...state,
        productByCategoryIsLoading: true,
      };
    }
    case 'GET_PRODUCT_BY_CATEGORY_REJECTED': {
      return {
        ...state,
        productByCategoryIsLoading: false,
        productByCategoryIsError: true,
        productByCategoryAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_PRODUCT_BY_CATEGORY_FULFILLED': {
      return {
        ...state,
        productByCategoryIsLoading: false,
        productByCategoryIsError: false,
        productByCategoryData: action.payload.data.data.items,
      };
    }
    case 'RESET_CATEGORY': {
      return {
        ...state,
        productByCategoryIsLoading: true,
        productByCategoryIsError: false,
        productByCategoryData: [],
      };
    }
    case 'GET_ALL_PRODUCTS_PENDING': {
      return {
        ...state,
        allProductsIsLoading: true,
      };
    }
    case 'GET_ALL_PRODUCTS_REJECTED': {
      return {
        ...state,
        allProductsIsLoading: false,
        allProductsIsError: true,
        allProductsAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_ALL_PRODUCTS_FULFILLED': {
      return {
        ...state,
        allProductsIsLoading: false,
        allProductsIsError: false,
        allProductsData: action.payload.data.data,
        allProductsPageInfo: action.payload.data.pageInfo,
      };
    }
    case 'RESET_ALL_PRODUCTS': {
      return {
        ...state,
        allProductsData: [],
        allProductsPageInfo: {},
        allProductsIsLoading: false,
        allProductsIsError: false,
      };
    }
    default: {
      return state;
    }
  }
};
