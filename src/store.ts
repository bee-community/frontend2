import { configureStore } from '@reduxjs/toolkit';
import beforeBoardSlice from 'redux/beforeBoardSlice';
import boards from 'redux/boards';
import openStateSlice from 'redux/openStateSlice';
import userSlice from 'redux/userSlice';
import chatDataListSlice from 'slice/chatDataListSlice';
import chatMobileScroll from 'slice/chatMobileScroll';
import clientSlice from 'slice/clientSlice';
import indexChatSlice from 'slice/indexChatSlice';
import openViduSessionCheckReducer from 'slice/openViduSessionCheckSlice';
import pointModalReducer from 'slice/pointModal';
import userInfoReducer from 'slice/userInfo';

import chatColor from './slice/chatColorSlice';
import chatCountReducer from './slice/chatCountSlice';
import chatStateReducer from './slice/chatStateSlice';
import endTTLReducer from './slice/endTTLSlice';
import liveTimeReducer from './slice/liveTimeSlice';
import logIdReducer from './slice/logIdSlice';
import publicChatsReducer from './slice/publicChats';
import tokenReducer from './slice/tokenSilice';
import userDataReducer from './slice/userDataSlice';
import userEnterNumberReducer from './slice/userEnterNumberSlice';

export const store = configureStore({
  reducer: {
    JWTtoken: tokenReducer,
    userData: userDataReducer,
    publicChats: publicChatsReducer,
    userEnterNumber: userEnterNumberReducer,
    client: clientSlice,
    liveTime: liveTimeReducer,
    indexChat: indexChatSlice,
    endTTL: endTTLReducer,
    chatCount: chatCountReducer,
    logId: logIdReducer,
    chatColor: chatColor,
    chatState: chatStateReducer,
    pointOpen: pointModalReducer,
    openViduSessionCheck: openViduSessionCheckReducer,
    dataList: chatDataListSlice,
    needScroll: chatMobileScroll,
    userInfo: userInfoReducer,
    boardData: beforeBoardSlice,
    openState: openStateSlice,
    user: userSlice,
    boards: boards,
  },
});
