import http from '../../helpers/http';

export default {
  getAllAddress: (token) => ({
    type: 'GET_ALL_ADDRESS',
    payload: http(token).get('/shipping_address'),
  }),
  getProvinces: () => ({
    type: 'GET_PROVINCES',
    payload: http().get('/public/province'),
  }),
  getCities: () => ({
    type: 'GET_CITIES',
    payload: http().get('/public/city'),
  }),
};
