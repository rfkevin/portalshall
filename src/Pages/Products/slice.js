import {  api  } from '../../app/api';

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => '/products',
    }),
  }),
  overrideExisting: false,
})

export const { useGetProductsQuery } = productsApi
