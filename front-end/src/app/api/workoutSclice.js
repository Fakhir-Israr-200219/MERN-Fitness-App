import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutApi = createApi({
  reducerPath: "workoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/workout",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Fetch all workouts for the logged-in user
    getWorkouts: builder.query({
        query: ({ category } = {}) => `/user${category ? `?category=${category}` : ""}`,
    }),

    // Fetch a single workout by ID
    getWorkoutById: builder.query({
      query: (id) => `/${id}`,
    }),

    // Add a new workout (with optional image)
    addWorkout: builder.mutation({
      query: (formData) => ({
        url: "/add",
        method: "POST",
        body: formData,
        formData: true, // Important for file upload
      }),
    }),

    // Update a workout
    updateWorkout: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: formData,
      }),
    }),

    // Delete a workout
    deleteWorkout: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetWorkoutsQuery,
  useGetWorkoutByIdQuery,
  useAddWorkoutMutation,
  useUpdateWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutApi;
