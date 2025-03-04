import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardioApi = createApi({
  reducerPath: 'cardioApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/cardio',
    prepareHeaders: (headers, { getState }) => {
        const token = localStorage.getItem('token');// Assuming token is stored in Redux auth slice
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    addCardio: builder.mutation({
      query: (cardioData) => ({
        url: '/add',
        method: 'POST',
        body: cardioData,
      }),
    }),
    getUserCardios: builder.query({
      query: (userId) => `/user/${userId}`,
    }),
    deleteCardio: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useAddCardioMutation, useGetUserCardiosQuery, useDeleteCardioMutation } = cardioApi;
