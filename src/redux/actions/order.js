import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getOrder: (token) => ({
    type: 'GET_ORDER',
    payload: http(token).get('/order'),
  }),
  getOrderDetail: (id, token) => ({
    type: 'GET_ORDER_DETAIL',
    payload: http(token).get(`/order/detail/${id}`),
  }),
  destroy: () => ({
    type: 'DESTROY_ORDER',
  }),
  submitOrder: (data, token) => ({
    type: 'SUBMIT_ORDER',
    payload: http(token).post('/order', qs.stringify(data)),
  }),
  resetSubmit: () => ({
    type: 'RESET_SUBMIT',
  }),
  submitOrderDetail: (data, token) => ({
    type: 'SUBMIT_ORDER_DETAIL',
    payload: http(token).post('/order/detail', qs.stringify(data)),
  }),
};
