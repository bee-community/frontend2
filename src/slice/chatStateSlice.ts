import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chatState: 'chatList',
};

const chatStateSlice = createSlice({
  name: 'chatState',
  initialState,
  reducers: {
    setChatState: (state, { payload }) => {
      state.chatState = payload.value;
    },
  },
});

export const { setChatState } = chatStateSlice.actions;
export default chatStateSlice.reducer;
