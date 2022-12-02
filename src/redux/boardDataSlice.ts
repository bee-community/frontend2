import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boardId: '',
  boardName: '',
  boardPath: '',
};

const boardDataSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setBoardData: (state, { payload }) => {
      state = { ...state, ...payload };
      return state;
    },
  },
});

export const { setBoardData } = boardDataSlice.actions;
export default boardDataSlice.reducer;
