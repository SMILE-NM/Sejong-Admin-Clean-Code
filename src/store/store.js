import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../components/api/apiSlice';
import filterStudents from '../components/Navbar/SearchPanel/SearchPanelSlice';
import card from '../components/CardList/Card/cardSlice';
import auth from '../components/SigInForm/authSlice';
const store = configureStore({
  reducer: {
    auth,
    filterStudents,
    card,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
