import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const cardsAdapter = createEntityAdapter();

const initialState = cardsAdapter.getInitialState({
  selectedCardId: 1,
});

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSelectedCardId: (state, action) => {
      state.selectedCardId = action.payload;
    },
  },
});

const { actions, reducer } = cardSlice;
export const selectSelectedCardId = (state) => state.filterStudents.option;

export default reducer;
export const { setSelectedCardId } = actions;
