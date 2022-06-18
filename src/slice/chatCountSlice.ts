import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatCount: 0,
};

const chatCountSlice = createSlice({
  name: 'chatCount',
  initialState,
  reducers: {
    setChatCount: (state, { payload }) => {
      state.chatCount = payload.value;
    },
  },
});

export const { setChatCount } = chatCountSlice.actions;
export default chatCountSlice.reducer;
