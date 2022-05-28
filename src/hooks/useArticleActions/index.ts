import request from 'api';
import { ArticleGetType } from 'context/Article/types';

function useArticleActions() {
  function getArticlesOfBoard(board_name?: string) {
    request<ArticleGetType>('GET', `/boards/${board_name}`, {
      board_id: board_name,
    }).then(response => {
      console.log('response = ', response.data);
    });
  }

  return {
    getArticlesOfBoard,
  };
}

export default useArticleActions;
