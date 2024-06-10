import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  setFilteredStudents,
  setStudents,
} from '../Navbar/SearchPanel/SearchPanelSlice';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Students'],
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => '/students',
      onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          dispatch(setFilteredStudents(data));
          dispatch(setStudents(data));
        } catch (err) {
          console.error(err);
        }
      },
      providesTags: ['Students'],
    }),
    createStudent: builder.mutation({
      query: (hero) => ({
        url: '/students',
        method: 'POST',
        body: hero,
      }),
      invalidatesTags: ['Students'],
    }),
    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/students/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Students'],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useCreateStudentMutation,
  useDeleteStudentMutation,
} = apiSlice;
