import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '7a9e0778-b94c-4e88-9999-bffcc1a2487a',
  email: 'user19@example.com',
  birthdate: '2022-12-11',
  phone_number: 'string',
  points: 100,
  school: null,
  company: null,
  nickname: '',
  nickname_expire_at: '2022-12-12T10:13:43.114765',
  created_at: '2022-12-11T10:13:43.126034',
  updated_at: '2022-12-11T10:13:43.126034',
  articles: [],
  comments: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, { payload }) => {
      state = payload.value;
      return state;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
