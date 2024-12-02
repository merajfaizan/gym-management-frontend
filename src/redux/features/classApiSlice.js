import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const classApi = createApi({
  reducerPath: "classApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://gym-management-backend-kappa.vercel.app",
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
    getAllClassesWithTrainees: builder.query({
      query: () => "/classes-with-trainees",
      providesTags: ["Class"],
    }),

    getClassesByDay: builder.query({
      query: () => "/classes/by-day",
      providesTags: ["Class"],
    }),
    getClassDetails: builder.query({
      query: (id) => `/classes/${id}`,
      providesTags: ["Class"],
    }),
    getBookedClassesByUser: builder.query({
      query: (userId) => `/booked-classes/${userId}`,
      providesTags: ["Class"],
    }),
    reserveClass: builder.mutation({
      query: ({ classId, userId }) => ({
        url: `/classes/${classId}/reserve`,
        method: "PUT",
        body: { userId },
      }),
    }),
  }),
});

export const {
  useAddClassMutation,
  useGetAllClassesQuery,
  useGetAllClassesWithTraineesQuery,
  useGetBookedClassesByUserQuery,
  useGetClassDetailsQuery,
  useGetClassesByDayQuery,
  useReserveClassMutation,
} = classApi;
