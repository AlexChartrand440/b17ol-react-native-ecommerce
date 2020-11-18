/* eslint-disable prettier/prettier */
import http from '../../helpers/http';

export default {
  getCategory: () => ({
    type: 'GET_CATEGORY',
    payload: http().get('/public/category'),
  }),
  destroy: () => ({
    type: 'DESTROY_CATEGORY',
  }),
};
