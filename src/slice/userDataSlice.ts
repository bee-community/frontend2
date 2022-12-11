import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
  userEmail: 'user1@example.com',
  receivername: '',
  connected: false,
  message: '',
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    changeUserDataEmail: (state, { payload }) => {
      state.userEmail = payload.userEmail;
    },
    changeUserDataConnected: (state, { payload }) => {
      state.connected = payload.connected;
    },
    changeUserDataMessage: (state, { payload }) => {
      state.message = payload.message;
    },
  },
});

export const {
  changeUserDataEmail,
  changeUserDataConnected,
  changeUserDataMessage,
} = userDataSlice.actions;
export default userDataSlice.reducer;
