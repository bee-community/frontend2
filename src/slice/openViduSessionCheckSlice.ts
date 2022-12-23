import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sessionCheck: {},
  voiceToken: '',
};

const openViduSessionCheckSlice = createSlice({
  name: 'sessionCheck',
  initialState,
  reducers: {
    setSessionCheck: (state, { payload }) => {
      state.sessionCheck = payload.value;
    },
    setViduVoiceToken: (state, { payload }) => {
      state.voiceToken = payload.value;
    },
  },
});

export const { setSessionCheck, setViduVoiceToken } = openViduSessionCheckSlice.actions;
export default openViduSessionCheckSlice.reducer;
