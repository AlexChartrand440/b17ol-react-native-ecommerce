/* eslint-disable prettier/prettier */
import http from '../../helpers/http';
import qs from 'querystring';

export default {
  login: (data) => ({
    type: 'LOGIN',
    payload: http().post('/auth/customer/login', qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};