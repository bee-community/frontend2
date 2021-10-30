export type LoginAction = {
  type: 'LOGIN';
  payload: userInfo;
};

export type userInfo = {
  username: string;
  access_token: string;
  token_type: string;
};

export type AuthAction = LoginAction;
