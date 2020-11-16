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
  register: (data) => ({
    type: 'REGISTER',
    payload: http().post('/public/costumer', qs.stringify(data)),
  }),
  resetRegister: () => ({
    type: 'RESET_REGISTER',
  }),
};
