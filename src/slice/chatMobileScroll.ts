import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  needScroll: 1,
};

const chatCountSlice = createSlice({
  name: 'needScroll',
  initialState,
  reducers: {
    setNeedScroll: (state, { payload }) => {
      state.needScroll = payload.value;
    },
  },
});

export const { setNeedScroll } = chatCountSlice.actions;
export default chatCountSlice.reducer;
