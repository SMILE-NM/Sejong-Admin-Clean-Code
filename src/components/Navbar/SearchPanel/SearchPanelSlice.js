import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
  students: [],
  filteredStudents: [],
  option: 'id',
});

const filtersSlice = createSlice({
  name: 'filterStudents',
  initialState,
  reducers: {
    setStudents: filtersAdapter.setAll,
    setFilteredStudents: (state, action) => {
      state.filteredStudents = action.payload;
    },
    setOption: (state, action) => {
      state.option = action.payload;
    },
  },
});

const { actions, reducer } = filtersSlice;

export const { selectAll: selectAllStudents, selectById: selectStudentById } =
  filtersAdapter.getSelectors((state) => state.filterStudents);

export const selectFilteredStudents = (state) =>
  state.filterStudents.filteredStudents;

export const getOption = (state) => state.filterStudents.option;

export default reducer;
export const { setFilteredStudents, setOption, setStudents } = actions;
