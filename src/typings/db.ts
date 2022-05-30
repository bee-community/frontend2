export interface IChannel {
  id: string;
  channelName: string;
  limitParticipants: number;
  currentParticipants: number;
  timeToLive: number;
  users: IUser[];
}

export interface IDM {
  userId: string;
  content: string;
  createdAt: Date;
}

export interface IUser {
  id: number;
  name: string;
  url: string; // 주소 창에 보이는 주소
  OwnerId: number; // 워크스페이스 만든 사람 아이디
}

// export interface Channel {
//   channels: dd[];
// }

// export interface dd {
//   // channelHashTags: (3) [{…}, {…}, {…}]
//   channelName: string;
//   currentParticipants: number;
//   id: string;
//   limitParticipants: number;
//   timeToLive: number;
//   // users: null;
// }

export interface HashTag {
  id: number;
  hashTag: {
    id: number;
    tagName: string;
  };
}

export type User = {};

export interface Channel {
  id: string;
  channelName: string;
  limitParticipants: number;
  currentParticipants: number;
  timeToLive: number;
  users: User | null;
  channelHashTags: HashTag[];
}

export interface ChannelResponse {
  channels: Channel[];
}

// export interface hash {
//   id : number;
//   tagName : string;
// }

// export interface renderHash {
//   id: number;
//   hashTag : hash;
// }

//   const response = axios.get<ChannelResponse>()
