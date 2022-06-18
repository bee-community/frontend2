import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatColor: 'chatList',
};

const chatColorSlice = createSlice({
  name: 'chatColor',
  initialState,
  reducers: {
    setChatColor: (state, { payload }) => {
      state.chatColor = payload.value;
    },
  },
});

export const { setChatColor } = chatColorSlice.actions;
export default chatColorSlice.reducer;
