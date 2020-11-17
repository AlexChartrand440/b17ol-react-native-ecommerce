import http from '../../helpers/http';

export default {
  getAllAddress: (token) => ({
    type: 'GET_ALL_ADDRESS',
    payload: http(token).get('/shipping_address'),
  }),
};
