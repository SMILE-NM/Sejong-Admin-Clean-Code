import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCardId: 1,
};

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
export const selectSelectedCardId = (state) => state.card.selectedCardId;

export default reducer;
export const { setSelectedCardId } = actions;
