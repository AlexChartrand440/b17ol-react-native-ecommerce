import http from '../../helpers/http';

export default {
  getOrder: (token) => ({
    type: 'GET_ORDER',
    payload: http(token).get('/order'),
  }),
};
