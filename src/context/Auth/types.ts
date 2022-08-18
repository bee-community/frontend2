export type LoginAction = {
  type: 'LOGIN';
  payload: UserToken;
};

export type UserAction = {
  type: 'GET_USER';
  payload: UserInfo;
};

export type UserToken = {
  username: string;
  access_token: string;
  token_type: string;
};

export type UserInfo = {
  created_at: string;
  updated_at: string;
  id: string;
  email: string;
  password: string;
  birthdate: string;
  phone_number: string;
  school: string;
  company: string;
  nickname: string;
  nickname_expire_at: string;
  is_admin: false;
};

export type AuthAction = LoginAction;
