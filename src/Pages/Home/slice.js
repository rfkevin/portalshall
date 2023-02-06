import {  api  } from '../../app/api';

const newsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getNews: build.query({
      query: () => '/news',
    }),
  }),
  overrideExisting: false,
})

export const { useGetNewsQuery } = newsApi
