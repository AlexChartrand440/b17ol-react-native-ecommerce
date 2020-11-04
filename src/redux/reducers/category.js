/* eslint-disable prettier/prettier */
const initialState = {
  categoryData: [],
  categoryIsLoading: false,
  categoryIsError: false,
  categoryAlertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORY_PENDING': {
      return {
        ...state,
        categoryIsLoading: true,
      };
    }
    case 'GET_CATEGORY_REJECTED': {
      return {
        ...state,
        categoryIsLoading: false,
        categoryIsError: true,
        categoryAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_CATEGORY_FULFILLED': {
      return {
        ...state,
        categoryIsLoading: false,
        categoryIsError: false,
        categoryData: action.payload.data.data,
      };
    }
    default: {
      return state;
    }
  }
};
