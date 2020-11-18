import {combineReducers} from 'redux';

import auth from './auth';
import product from './product';
import category from './category';
import cart from './cart';
import profile from './profile';
import shippingAddress from './shippingAddress';
import order from './order';

export default combineReducers({
  auth,
  product,
  category,
  cart,
  profile,
  shippingAddress,
  order,
});
