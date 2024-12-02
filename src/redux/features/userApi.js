import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create an RTK Query API slice
export const userApi = createApi({
  reducerPath: 'userApi', // Unique name for the API slice
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gym-management-backend-kappa.vercel.app' }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: 'register', 
        method: 'POST',
        body: userData, 
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: 'login', 
        method: 'POST',
        body: userData, 
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = userApi;
