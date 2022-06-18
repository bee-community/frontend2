import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

const initialState: any = {
  chat: [],
};

const publicChatsSlice = createSlice({
  name: 'publicChats',
  initialState,
  reducers: {
    setPublicChats: (state, { payload }) => {
      console.log(payload);
      state.chat = [...payload.value];
      console.log(state.chat);
    },
    pushPublicChats: (state, { payload }) => {
      console.log(payload.value);
      state.chat = [...state.chat, payload.value];
      //   state.chat = state.chat.push(payload.value);
      console.log(state.chat);
    },
    resetPublicChats: state => {
      state.chat = [];
    },
  },
});

export const { setPublicChats, pushPublicChats, resetPublicChats } =
  publicChatsSlice.actions;
export default publicChatsSlice.reducer;
