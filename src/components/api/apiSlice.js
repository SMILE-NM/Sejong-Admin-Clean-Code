import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setFilteredStudents, setStudents } from './studentSlice.js';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
    // credentials: 'include',
  }),
  tagTypes: ['Students', 'Database'],
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
    updateStudent: builder.mutation({
      query: ({ id, updatedStudent }) => ({
        url: `/students/${id}`,
        method: 'PUT',
        body: updatedStudent,
      }),
      invalidatesTags: ['Students'],
    }),
    getDatabases: builder.query({
      query: () => '/databases',
      providesTags: ['Database'],
    }),
    createDatabase: builder.mutation({
      query: (newDataBase) => ({
        url: '/databases',
        method: 'POST',
        body: newDataBase,
      }),
      invalidatesTags: ['Database'],
    }),
    selectDatabase: builder.mutation({
      query: (selectedDb) => ({
        url: '/selectDb',
        method: 'POST',
        body: selectedDb,
      }),
      invalidatesTags: ['Database', 'Student'],
    }),
  }),
});

export const {
  useGetStudentsQuery,
  useCreateStudentMutation,
  useDeleteStudentMutation,
  useUpdateStudentMutation,
  useGetDatabasesQuery,
  useCreateDatabaseMutation,
  useSelectDatabaseMutation,
} = apiSlice;
