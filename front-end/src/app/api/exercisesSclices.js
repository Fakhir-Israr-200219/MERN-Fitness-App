import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const exerciseApi = createApi({
  reducerPath: 'exerciseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/exercises', 
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createExercise: builder.mutation({
      query: (exerciseData) => ({
        url: '/',
        method: 'POST',
        body: exerciseData,
      }),
    }),
    getExercisesByUser: builder.query({
      query: (userId) => `/user/${userId}`,
    }),
    getExerciseById: builder.query({
      query: (id) => `/${id}`,
    }),
    updateExercise: builder.mutation({
      query: ({ id, exerciseData }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: exerciseData,
      }),
    }),
    deleteExercise: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { 
  useCreateExerciseMutation, 
  useGetExercisesByUserQuery, 
  useGetExerciseByIdQuery, 
  useUpdateExerciseMutation, 
  useDeleteExerciseMutation 
} = exerciseApi;


