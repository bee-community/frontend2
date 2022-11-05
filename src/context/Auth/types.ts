export type LoginAction = {
  type: 'LOGIN';
  payload: userInfo;
};

export type userInfo = {
  userEmail: string;
  accessToken: string;
  tokenType: string;
};

export type AuthAction = LoginAction;
