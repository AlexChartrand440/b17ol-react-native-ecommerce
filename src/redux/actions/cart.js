import http from '../../helpers/http';

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
};
