const initialState = {
  allAddressData: [],
  allAddressIsLoading: false,
  allAddressIsError: false,
  allAddressAlertMsg: '',

  provincesData: [],
  provincesIsLoading: false,
  provincesIsError: false,
  provincesAlertMsg: '',

  citiesData: [],
  citiesIsLoading: false,
  citiesIsError: false,
  citiesAlertMsg: '',

  addIsLoading: false,
  addIsError: false,
  addAlert: '',
  isAdd: false,

  editIsLoading: false,
  editIsError: false,
  editAlert: '',
  isEdit: false,

  addressData: [],
  addressIsLoading: false,
  addressIsError: false,
  addressAlertMsg: '',

  primaryData: [],
  primaryIsLoading: false,
  primaryIsError: false,
  primaryAlertMsg: '',
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
    case 'GET_PROVINCES_PENDING': {
      return {
        ...state,
        provincesIsLoading: true,
      };
    }
    case 'GET_PROVINCES_REJECTED': {
      return {
        ...state,
        provincesIsLoading: false,
        provincesIsError: true,
        provincesAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_PROVINCES_FULFILLED': {
      return {
        ...state,
        provincesIsLoading: false,
        provincesIsError: false,
        provincesData: action.payload.data.data,
      };
    }
    case 'GET_CITIES_PENDING': {
      return {
        ...state,
        citiesIsLoading: true,
      };
    }
    case 'GET_CITIES_REJECTED': {
      return {
        ...state,
        citiesIsLoading: false,
        citiesIsError: true,
        citiesAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_CITIES_FULFILLED': {
      return {
        ...state,
        citiesIsLoading: false,
        citiesIsError: false,
        citiesData: action.payload.data.data,
      };
    }
    case 'ADD_ADDRESS_PENDING': {
      return {
        ...state,
        addIsLoading: true,
        addAlert: 'Add new shipping address in progress. Please wait..',
      };
    }
    case 'ADD_ADDRESS_REJECTED': {
      return {
        ...state,
        addIsLoading: false,
        addIsError: true,
        addAlert: action.payload.response.data.message,
      };
    }
    case 'ADD_ADDRESS_FULFILLED': {
      return {
        ...state,
        addIsLoading: false,
        addIsError: false,
        isAdd: true,
        addAlert: 'Successfully add new shipping address',
      };
    }
    case 'RESET_ADD': {
      return {
        ...state,
        isAdd: false,
      };
    }
    case 'RESET_ADDRESS_DATA': {
      return {
        ...state,
        addressData: [],
      };
    }
    case 'EDIT_ADDRESS_PENDING': {
      return {
        ...state,
        editIsLoading: true,
        editAlert: 'Edit shipping address in progress. Please wait..',
      };
    }
    case 'EDIT_ADDRESS_REJECTED': {
      return {
        ...state,
        editIsLoading: false,
        editIsError: true,
        editAlert: action.payload.response.data.message,
      };
    }
    case 'EDIT_ADDRESS_FULFILLED': {
      return {
        ...state,
        editIsLoading: false,
        editIsError: false,
        isEdit: true,
        editAlert: 'Successfully edit shipping address',
      };
    }
    case 'RESET_EDIT': {
      return {
        ...state,
        isEdit: false,
      };
    }
    case 'GET_ADDRESS_PENDING': {
      return {
        ...state,
        addressIsLoading: true,
      };
    }
    case 'GET_ADDRESS_REJECTED': {
      return {
        ...state,
        addressIsLoading: false,
        addressIsError: true,
        addressAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_ADDRESS_FULFILLED': {
      return {
        ...state,
        addressIsLoading: false,
        addressIsError: false,
        addressData: action.payload.data.data,
      };
    }
    case 'GET_PRIMARY_ADDRESS_PENDING': {
      return {
        ...state,
        primaryIsLoading: true,
      };
    }
    case 'GET_PRIMARY_ADDRESS_REJECTED': {
      return {
        ...state,
        primaryIsLoading: false,
        primaryIsError: true,
        primaryAlertMsg: action.payload.response.data.message,
      };
    }
    case 'GET_PRIMARY_ADDRESS_FULFILLED': {
      return {
        ...state,
        primaryIsLoading: false,
        primaryIsError: false,
        primaryData: action.payload.data.data,
      };
    }
    default: {
      return state;
    }
  }
};
