import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
  filteredStudents: [],
});

const filtersSlice = createSlice({
  name: 'filterStudents',
  initialState,
  reducers: {
    filtersChanged: (state, action) => {
      state.filteredStudents = action.payload;
    },
  },
});

const { actions, reducer } = filtersSlice;

export const selectFilteredStudents = (state) =>
  state.filterStudents.filteredStudents;

export default reducer;
export const { filtersChanged } = actions;
