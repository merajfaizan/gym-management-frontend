import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const trainerApi = createApi({
  reducerPath: "trainerApi",
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
  tagTypes: ["Trainer"],
  endpoints: (builder) => ({
    addTrainer: builder.mutation({
      query: (trainer) => ({
        url: "/trainers",
        method: "POST",
        body: trainer,
      }),
      invalidatesTags: ["Trainer"],
    }),
    getAllTrainers: builder.query({
      query: () => "/trainers", // Endpoint to get all trainers
      providesTags: ["Trainer"],
    }),
    getTrainer: builder.query({
      query: (id) => `/trainers/${id}`,
      providesTags: ["Trainer"],
    }),
    updateTrainer: builder.mutation({
      query: ({ id, data }) => ({
        url: `/trainers/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Trainer"],
    }),
    deleteTrainer: builder.mutation({
      query: (id) => ({
        url: `/trainers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Trainer"],
    }),
  }),
});

export const {
  useAddTrainerMutation,
  useGetAllTrainersQuery,
  useDeleteTrainerMutation,
  useGetTrainerQuery,
  useUpdateTrainerMutation,
} = trainerApi;
