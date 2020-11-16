import http from '../../helpers/http';

export default {
  getProfile: (token) => {
    return {
      type: 'GET_PROFILE',
      payload: http(token).get('/costumer'),
    };
  },
  editProfile: (form, token) => ({
    type: 'EDIT_PROFILE',
    payload: http(token).patch('/costumer', form),
  }),
  resetEdit: () => ({
    type: 'RESET_EDIT',
  }),
};
