import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pointOpen: false,
  remainOpen: false,
  remainPoint: 0,
  usePoint: 0,
  waitOpen: false,
  createPointModalExcept: false,
  desktopBottomDrawerOpen: false,
  usePointExcept: false,
  voiceStateInfoModal: false,
  voiceStateInfoText: '',
};

const pointModalSlice = createSlice({
  name: 'pointOpen',
  initialState,
  reducers: {
    setPointOpen: (state, { payload }) => {
      console.log(payload.value);
      state.pointOpen = payload.value;
    },
    setRemainPoint: (state, { payload }) => {
      console.log(payload.value);
      state.remainPoint = payload.value;
    },
    setRemainOpen: (state, { payload }) => {
      console.log(payload.value);
      state.remainOpen = payload.value;
    },
    setUsePoint: (state, { payload }) => {
      console.log(payload.value);
      state.usePoint = payload.value;
    },
    setWaitOpen: (state, { payload }) => {
      console.log(payload.value);
      state.waitOpen = payload.value;
    },
    setCreatePointModalExcept: (state, { payload }) => {
      console.log(payload.value);
      state.createPointModalExcept = payload.value;
    },
    setDesktopBottomDrawerOpen: (state, { payload }) => {
      console.log(payload.value);
      state.desktopBottomDrawerOpen = payload.value;
    },
    setUsePointExcept: (state, { payload }) => {
      console.log(payload.value);
      state.usePointExcept = payload.value;
    },
    setVoiceStateInfoModal: (state, { payload }) => {
      console.log(payload.value);
      state.voiceStateInfoModal = payload.value;
    },
    setVoiceStateInfoText: (state, { payload }) => {
      console.log(payload.value);
      state.voiceStateInfoText = payload.value;
    },
  },
});

export const {
  setWaitOpen,
  setPointOpen,
  setUsePoint,
  setRemainPoint,
  setRemainOpen,
  setCreatePointModalExcept,
  setDesktopBottomDrawerOpen,
  setUsePointExcept,
  setVoiceStateInfoModal,
  setVoiceStateInfoText,
} = pointModalSlice.actions;
export default pointModalSlice.reducer;
