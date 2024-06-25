import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const studentsAdapter = createEntityAdapter();

const initialState = studentsAdapter.getInitialState({
  students: [],
  filteredStudents: [],
  option: 'id',
  selectedId: localStorage.getItem('selectedId') || null,
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
      localStorage.setItem('selectedId', action.payload);
      state.selectedId = action.payload;
    },
  },
});

const { actions, reducer } = studentSlice;

export const {
  selectAll: selectAllStudents,
  selectById: selectStudentByIdAdapter,
} = studentsAdapter.getSelectors((state) => state.students);

export const selectFilteredStudents = (state) =>
  state.students.filteredStudents;

export const selectStudentById = (state, id) => {
  const student = selectStudentByIdAdapter(state, id);
  if (student) {
    return student;
  }
  const allStudents = selectAllStudents(state);
  return allStudents.length > 0 ? allStudents[0] : null;
};

export const selectSelectedId = (state) => state.students.selectedId;

export const getOption = (state) => state.students.option;

export default reducer;
export const { setFilteredStudents, setOption, setStudents, setSelectedId } =
  actions;
