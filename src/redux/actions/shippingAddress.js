import http from '../../helpers/http';
import qs from 'querystring';

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
  addShippingAddress: (data, token) => ({
    type: 'ADD_ADDRESS',
    payload: http(token).post('/shipping_address', qs.stringify(data)),
  }),
  resetAdd: () => ({
    type: 'RESET_ADD',
  }),
};
