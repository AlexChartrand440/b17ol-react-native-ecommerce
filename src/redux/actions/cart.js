import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getCustomerCart: (token) => {
    return {
      type: 'GET_CART',
      payload: http(token).get('/cart'),
    };
  },
  deleteCart: (item_id, token) => {
    return {
      type: 'DELETE_CART',
      payload: http(token).delete(`/cart/${item_id}`),
    };
  },
  resetDelete: () => {
    return {
      type: 'RESET_DELETE',
    };
  },
  updateQuantity: (item_id, token, data) => {
    return {
      type: 'UPDATE_CART',
      payload: http(token).patch(`/cart/${item_id}`, qs.stringify(data)),
    };
  },
  resetUpdate: () => {
    return {
      type: 'RESET_UPDATE',
    };
  },
};
