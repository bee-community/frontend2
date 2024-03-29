import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    name: 'MBTI',
    path: 'mbti',
    id: 'mbti',
  },
  {
    name: 'Big5',
    path: 'big5',
    id: 'big5',
  },
  {
    name: '8values',
    path: '8values',
    id: '8values',
  },
  {
    name: '에고그램',
    path: 'egogram',
    id: 'egogram',
  },
  {
    name: '워크넷 심리 검사',
    path: 'worknet',
    id: 'worknet',
  },
  {
    name: '가입 인사',
    path: 'greeting',
    id: 'greeting',
  },
  {
    name: '재잘재잘',
    path: 'talk',
    id: 'talk',
  },
  {
    name: '유머',
    path: 'humor',
    id: 'humor',
  },
  {
    name: '반려동물',
    path: 'pet',
    id: 'pet',
  },
  {
    name: '썸, 연애',
    path: 'love',
    id: 'love',
  },
  {
    name: '여행',
    path: 'travel',
    id: 'travel',
  },
  {
    name: 'AMA',
    path: 'ama',
    id: 'ama',
  },
  {
    name: '셀프 소개팅',
    path: 'self',
    id: 'self',
  },
  {
    name: '만남 후기',
    path: 'review',
    id: 'review',
  },
];

const boardSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setBoard: (state, { payload }) => {
      state = payload.value;
      return state;
    },
  },
});

export const { setBoard } = boardSlice.actions;
export default boardSlice.reducer;
