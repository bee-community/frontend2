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
    resetBeforeBoard: state => {
      state = initialState;
      return state;
    },
  },
});

export const { setBeforeBoard, resetBeforeBoard } = beforeBoardSlice.actions;
export default beforeBoardSlice.reducer;
