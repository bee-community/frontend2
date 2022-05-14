export type BoardAction = {
  type: 'GET_BOARDS';
  payload: BoardInfo[];
};

export type BoardInfo = {
  id: string;
  name: string;
  path: string;
};
