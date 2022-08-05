import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  JWTtoken:
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJrc3ciLCJleHAiOjE2NTk3MTA4NDksImlhdCI6MTY1OTY5Mjg0OX0.AwK-tVTON5vzbh1rDP_bMTIncB-3QG7wEdi_OzTxYF_alUSFg9p7Nj9oVF3xUIGcEe_ol4ohNlCK41pYU-nQKw',
};

const tokenSlice = createSlice({
  name: 'JWTtoken',
  initialState,
  reducers: {},
});

// export const { openModal, closeModal } = modalSlice.actions;
export default tokenSlice.reducer;
