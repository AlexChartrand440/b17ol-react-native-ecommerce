/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import auth from './auth';
import product from './product';
import category from './category';
import cart from './cart';
import profile from './profile';

export default combineReducers({
  auth,
  product,
  category,
  cart,
  profile,
});
