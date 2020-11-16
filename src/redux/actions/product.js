import http from '../../helpers/http';

export default {
  getPopularProducts: () => ({
    type: 'GET_POPULAR_PRODUCTS',
    payload: http().get('/public/item?sort[rating]=desc&limit=10'),
  }),
  getNewProducts: () => ({
    type: 'GET_NEW_PRODUCTS',
    payload: http().get('/public/item?sort=desc&limit=10'),
  }),
  getDetailProduct: (id) => ({
    type: 'GET_DETAIL_PRODUCT',
    payload: http().get(`/public/item/${id}`),
  }),
  resetDetailProduct: () => ({
    type: 'RESET_DETAIL_PRODUCT',
  }),
  getRelevantProducts: (id) => ({
    type: 'GET_RELEVANT_PRODUCTS',
    payload: http().get(
      `/public/item?limit=10&search[category_id]=${id}&sort[rating]=desc`,
    ),
  }),
  getProductByCategory: (id) => ({
    type: 'GET_PRODUCT_BY_CATEGORY',
    payload: http().get(`/public/category/${id}`),
  }),
  resetCategory: () => ({
    type: 'RESET_CATEGORY',
  }),
  getAllProducts: (
    keyword = '',
    sortColumn = 'rating',
    sortOption = 'desc',
    page = 1,
  ) => ({
    type: 'GET_ALL_PRODUCTS',
    payload: http().get(
      `/public/item?limit=10&search=${keyword}&sort[${sortColumn}]=${sortOption}&page=${page}`,
    ),
  }),
  resetAllProducts: () => ({
    type: 'RESET_ALL_PRODUCTS',
  }),
};
