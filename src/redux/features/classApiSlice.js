import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const classApi = createApi({
  reducerPath: "classApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    prepareHeaders: (headers, { getState }) => {
      const { user, token } = getState().auth; // Retrieve user data from the auth slice
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Class"],
  endpoints: (builder) => ({
    addClass: builder.mutation({
      query: (newClass) => ({
        url: "/classes",
        method: "POST",
        body: newClass,
      }),
      invalidatesTags: ["Class"],
    }),
    getAllClasses: builder.query({
      query: () => "/classes",
      providesTags: ["Class"],
    }),
    // Get class details
    getClassDetails: builder.query({
      query: (id) => `/classes/${id}`,
      providesTags: ["Class"],
    }),
  }),
});

export const { useAddClassMutation, useGetAllClassesQuery, useGetClassDetailsQuery } = classApi;
