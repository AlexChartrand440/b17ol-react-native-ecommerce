import http from '../../helpers/http';

export default {
  getOrder: (token) => ({
    type: 'GET_ORDER',
    payload: http(token).get('/order'),
  }),
  getOrderDetail: (id, token) => ({
    type: 'GET_ORDER_DETAIL',
    payload: http(token).get(`/order/detail/${id}`),
  }),
};
