import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
  path: '',
};

const beforeBoardSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setBeforeBoard: (state, { payload }) => {
      state = { ...state, ...payload };
      return state;
    },
  },
});

export const { setBeforeBoard } = beforeBoardSlice.actions;
export default beforeBoardSlice.reducer;
