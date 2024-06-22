import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../components/api/apiSlice';
// import filterStudents from '../components/Navbar/SearchPanel/SearchPanelSlice';
// import card from '../components/CardList/Card/cardSlice';
import auth from '../components/SigInForm/authSlice';
import students from './../components/api/studentSlice';
const store = configureStore({
  reducer: {
    auth,
    students,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
