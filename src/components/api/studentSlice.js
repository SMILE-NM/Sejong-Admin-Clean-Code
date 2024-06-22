import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const studentsAdapter = createEntityAdapter();

const initialState = studentsAdapter.getInitialState({
  students: [],
  filteredStudents: [],
  option: 'id',
  selectedId: 2,
});

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    setStudents: studentsAdapter.setAll,
    setFilteredStudents: (state, action) => {
      state.filteredStudents = action.payload;
    },
    setOption: (state, action) => {
      state.option = action.payload;
    },
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

const { actions, reducer } = studentSlice;

export const { selectAll: selectAllStudents, selectById: selectStudentById } =
  studentsAdapter.getSelectors((state) => state.students);

export const selectFilteredStudents = (state) =>
  state.students.filteredStudents;

export const selectSelectedId = (state) => state.students.selectedId;

export const getOption = (state) => state.students.option;

export default reducer;
export const { setFilteredStudents, setOption, setStudents, setSelectedId } =
  actions;
