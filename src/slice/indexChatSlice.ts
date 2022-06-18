import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  indexChat: 0,
};

const indexChatSlice = createSlice({
  name: 'indexChat',
  initialState,
  reducers: {
    setIndexChat: (state, { payload }) => {
      state.indexChat = payload.value;
    },
  },
});

export const { setIndexChat } = indexChatSlice.actions;
export default indexChatSlice.reducer;
