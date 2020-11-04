/* eslint-disable prettier/prettier */
import http from '../../helpers/http';

export default {
  getProfile: (token) => {
    return {
      type: 'GET_PROFILE',
      payload: http(token).get('/costumer'),
    };
  },
};