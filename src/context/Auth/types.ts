export type LoginAction = {
  type: 'LOGIN';
  payload: userInfo;
};

export type userInfo = {
  isNewEnter: boolean;
  userEmail: string;
  accessToken: string;
  tokenType: string;
};

export type AuthAction = LoginAction;
