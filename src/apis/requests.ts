import axios from 'axios';
import { SpecificBoardArticlesType } from 'context/Articles';

export const getSpecificBoardArticles = async (REQUEST_URL: string, board_path?: string) => {
  const { data } = await axios.get<SpecificBoardArticlesType>(`${REQUEST_URL}/boards/${board_path}`);

  return data;
};
