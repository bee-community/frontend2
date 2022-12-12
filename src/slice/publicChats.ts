import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  chat: [],
};

const publicChatsSlice = createSlice({
  name: 'publicChats',
  initialState,
  reducers: {
    setPublicChats: (state, { payload }) => {
      state.chat = [...payload.value];
    },
    pushPublicChats: (state, { payload }) => {
      state.chat = [...state.chat, payload.value];
      //   state.chat = state.chat.push(payload.value);
    },
    resetPublicChats: state => {
      state.chat = [];
    },
  },
});

export const { setPublicChats, pushPublicChats, resetPublicChats } = publicChatsSlice.actions;
export default publicChatsSlice.reducer;
